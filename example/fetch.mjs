const apiKey = "e11aeb3c-5401-4ca9-90c4-abd200e882fb"

const arrayUrlEncode = (array) => {
	let s = ""
	for (const [k, v] of Object.entries(array)) {
		s += `${k}=${v}&`
	}
	s = s.substring(0, s.length - 1)
	return encodeURI(s)
}

const config = {
	method: "GET",
	headers: {
		"x-api-key": apiKey,
	},
}

const data = {
	action: "login",
	//data: "",
	//callback_id: 1,
}

const encoded = arrayUrlEncode(data)

const url = `http://localhost:3344/printer/api//?${encoded}`
console.log(url)

const request = new Request(url, config)
fetch(request).then(async (r) => {
	if (r.ok) {
		console.log(await r.json())
	} else {
		console.log("error")
	}
})
