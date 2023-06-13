import Aluno from "../models/Aluno";

class AlunoController {
  async index(request, response) {
    try {
      const alunos = await Aluno.findAll();
      return response.json({ alunos });
    } catch (e) {
      response.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new AlunoController();
