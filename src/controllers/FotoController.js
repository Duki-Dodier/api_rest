import mutlerConfig from "../config/mutlerConfig";
import multer from "multer";
import Foto from "../models/Foto";

const upload = multer(mutlerConfig).single("arquivo");

class FotoController {
  async store(request, response) {
    return upload(request, response, async (error) => {
      if (error) {
        return response.status(400).json({
          errors: [error.code],
        });
      }

      const { originalname, filename } = request.file;
      const aluno_id = request.body.aluno_id;
      console.log(aluno_id);
      const foto = await Foto.create({ originalname, filename, aluno_id });

      return response.json(foto);
    });
  }
}

export default new FotoController();
