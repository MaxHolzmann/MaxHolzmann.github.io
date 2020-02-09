const request = require('request')
const url = 'https://maxholzmann.github.io/castle.json'

const getCharacterData = (name, callback) => { 
    request({url:url, json: true}, (error, response) => {
        const data = response.body.red 
        console.log(data.name)
})
}
getCharacterData('red')
    