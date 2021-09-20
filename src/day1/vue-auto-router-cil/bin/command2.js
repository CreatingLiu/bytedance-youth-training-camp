#!/usr/bin/env node
const program = require('commander')

program.version(require('../package').version)
program.command('init <name>')
    .description('init project')
    .action(require('../lib/init'))
    // .action((name) => {
    //     const init = require('../lib/init')
    //     console.log(init)
    // })
    // .action(console.log)

program.parse(process.argv)