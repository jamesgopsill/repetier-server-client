import type { HttpResponse, ServerInfo } from "../definitions/interfaces.js"
import type { RepetierServerClient } from "../index.js"

export async function info(this: RepetierServerClient) {
	const url = `${this.httpUrl}/printer/info`
	const config: RequestInit = {
		method: "GET",
	}
	const request = new Request(url, config)
	const r = (await fetch(request)) as HttpResponse<ServerInfo>
	r.data = null
	if (r.ok) r.data = await r.json()
	return r
}
