import type { RepetierServerClient } from "../index.js"

export function disconnect(this: RepetierServerClient) {
	if (this.ws) {
		this.ws.close()
		this.ws = null
	}
}
