import Aluno from "../models/Aluno";

class HomeController {
  async index(request, response) {
    const novoAluno = await Aluno.create({
      nome: "Tiago",
      sobrenome: "Andrade",
      email: "tiago@aluno.com",
      idade: 32,
      peso: 300,
      altura: 1.75,
    });
    response.json(novoAluno)
  }
}

export default new HomeController();
