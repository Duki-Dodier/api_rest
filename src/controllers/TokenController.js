import Aluno from "../models/Aluno";
import User from "../models/User";
import jwt from "jsonwebtoken"

import dotenv from 'dotenv'
dotenv.config()

class TokenController {
  async store(request, response) {
    const { email = "", password = "" } = request.body;

    if (!email || !password) {
      return response.status(401).json({ errors: ["CrEEdenciais inválidaSS!"] });
    }
    const user = await User.findOne({ email: email });

    if (!email) {
      return response.status(401).json({ errors: ["CrEEdenciais inválidas!"] });
    }

    if (!(await user.passwordIsValid(password))) {
      return response.status(401).json({ errors: ["Credenciais inválidaSS"] });
    }

      const {id} = user
      const token = jwt.sign({id,email}, process.env.TOKEN_SECRET,{
        expiresIn:360000
      })

      response.json({token})


  }
}
export default new TokenController();
