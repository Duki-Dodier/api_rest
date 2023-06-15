import Sequelize, { Model } from "sequelize";
import appConfig from "../config/appConfig"

export default class Foto extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "O campo originalname não pode ficar vazio",
            },
          },
        },

        filename: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "O campo filename não pode ser vazio",
            },
          },
        },
        url:{
          type:Sequelize.VIRTUAL,
          get(){
            return `${appConfig.url}/images/${this.getDataValue('filename')}`
          }

        },

        aluno_id: {
          type:Sequelize.STRING,
          allowNull:true,
          references:{
            model:{
              model: 'alunos',
              key:'id'
            }
          }
        }
      },
    
      { sequelize, tableName: "fotos" }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: "aluno_id" });
  }
}
