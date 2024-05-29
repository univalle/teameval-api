import { Controller, Post } from '@nestjs/common';
import { CriteriaServices } from './criterias.services';

@Controller()
export class CriteriaController {
  constructor(private criteriaServices: CriteriaServices) {}

  @Post('/criteria')
  createCriteria() {
    return this.criteriaServices.createCriteria();
  }
}
