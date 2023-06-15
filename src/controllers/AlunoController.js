import Aluno from "../models/Aluno";
import Foto from "../models/Foto"

class AlunoController {
  async create(request, response) {

      const novoAluno = await Aluno.create(request.body);
      response.json(novoAluno);
   
  }

  async index(request, response) {
    
      const alunos = await Aluno.findAll({
        attributes: ["id", "email", "nome"],
        order: [['id','DESC']],
        include:{
          model:Foto
        }
      });
      return response.json({ alunos });
    }

  async show(request, response) {

      const aluno = await Aluno.findByPk(request.params.id);
      return response.json(aluno);

      response.status(400).json({ errors: e.errors.map((err) => err.message) });
    
  }

  async update(request, response) { 
    try {
      const alunoId = request.params.id
      if (!alunoId) {
        return response.status(400).json({ errors: ["ID inválido!"] });
      }
      const aluno = await Aluno.findByPk(alunoId);

      if (!aluno) {
        return response.status(400).json({ errors: ["Usuario não existee!"] });
      }
      const usuario_atualizado = await aluno.update(request.body);
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
      const aluno = await Aluno.findByPk(request.params.id);

      if (!aluno) {
        return response.status(400).json({ errors: ["Usuario não existe!"] });
      }
      await aluno.destroy();
      return response.json({ aluno });
    } catch (e) {
      return response
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new AlunoController();
