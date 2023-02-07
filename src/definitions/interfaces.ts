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

export type WsResponse = GenericResponse | null

export interface GenericResponse {
	callback_id: string
	data: any
	session: string
}

export interface WsRequest {
	action: string
	callback_id: string
	data: any
	printer?: string
}

/*
export enum RepetierServerEvents {
	OPEN = "open",
	MESSAGE = "message",
	DISCONNECTED = "disconnected",
}

export interface RepetierMessageBase {
	callback_id: number
}

export type RepetierMessage = {
	data: any[]
	callback_id: number
	eventList: boolean
} | null


	MESSAGE = "message",
	SERVER_EVENT = "serverEvent",
	LOGIN_REQUIRED = "loginRequired",
	LOGOUT = "logout",
	USER_CREDENTIALS = "userCredentials",
	PRINTER_LIST_CHANGED = "printerListChanged",
	MESSAGES_CHANGED = "messagesChanged",
	MOVE = "move",
	LOG = "log",
	JOBS_CHANGED = "jobsChanged",
	JOB_FINISHED = "jobsFinished",
	JOB_KILLED = "jobKilled",
	JOB_STARTED = "jobStarted",
	PRINT_QUEUE_CHANGED = "printqueueChanged",
	FOLDERS_CHANGED = "foldersChanged",
	EEPROM_CLEAR = "eepromClear",
	EEPROM_DATA = "eepromData",
	STATE = "state",
	CONFIG = "config",
	FIRMWARE_CHANGED = "firmwareChanged",
	TEMP = "temp",
	SETTING_CHANGED = "settingChanged",
	PRINTER_SETTING_CHANGED = "printerSettingChanged",
	MODEL_GROUP_LIST_CHANGED = "modelGroupListChanged",
	PREPARE_JOB = "prepareJob",
	PREPARE_JOB_FINISHED = "prepareJobFinished",
	CHANGE_FILAMENT_REQUEST = "changeFilamentRequested",
	REMOTE_SERVERS_CHANGED = "remoteServersChanged",
	GET_EXTERNAL_LINKS = "getExternalLinks",
	OPEN = "open",
	DISCONNECTED = "disconnected",
	CONNECTION_ERROR = "connectionError",

export interface Ping {
	action: "ping"
	data: {}
	printer: string
	callback_id: number
}

export interface ExtendPing {
	action: "extendPing"
	data: {
		timeout: number
	}
	printer: string
	callback_id: number
}
	*/
