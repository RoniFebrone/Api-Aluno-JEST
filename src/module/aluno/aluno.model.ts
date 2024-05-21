import { Knex } from "knex";
import { KnexService } from "../../service/knex";

export interface Aluno {
  id?: number;
  nome: string;
  cpf: number;
}

export class AlunoModel {
  private db: Knex;

  constructor(knexService: KnexService) {
    this.db = knexService.obterConexao()
  }

  async getAll(): Promise<Aluno[]> {
    return this.db('aluno').select();
  }

  async store(params: Aluno): Promise<number[]> {
    return this.db('aluno').insert(params);
  }

  async getById(id: number): Promise<Aluno | null> {
    const alunos = await this.db('aluno').select();
    const aluno = alunos.find(a => a.id === id);
    return aluno || null;
  }

}
