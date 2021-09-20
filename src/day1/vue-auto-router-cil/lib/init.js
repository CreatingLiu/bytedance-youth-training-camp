const { promisify } = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const {clone} = require('./download')

const log = content => console.log(chalk.green(content));


module.exports = async name => {
    clear()
    const data = await figlet('ByteDanceYYDS')
    log(data)
    
    await clone('github:su37josephxia/vue-template', name)
}