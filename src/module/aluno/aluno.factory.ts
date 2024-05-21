import { AlunoModel } from './aluno.model';
import { KnexService } from '../../service/knex';


export default new AlunoModel(new KnexService);

