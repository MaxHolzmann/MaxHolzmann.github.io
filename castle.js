const request = require('request')


const getCharacterData = (input, callback) => { 
    const url = 'https://maxholzmann.github.io/castleJSON/' + input + '.json'
    request({url:url, json: true}, (error, response) => {
        const data = response.body
        console.log(data)
})
}
getCharacterData('castle')
    