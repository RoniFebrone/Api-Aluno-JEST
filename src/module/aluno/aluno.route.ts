import * as  express from 'express';
import alunoFactory from './aluno.factory';

const router = express.Router();

router.get('/', async (_, res) => {
  try {
    const data = await alunoFactory.getAll();
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const aluno = await alunoFactory.getById(id);
    if (!aluno) {
      return res.status(404).json({ msg: 'Aluno não encontrado' });
    }
    return res.status(200).json({ data: aluno });
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message });
  }
});


router.post('/', async (req, res) => {
  try {
    if (!req.body.nome || !req.body.cpf) {
      return res.status(400).json({ msg: 'Nome e CPF são obrigatórios' });
    }
    const data = await alunoFactory.store(req.body);
    return res.status(201).json({ data });
  } catch (error) {
    if (error instanceof Error) { 
      if (error.message === 'CPF já existente') {
        return res.status(409).json({ error: error.message }); 
      }
      return res.status(500).json({ error: error.message });
    }
    return res.status(500).json({ error: 'Erro desconhecido' });
  }

});


//TODO / Feito a rota, o model deu certo, mas nao concluido os testes. Pendente.
// router.put('/:id', async (req, res) => {
//   try {
//     const id = parseInt(req.params.id);
//     const aluno = await alunoFactory.getById(id);
//     if (!aluno) {
//       return res.status(404).json({ msg: 'Aluno não encontrado' });
//     }
//     await alunoFactory.update(id, req.body);
//     return res.status(200).json({ msg: 'Aluno atualizado com sucesso' });
//   } catch (error) {
//     return res.status(500).json({ error: (error as Error).message });
//   }
// });



export default router;
