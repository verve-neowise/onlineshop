import { Model } from "sequelize/types"

export const mapTo = <T>(model: Model) => {
    return model.get({ plain: true }) as T
}