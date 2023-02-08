import type WebSocket from "isomorphic-ws"
import { connect } from "./fcns/connect.js"
import { disconnect } from "./fcns/disconnect.js"
import { info } from "./fcns/info.js"
import * as Requests from "./fcns/requests.js"
import { _sendAndListen } from "./fcns/send-and-listen.js"

export * from "./definitions/enums"
export * from "./definitions/interfaces"

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

	protected _sendAndListen = _sendAndListen

	public info = info
	public connect = connect
	public disconnect = disconnect
	public ping = Requests.ping
	public extendPing = Requests.extendPing
	public listPrinter = Requests.listPrinter
	public stateList = Requests.stateList
	public fetchLog = Requests.fetchLog
	public move = Requests.move
	public messages = Requests.messages
	public removeMessage = Requests.removeMessage
	public removeModel = Requests.removeModel
	public listModels = Requests.listModels
	public copyModel = Requests.copyModel
	public listJobs = Requests.listJobs
	public modelInfo = Requests.modelInfo
	public jobInfo = Requests.jobInfo
	public startJob = Requests.startJob
	public stopJob = Requests.stopJob
	public continueJob = Requests.continueJob
	public removeJob = Requests.removeJob
	public getPrinterConfig = Requests.getPrinterConfig
	public setPrinterConfig = Requests.setPrinterConfig
	public getScript = Requests.getScript
	public setScript = Requests.setScript
	public activate = Requests.activate
	public deactivate = Requests.deactivate
	public getEeprom = Requests.getEeprom
	public setEeprom = Requests.setEeprom
	public listExternalCommands = Requests.listExternalCommands
	public runExternalCommand = Requests.runExternalCommand
	public createConfiguration = Requests.createConfiguration
	public removeConfiguration = Requests.removeConfiguration
	public getSettings = Requests.getSettings
	public updateSettings = Requests.updateSettings
	public updateUserSettings = Requests.updateUserSettings
	public userlist = Requests.userlist
	public createUser = Requests.createUser
	public updateUser = Requests.updateUser
	public deleteUser = Requests.deleteUser
	public listPorts = Requests.listPorts
	public updateAvailable = Requests.updateAvailable
	public ignoreUpdate = Requests.ignoreUpdate
	public testPushMessage = Requests.testPushMessage
	public listFirmwareNames = Requests.listFirmwareNames
	public startUpdateFirmwareSettings = Requests.startUpdateFirmwareSettings
	public getFirmwareSettings = Requests.getFirmwareSettings
	public getFirmwareData = Requests.getFirmwareData
	public listLogs = Requests.listLogs
	public removeLog = Requests.removeLog
	public setLogLevel = Requests.setLogLevel
	public sendMoves = Requests.sendMoves
	public hideMoves = Requests.hideMoves
	public setSpeedMultiplier = Requests.setSpeedMultiplier
	public setFlowMultiplier = Requests.setFlowMultiplier
	public setFanSpeed = Requests.setFanSpeed
	public setExtruderTemperature = Requests.setExtruderTemperature
	public setBedTemperature = Requests.setBedTemperature
	public setChamberTemperature = Requests.setChamberTemperature
	public emergencyStop = Requests.emergencyStop
	public version = Requests.version
	public getPrinterSetting = Requests.getPrinterSetting
	public setPrinterSetting = Requests.setPrinterSetting
	public getPrinterSettings = Requests.getPrinterSettings
	public listModelGroups = Requests.listModelGroups
	public addModelGroup = Requests.addModelGroup
	public deleteModelGroup = Requests.deleteModelGroup
	public moveModelFileToGroup = Requests.moveModelFileToGroup
	public listFilesystemFolders = Requests.listFilesystemFolders
	public setFolders = Requests.setFolders
	public browseFolder = Requests.browseFolder
	public importUrl = Requests.importUrl
	public canUploadGCodeWithSize = Requests.canUploadGCodeWithSize
	public cooldown = Requests.cooldown
	public preheat = Requests.preheat
	public babystep = Requests.babystep
	public sendQuickCommand = Requests.sendQuickCommand
}
