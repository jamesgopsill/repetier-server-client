import type { RepetierServerClient } from "../index.js"
import WebSocket from "isomorphic-ws"
import { RepetierServerEvents } from "../definitions/enums.js"

export async function connect(this: RepetierServerClient) {
	return new Promise((resolve) => {
		const url = `${this.wsUrl}?apiKey=${this.apiKey}`
		console.log(url)
		this.ws = new WebSocket(url)
		const listener = async () => {
			console.log("Connected")
			this.ws.removeListener(RepetierServerEvents.OPEN, listener)
			clearTimeout(timeout)
			resolve(true)
		}
		const timeout = setTimeout(() => {
			this.ws.removeListener(RepetierServerEvents.OPEN, listener)
			resolve(false)
		}, 1000)
		this.ws.on(RepetierServerEvents.OPEN, listener)
		this.ws.on(RepetierServerEvents.ERROR, (e: any) => {
			console.log("WebSocket Error", e)
		})
	})
}
