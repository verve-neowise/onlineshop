import { Model, ModelCtor, Sequelize } from "sequelize/types";

export type ModelProvider = (sequelize: Sequelize) => ModelCtor<Model<any, any>>