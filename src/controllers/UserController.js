import User from "../models/User";

class UserController {
  async create(request, response) {
    try{

      const novoUsuario = await User.create(request.body);
      response.json(novoUsuario)

    }catch(e){
      response.status(400).json({errors: e.errors.map((err) => err.message)})
    }
  }
}

export default new UserController();
