const request = require('request')


const getCharacterData = (input, callback) => { 
    const url = 'https://maxholzmann.github.io/castleJSON/' + input + '.json'
    request({url:url, json: true}, (error, response) => {
        const characterData = response.body
        return characterData.name, characterData.tier
})
}
getCharacterData('blue')
    