import { connect } from "./fcns/connect.js"
import { disconnect } from "./fcns/disconnect.js"
import { info } from "./fcns/info.js"
import type WebSocket from "isomorphic-ws"
import { _sendAndListen } from "./fcns/send-and-listen.js"
import * as Requests from "./fcns/requests.js"

export * from "./definitions/interfaces"
export * from "./definitions/enums"

export class RepetierServerClient {
	httpUrl: string = ""
	wsUrl: string = ""
	ws: WebSocket | null = null
	apiKey: string = ""

	constructor(url: string, apiKey: string = "") {
		this.httpUrl = url
		this.wsUrl = url.replace("http://", "ws://") + "/socket"
		this.apiKey = apiKey
	}

	_sendAndListen = _sendAndListen

	public info = info
	public connect = connect
	public disconnect = disconnect
	public ping = Requests.ping
	public extendPing = Requests.extendPing
	public listPrinter = Requests.listPrinter
	public stateList = Requests.stateList
	public fetchLog = Requests.fetchLog
	public move = Requests.move
}
