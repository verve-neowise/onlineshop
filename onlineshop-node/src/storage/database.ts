
import { Sequelize } from "sequelize";
import { userModel } from "./model/user.model";
import config from '../config'

const sequelize = new Sequelize(config.databaseUrl, {
    logging: console.log
})

export const UserModel = userModel(sequelize)

sequelize.sync({ force: true })

export {}