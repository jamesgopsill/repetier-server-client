import { v4 as uuidv4 } from "uuid"
import { RepetierServerEvents } from "../definitions/enums.js"
import type { RepetierServerClient, WsRequest, WsResponse } from "../index.js"

export async function _sendAndListen(
	this: RepetierServerClient,
	action: string,
	data: {} = {}
) {
	return new Promise<WsResponse<any>>((resolve) => {
		if (!this.ws) {
			console.warn("Not Connected")
			resolve(null)
			return
		}
		const cid = uuidv4()
		const request: WsRequest = {
			action: action,
			data: data,
			callback_id: cid,
		}
		const listener = (buf: Buffer) => {
			const response: any = JSON.parse(buf.toString())
			if (response.callback_id == request.callback_id) {
				this.ws.removeListener(RepetierServerEvents.MESSAGE, listener)
				clearTimeout(timeout)
				resolve(response)
			}
		}
		const timeout = setTimeout(() => {
			this.ws.removeListener(RepetierServerEvents.MESSAGE, listener)
			resolve(null)
		}, 1000)
		this.ws.on(RepetierServerEvents.MESSAGE, listener)
		const buf = Buffer.from(JSON.stringify(request))
		this.ws.send(buf)
	})
}
