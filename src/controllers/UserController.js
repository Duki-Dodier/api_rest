import User from "../models/User";

class UserController {
  async create(request, response) {
    try {
      const novoUsuario = await User.create(request.body);
      response.json(novoUsuario);
    } catch (e) {
      response.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async index(request, response) {
    try {
      const users = await User.findAll( {attributes: ['id','email','nome']});
      return response.json({ users });
    } catch (e) {
      response.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async show(request, response) {
    try {
      const user = await User.findByPk(request.params.id);
      return response.json(user);
    } catch (e) {
      response.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(request, response) {
    try {
      if (!request.userId) {
        return response.status(400).json({ errors: ["ID inválido!"] });
      }
      const user = await User.findByPk(request.userId);

      if (!user) {
        return response.status(400).json({ errors: ["Usuario não existe!"] });
      }
      const usuario_atualizado = await user.update(request.body);
      return response.status(200).json({ usuario_atualizado });
    } catch (e) {
      response.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(request, response) {
    try {
      if (!request.params.id) {
        return response.status(400).json({ errors: ["ID inválido!"] });
      }
      const user = await User.findByPk(request.params.id);

      if (!user) {
        return response.status(400).json({ errors: ["Usuario não existe!"] });
      }
       await user.destroy();
       return response.json({user})

    } catch (e) {
      return response.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
