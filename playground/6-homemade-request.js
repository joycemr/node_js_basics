const https = require('https')

const mapboxKey = 'pk.eyJ1Ijoiam95Y2VtciIsImEiOiJja3h1Z2V1YmM1c240Mm9xcTcxbG5yd2EzIn0.8az9OfqE2BReblu8UJhdlw'

search = 'O Fallon, il'
const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(search)}.json?access_token=${mapboxKey}&limit=1`

const request = https.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log(`Error: ${error}`)
})

request.end()
