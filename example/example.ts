import WebSocket from "ws"
import { RepetierServerEvents, Ping } from "../src"

console.log("Hello")

const apiKey = "e11aeb3c-5401-4ca9-90c4-abd200e882fb"

const ws = new WebSocket(`ws://localhost:3344/socket?apiKey=${apiKey}`)

const ping = async (id: number) => {
	return new Promise((resolve) => {
		const p: any = {
			action: "ping",
			data: {},
			callback_id: id,
		}
		const listener = (buf: Buffer) => {
			console.log("Listened")
			const msg: any = JSON.parse(buf.toString())
			if (msg.callback_id == id) {
				console.log("Correct Response")
				console.log(msg.callback_id, id)
				ws.removeListener(RepetierServerEvents.MESSAGE, listener)
				resolve(msg)
			}
		}
		console.log("Adding listener")
		ws.on(RepetierServerEvents.MESSAGE, listener)
		const buf = Buffer.from(JSON.stringify(p))
		ws.send(buf)
		setTimeout(() => {
			resolve(null)
		}, 1000)
	})
}

/*async () => {
	const p: any = {
		action: "ping",
		data: {},
		callback_id: 1,
	}
	const listener = (buf: Buffer) => {
		console.log("Listened")
		const msg: any = JSON.parse(buf.toString())
		if (msg.callback_id == 1) {
			console.log("Correct Response")
			console.log(msg)
			//ws.removeListener(RepetierServerEvents.MESSAGE, listener)
		}
	}
	console.log("Adding listener")
	ws.on(RepetierServerEvents.MESSAGE, listener)
	const buf = Buffer.from(JSON.stringify(p))
	ws.send(buf)
}
*/

ws.on(RepetierServerEvents.OPEN, async () => {
	console.log("Open")
	/*
	const ping: any = {
		action: "ping",
		data: {},
		callback_id: 1,
		//printer: "",
	}
	const buf = Buffer.from(JSON.stringify(ping))
	ws.send(buf)
	*/
	const r1 = await ping(1)
	console.log(r1)
	const r2 = await ping(2)
	console.log(r2)
})

ws.on(RepetierServerEvents.MESSAGE, (msg: any) => {
	console.log("Message Received")
	console.log(msg.toString())
})

ws.on(RepetierServerEvents.DISCONNECTED, () => {
	console.log("Disconnected")
})

setTimeout(() => {
	console.log("closing the connection")
	ws.close()
}, 3000)
