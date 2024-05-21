import * as request from 'supertest';

describe('Int - Aluno Suite', () => {
    it('##GET /aluno', async () => {
        const response = await request('http://localhost:8080')
            .get('/aluno');

        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.body.data).toHaveLength(0);
    });

    it('##GET /aluno/:id', async () => {
        const id = 1;
        const response = await request('http://localhost:8080')
            .get(`/aluno/${id}`);

        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.body.data).toBeDefined();
    });

    it('##POST /aluno', async () => {
        const response = await request('http://localhost:8080')
            .post('/aluno')
            .send({
                nome: "Aluno Teste 7",
                cpf: 123456789
            });

        expect(response.status).toBe(201);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.body.data).toHaveLength(1);
    });

    it('##POST /aluno valores errados', async () => {
        const response = await request('http://localhost:8080')
            .post('/aluno')
            .send({
                name: "Aluno Teste 7",
                cpf: 123456789
            });

        expect(response.status).toBe(400);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.body.msg).toEqual('Nome e CPF são obrigatórios');
    });
});
