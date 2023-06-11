import Sequelize, { Model } from "sequelize";
import bcryptjs from "bcryptjs";

export default class User extends Model {
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
        email: {
          type: Sequelize.STRING,
          defaultValue: "",
          unique:{
            msg: "Email já existe"
          },
          validate: {
            isEmail: {
              args: [3, 50],
              msg: "Email inválido",
            },
          },
        },
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: "",
          validate: {
            len: {
              args: [4, 50],
              msg: "A senha precisa ter de 6 a 50 caracteres",
            },
          },
        },
      },
      { sequelize }
    );
    this.addHook("beforeSave", async (user) => {
      user.password_hash = await bcryptjs.hash(user.password, 8);
    });
    return this;
  }
}
