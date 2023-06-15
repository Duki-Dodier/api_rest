import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "O campo nome deve ter entre 3 e 50 caracteres",
            },
          },
        },

        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "O campo sobrenome deve ter entre 3 e 50 caracteres",
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            isEmail: {
              msg: "E-mail inválido!",
            },
          },
        },
        idade: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "idade precisa se um float",
            },
          },
        },
        peso: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "peso precisa se um float",
            },
          },
        },
        altura: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "precisa ser um float",
            },
          },
        },
      },
      { sequelize }
    );
    return this;
  }
  static associate(models){
    this.hasMany(models.Foto,{foreignKey:'aluno_id'})
  }
}
