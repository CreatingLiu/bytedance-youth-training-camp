const fs = require('fs')
const path = require('path')
const { Sequelize } = require('sequelize');
const conf = require('../conf');

/**
 * 加载器
 * @param {*} dir 文件夹
 * @param {*} cb 
 */
function load(dir, cb) {
    const url = path.resolve(__dirname, dir)
    const files = fs.readdirSync(url)
    files.forEach(filename => {
        filename = filename.replace('.js', '')
        const file = require(url + '/' + filename)
        cb(filename, file)
    })
}

const loadModel = config => app => {
    const sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, config.db.options)
    // try {
    //     await sequelize.authenticate();
    //     console.log('Connection has been established successfully.');
    //   } catch (error) {
    //     console.error('Unable to connect to the database:', error);
    //   }

    app.$model = {}

    load('../model', (filename, {schema}) => {
        console.log('load model:' + filename , schema)
        app.$model[filename] = sequelize.define(filename, schema)
        // app.$model[filename].sync()
        // console.log(Object.keys(app.$model[filename]))
        
    })
}

module.exports = {
    loadModel
}