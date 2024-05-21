import { AlunoModel } from '../../../module/aluno/aluno.model';


describe('Unit - AlunoModel model Suite', () => {
    it('deve retornar valores do modelo', async () => {
        let knexServiceMock: any

        const knexMock = () => {
            return {
                select: jest.fn().mockReturnValueOnce([])
            }
        }

        knexServiceMock = {
            obterConexao: jest.fn(() => knexMock)
        }

        const aluno = new AlunoModel(knexServiceMock);
        const response = await aluno.getAll()
        expect(response).toBeTruthy();
        expect(response.length).toBe(0);
    });

    it('deve retornar um aluno por ID', async () => {
        let knexServiceMock: any

        const knexMock = () => {
            return {
                select: jest.fn().mockReturnValueOnce([
                    { id: 1, nome: 'Teste', cpf: 123456789 } 
                ])
            }
        }
        knexServiceMock = {
            obterConexao: jest.fn(() => knexMock)
        }

        const id = 1;
        const alunoExistente = { id: id, nome: 'Teste', cpf: 123456789 };
        const aluno = new AlunoModel(knexServiceMock);
        const response = await aluno.getById(id);

        expect(response).toBeTruthy();
        expect(response).toEqual(alunoExistente);
    });




    it('deve salvar um aluno no modelo', async () => {
        let knexServiceMock: any

        const knexMock = () => {
            return {
                insert: jest.fn().mockReturnValueOnce([100])
            }
        }

        knexServiceMock = {
            obterConexao: jest.fn(() => knexMock)
        }

        const aluno = new AlunoModel(knexServiceMock);
        const response = await aluno.store({
            nome: 'AlunoModel Teste 1',
            cpf: 123456789,
            id: 1
        })
        expect(response).toBeTruthy();
        expect(response).toEqual([100]);
    });
})