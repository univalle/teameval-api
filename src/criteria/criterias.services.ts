import { Injectable } from '@nestjs/common';
import CriteriaDto from './dto/criterias.dto';

@Injectable()
export class CriteriaServices {
  createCriteria() {
    const criteria: CriteriaDto = {
      id: crypto.randomUUID(),
      criteriaName: 'dasdjasdjasoidj',
      description: 'dasdasdasdasdasdasdasdasdasda',
      weight: '20',
    };
    console.log(criteria);
  }
}
