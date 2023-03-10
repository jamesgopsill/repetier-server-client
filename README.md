# Typescript Repetier Server Client

The client has been developed as part of a research programme investigating agent-based manufacturing systems ([Brokering Additive Manufacturing](https://dmf-lab.co.uk/brokering-additive-manufacturing/)). It is isomorphic capable of running on server (Node.js) and client-side (Browser) applications.

## Using the client

To install the package, use:

```
pnpm install @jamesgopsill/repetier-server-client
```

Use it in your code like so:

**Typescript / Javascript (ESM)**

```typescript
import { RepetierServerClient } from "@jamesgopsill/repetier-server-client"

// Create a new client.
const client = new RepetierServerClient("URL")

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

const ping = await client.ping()
if (ping) console.log(ping)
```

**Javascript (CJS)**

```javascript
const {
	EigerClRepetierServerClientient,
} = require("@jamesgopsill/repetier-server-client")

// Create a new client.
const client = new RepetierServerClient("URL")

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

const ping = await client.ping()
if (ping) console.log(ping)
```

## Client Docs

The client documentation have been produced using [TypeDoc](https://typedoc.org/) and can be accessed [here](https://jamesgopsill.github.io/repetier-server-client/). More details on the API can be found at [Repetier Server API](https://www.repetier-server.com/manuals/programming/API/index.html).

## Contributing

We would love to have additional contributors to the project to help us maintain and add functionality to the project.

## Support the Project

The project has been supported by the [EPSRC-funded Brokering Additive Manufacturing project (EP/V05113X/1)](https://gow.epsrc.ukri.org/NGBOViewGrant.aspx?GrantRef=EP/V05113X/1). More details on the project can be found at the [Design Manufacturing Futures Lab](https://dmf-lab.co.uk/) website.

To donate and provide continued support, please consider sponsoring the [maintainer](https://github.com/sponsors/jamesgopsill).
