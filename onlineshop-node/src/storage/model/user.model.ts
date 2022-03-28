import { DataTypes, Sequelize } from "sequelize"
import { ModelProvider } from './model.provider'

export const userModel: ModelProvider = (sequelize: Sequelize) => {
    return sequelize.define("user", {
        id: {
            type: DataTypes.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        name: DataTypes.STRING,
        phone: DataTypes.INTEGER,
        address: DataTypes.STRING,
        role: DataTypes.STRING
    })
}