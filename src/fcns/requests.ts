import { Actions, LogLevels, RepetierServerClient } from "../index.js"

export async function listPrinter(this: RepetierServerClient) {
	return this._sendAndListen(Actions.LIST_PRINTER)
}

export async function ping(this: RepetierServerClient) {
	return this._sendAndListen(Actions.PING)
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
	return this._sendAndListen(Actions.STATE_LIST)
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
	}
	return this._sendAndListen(Actions.MOVE, data)
}

export async function messages(this: RepetierServerClient) {
	return this._sendAndListen(Actions.MESSAGES)
}

export async function removeMessage(this: RepetierServerClient, id: number) {
	return this._sendAndListen(Actions.REMOVE_MESSAGE, { id, a: "" })
}

export async function removeModel(this: RepetierServerClient, id: number) {
	return this._sendAndListen(Actions.REMOVE_MODEL, { id })
}

export async function listModels(
	this: RepetierServerClient,
	group: string = "*"
) {
	return this._sendAndListen(Actions.LIST_MODELS, { group })
}

export async function copyModel(
	this: RepetierServerClient,
	id: number,
	autostart: boolean = false
) {
	const data = { id, autostart }
	return this._sendAndListen(Actions.COPY_MODEL, data)
}

export async function listJobs(this: RepetierServerClient) {
	return this._sendAndListen(Actions.LIST_JOBS)
}

export async function modelInfo(this: RepetierServerClient, id: string) {
	return this._sendAndListen(Actions.MODEL_INFO, { id })
}

export async function jobInfo(this: RepetierServerClient, id: string) {
	return this._sendAndListen(Actions.JOB_INFO, { id })
}

export async function startJob(this: RepetierServerClient, id: string) {
	return this._sendAndListen(Actions.START_JOB, { id })
}

export async function stopJob(this: RepetierServerClient) {
	return this._sendAndListen(Actions.START_JOB)
}

export async function continueJob(this: RepetierServerClient) {
	return this._sendAndListen(Actions.CONTINUE_JOB)
}

export async function removeJob(this: RepetierServerClient) {
	return this._sendAndListen(Actions.REMOVE_JOB)
}

export async function getPrinterConfig(
	this: RepetierServerClient,
	printer: string = ""
) {
	return this._sendAndListen(Actions.GET_PRINTER_CONFIG, { printer })
}

export async function setPrinterConfig(this: RepetierServerClient, config: {}) {
	return this._sendAndListen(Actions.SET_PRINTER_CONFIG, config)
}

export async function getScript(this: RepetierServerClient, name: string) {
	return this._sendAndListen(Actions.GET_SCRIPT, { name })
}

export async function setScript(
	this: RepetierServerClient,
	name: string,
	script: string
) {
	return this._sendAndListen(Actions.SET_SCRIPT, { name, script })
}

export async function activate(this: RepetierServerClient, printer: string) {
	return this._sendAndListen(Actions.ACTIVATE, { printer })
}

export async function deactivate(this: RepetierServerClient, printer: string) {
	return this._sendAndListen(Actions.DEACTIVATE, { printer })
}

export async function communicationData(this: RepetierServerClient) {
	return this._sendAndListen(Actions.COMMUNICATION_DATA, {})
}

export async function getEeprom(this: RepetierServerClient) {
	return this._sendAndListen(Actions.GET_EEPROM)
}

export async function setEeprom(this: RepetierServerClient, eeprom: {}) {
	return this._sendAndListen(Actions.SET_EEPROM, { eeprom })
}

export async function listExternalCommands(this: RepetierServerClient) {
	return this._sendAndListen(Actions.LIST_EXTERNAL_COMMANDS)
}

export async function runExternalCommand(
	this: RepetierServerClient,
	id: string
) {
	return this._sendAndListen(Actions.LIST_EXTERNAL_COMMANDS, { id })
}

export async function createConfiguration(
	this: RepetierServerClient,
	printerName: string,
	printer: string
) {
	const data = {
		name: printerName,
		slug: printer,
	}
	return this._sendAndListen(Actions.LIST_EXTERNAL_COMMANDS, data)
}

export async function removeConfiguration(
	this: RepetierServerClient,
	printer: string
) {
	return this._sendAndListen(Actions.REMOVE_CONFIGURATION, { slug: printer })
}

export async function getSettings(this: RepetierServerClient) {
	return this._sendAndListen(Actions.GET_SETTINGS)
}

export async function updateSettings(this: RepetierServerClient, settings: {}) {
	return this._sendAndListen(Actions.UPDATE_SETTINGS, settings)
}

export async function updateUserSettings(
	this: RepetierServerClient,
	settings: {}
) {
	return this._sendAndListen(Actions.UPDATE_USER_SETTINGS, settings)
}

export async function userlist(this: RepetierServerClient) {
	return this._sendAndListen(Actions.USER_LIST)
}

export async function createUser(
	this: RepetierServerClient,
	login: string,
	password: string,
	permissions: Permissions
) {
	return this._sendAndListen(Actions.CREATE_USER, {
		login,
		password,
		permissions,
	})
}

export async function updateUser(
	this: RepetierServerClient,
	login: string,
	permissions: Permissions,
	password?: string
) {
	return this._sendAndListen(Actions.UPDATE_USER, {
		login,
		password,
		permissions,
	})
}

export async function deleteUser(this: RepetierServerClient, login: string) {
	return this._sendAndListen(Actions.DELETE_USER, { login })
}

export async function listPorts(this: RepetierServerClient) {
	return this._sendAndListen(Actions.LIST_PORTS)
}

export async function updateAvailable(this: RepetierServerClient) {
	return this._sendAndListen(Actions.UPDATE_AVAILABLE)
}

export async function ignoreUpdate(this: RepetierServerClient) {
	return this._sendAndListen(Actions.IGNORE_UPDATE)
}

export async function testPushMessage(this: RepetierServerClient) {
	return this._sendAndListen(Actions.TEST_PUSH_MESSAGE)
}

export async function listFirmwareNames(this: RepetierServerClient) {
	return this._sendAndListen(Actions.LIST_FIRMWARE_NAMES)
}

export async function startUpdateFirmwareSettings(this: RepetierServerClient) {
	return this._sendAndListen(Actions.START_UPDATE_FIRMWARE_SETTINGS)
}

export async function getFirmwareSettings(this: RepetierServerClient) {
	return this._sendAndListen(Actions.GET_FIRMWARE_SETTINGS)
}

export async function getFirmwareData(this: RepetierServerClient) {
	return this._sendAndListen(Actions.GET_FIRMWARE_DATA)
}

export async function listLogs(this: RepetierServerClient) {
	return this._sendAndListen(Actions.LIST_LOGS)
}

export async function removeLog(this: RepetierServerClient, log: string) {
	return this._sendAndListen(Actions.REMOVE_LOG, { log })
}

export async function setLogLevel(
	this: RepetierServerClient,
	level: LogLevels
) {
	return this._sendAndListen(Actions.REMOVE_LOG, { level })
}

export async function sendMoves(this: RepetierServerClient) {
	return this._sendAndListen(Actions.SEND_MOVES)
}

export async function hideMoves(this: RepetierServerClient) {
	return this._sendAndListen(Actions.HIDE_MOVES)
}

export async function setSpeedMultiplier(
	this: RepetierServerClient,
	speed: number
) {
	return this._sendAndListen(Actions.SET_SPEED_MULTIPLY, { speed })
}

export async function setFlowMultiplier(
	this: RepetierServerClient,
	speed: number
) {
	return this._sendAndListen(Actions.SET_FLOW_MULTIPLY, { speed })
}

export async function setFanSpeed(
	this: RepetierServerClient,
	speed: number,
	fan: number = 0
) {
	return this._sendAndListen(Actions.SET_FAN_SPEEED, { speed, fanId: fan })
}

export async function setExtruderTemperature(
	this: RepetierServerClient,
	temperature: number,
	extruder: number = 0
) {
	return this._sendAndListen(Actions.SET_FAN_SPEEED, { temperature, extruder })
}

export async function setBedTemperature(
	this: RepetierServerClient,
	temperature: number,
	bed: number = 0
) {
	return this._sendAndListen(Actions.SET_BED_TEMPERATURE, {
		temperature,
		bedId: bed,
	})
}

export async function setChamberTemperature(
	this: RepetierServerClient,
	temperature: number,
	chamber: number = 0
) {
	return this._sendAndListen(Actions.SET_CHAMBER_TEMPERATURE, {
		temperature,
		chamberId: chamber,
	})
}

export async function emergencyStop(this: RepetierServerClient) {
	return this._sendAndListen(Actions.EMERGENCY_STOP)
}

export async function version(this: RepetierServerClient) {
	return this._sendAndListen(Actions.VERSION)
}

export async function getPrinterSetting(
	this: RepetierServerClient,
	key: string
) {
	return this._sendAndListen(Actions.GET_PRINTER_SETTING, { key })
}

export async function setPrinterSetting(
	this: RepetierServerClient,
	key: string,
	value: string
) {
	let data: { [k: string]: string } = {}
	data[key] = value
	return this._sendAndListen(Actions.SET_PRINTER_SETTING, data)
}

export async function getPrinterSettings(this: RepetierServerClient) {
	return this._sendAndListen(Actions.GET_PRINTER_SETTINGS)
}

export async function listModelGroups(this: RepetierServerClient) {
	return this._sendAndListen(Actions.LIST_MODEL_GROUPS)
}

export async function addModelGroup(
	this: RepetierServerClient,
	groupName: string
) {
	return this._sendAndListen(Actions.ADD_MODEL_GROUP, { groupName })
}

export async function deleteModelGroup(
	this: RepetierServerClient,
	groupName: string,
	delFiles: 0 | 1
) {
	return this._sendAndListen(Actions.DELETE_MODEL_GROUP, {
		groupName,
		delFiles,
	})
}

export async function moveModelFileToGroup(
	this: RepetierServerClient,
	groupName: string,
	fileId: string
) {
	return this._sendAndListen(Actions.MOVE_MODEL_FILE_TO_GROUP, {
		groupName,
		fileId,
	})
}

export async function listFilesystemFolders(this: RepetierServerClient) {
	return this._sendAndListen(Actions.LIST_FILESYSTEM_FOLDERS)
}

export async function getFolders(this: RepetierServerClient) {
	return this._sendAndListen(Actions.GET_FOLDERS)
}

export async function setFolders(this: RepetierServerClient, folders: {}) {
	return this._sendAndListen(Actions.SET_FOLDERS, folders)
}

export async function browseFolder(
	this: RepetierServerClient,
	folder: number,
	root: string,
	next: string
) {
	return this._sendAndListen(Actions.BROWSE_FOLDERS, {
		folder,
		root,
		next,
	})
}

export async function importUrl(
	this: RepetierServerClient,
	folder: string,
	files: string[]
) {
	return this._sendAndListen(Actions.IMPORT_URL, {
		folder,
		files,
	})
}

export async function canUploadGCodeWithSize(
	this: RepetierServerClient,
	size: number
) {
	return this._sendAndListen(Actions.CAN_UPLOAD_GCODE_WITH_SIZE, { size })
}

export async function cooldown(
	this: RepetierServerClient,
	extruder: number,
	bed: number,
	chamber: number
) {
	return this._sendAndListen(Actions.COOLDOWN, {
		extruder,
		bed,
		chamber,
	})
}

export async function preheat(
	this: RepetierServerClient,
	extruder: number,
	bed: number,
	chamber: number
) {
	return this._sendAndListen(Actions.PREHEAT, {
		extruder,
		bed,
		chamber,
	})
}

export async function babystep(this: RepetierServerClient, z: number) {
	return this._sendAndListen(Actions.PREHEAT, { z })
}

export async function sendQuickCommand(
	this: RepetierServerClient,
	name: string
) {
	return this._sendAndListen(Actions.SEND_QUICK_COMMAND, { name })
}
