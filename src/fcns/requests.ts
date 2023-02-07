import { Actions, RepetierServerClient } from "../index.js"

export async function listPrinter(this: RepetierServerClient) {
	return this._sendAndListen(Actions.LIST_PRINTER, {})
}

export async function ping(this: RepetierServerClient) {
	return this._sendAndListen(Actions.PING, {})
}

export async function extendPing(this: RepetierServerClient, timeout: number) {
	const data = {
		timeout,
	}
	return this._sendAndListen(Actions.EXTEND_PING, data)
}

export async function sendGcode(
	this: RepetierServerClient,
	printer: string,
	cmd: string
) {
	const data = {
		cmd,
		printer,
	}
	return this._sendAndListen(Actions.SEND, data)
}

export async function stateList(this: RepetierServerClient) {
	return this._sendAndListen(Actions.STATE_LIST, {})
}

export async function fetchLog(
	this: RepetierServerClient,
	start: number = 0,
	filter: number = 10
) {
	const data = {
		start,
		filter,
	}
	return this._sendAndListen(Actions.RESPONSE, data)
}

export async function move(
	this: RepetierServerClient,
	printer: string,
	x: number,
	y: number,
	z: number,
	e: number,
	speed: number,
	relative: boolean = true
) {
	const data = {
		x,
		y,
		z,
		e,
		speed,
		relative,
		printer,
	}
	return this._sendAndListen(Actions.MOVE, data)
}
