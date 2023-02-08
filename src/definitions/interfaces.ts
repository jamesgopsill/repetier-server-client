export type HttpResponse<T> =
	| ({
			ok: true
			data: T
	  } & Response)
	| ({
			ok: false
			data: null
	  } & Response)

export interface ServerInfo {
	apikey: string
	name: string
	version: string
	printers: PrinterInfo[]
}

export interface PrinterInfo {
	active: boolean
	name: string
	online: number
	slug: string
}

export type WsResponse<T> = GenericResponse<T> | null

export interface GenericResponse<T> {
	callback_id: string
	data: T
	session: string
}

export interface WsRequest {
	action: string
	callback_id: string
	data: any
	printer?: string
}
