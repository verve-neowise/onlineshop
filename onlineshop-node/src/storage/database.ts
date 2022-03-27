
import { Model, Sequelize } from "sequelize";
import { userModel } from "./model/user.model";

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    logging: console.log
})

Model.prototype['mapTo'] = function<T>() {
    return this.get({ plain: true }) as T
}

export const UserModel = userModel(sequelize)
