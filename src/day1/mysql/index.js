(async () => {
    const { Sequelize } = require('sequelize')

    const sequelize = new Sequelize('bytedance', 'bytedance', 'RiB7Ga', {
        host: "localhost",
        dialect: "mariadb",
        // operatorsAliases: false
    })

    const Fruit = sequelize.define("Fruit", {
        name: { type: Sequelize.STRING(20), allowNull: false },
        price: { type: Sequelize.FLOAT, allowNull: false },
        stock: { type: Sequelize.INTEGER, defaultValue: 0 }
    })

    let ret = await Fruit.sync()

    await Fruit.create({
        name: "apple",
        price: 10
    })

    await Fruit.sync()




    // const mysql = require('mysql2/promise')
    // const config = {
    //     host: "localhost",
    //     user: "",
    //     password: "",
    //     database: "bytedance"
    // }

    // const connection = await mysql.createConnection()

    // let ret = await connection.execute()


})()

