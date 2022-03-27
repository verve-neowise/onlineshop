import { DataTypes, Sequelize } from "sequelize/types"
import { ModelProvider } from './model.provider'

export const userModel: ModelProvider = (sequelize: Sequelize) => {
    return sequelize.define("user", {
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        name: DataTypes.STRING,
        phone: DataTypes.INTEGER,
        address: DataTypes.INTEGER,
        role: DataTypes.STRING
    })
}