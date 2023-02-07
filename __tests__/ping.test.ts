import { RepetierServerClient } from "../src"

let client: RepetierServerClient

beforeAll(async () => {
	const url = "http://localhost:3344"
	client = new RepetierServerClient(url)
	const r = await client.info()
	if (!r.ok) {
		console.error("Could not access server")
		process.exit()
	}
	client.apiKey = r.data.apikey
	const connected = await client.connect()
	if (!connected) {
		console.error("Could not access server")
		process.exit()
	}
})

test(`Ping`, async () => {
	const r = await client.ping()
	if (r) {
		expect(true).toBe(true)
	} else {
		expect(true).toBe(false)
	}
})

test(`Extend Ping`, async () => {
	const r = await client.extendPing(10)
	if (r) {
		console.log(r)
		expect(true).toBe(true)
	} else {
		expect(true).toBe(false)
	}
})

test(`List Printer`, async () => {
	const r = await client.listPrinter()
	if (r) {
		console.log(r)
		expect(true).toBe(true)
	} else {
		expect(true).toBe(false)
	}
})

afterAll(() => {
	console.log("Closing connection.")
	client.disconnect()
})
