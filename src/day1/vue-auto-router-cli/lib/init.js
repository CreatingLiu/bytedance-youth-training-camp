const { promisify } = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
const {clone} = require('./download')
const fs = require('fs')

const spawn = async(...args) => {
    const {spawn} = require('child_process')
    return new Promise(resolve => {
        const proc = spawn(...args)
        // proc.stdout.pipe(fs.createWriteStream('/tmp/log'))
        // proc.stderr.pipe(fs.createWriteStream('/tmp/err'))
        process.on('close', () => {
            resolve();
        })
    })
}

const log = content => console.log(chalk.green(content));

module.exports = async name => {
    const ora = (await import('ora')).default
    let ora_process

    clear()
    const data = await figlet('ByteDanceYYDS')
    log(data)

    //项目模板
    ora_process = ora(`创建项目${name}`)
    ora_process.start()
    await clone('github:su37josephxia/vue-template', name)
    ora_process.succeed()

    //下载依赖 npm -i
    // spawn('npm', ['install'])
    ora_process = ora(`安装依赖...`)
    ora_process.start()
    await spawn('npm', ['install'], {cwd: `./${name}`})
    ora_process.succeed()

    log(`
初始化完成！

运行npm run serve开始开发
    `)
    /*日志输出到/tmp/log
错误输出到/tmp/err*/
}