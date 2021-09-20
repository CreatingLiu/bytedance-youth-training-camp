const { Sequelize } = require('sequelize')

module.exports = {
    schema: {
        mobile: { type: Sequelize.STRING(20), required: true },
        realName: { type: Sequelize.STRING(20), required: true }
    }
}