import { Module } from '@nestjs/common';
import { CriteriaController } from './criterias.controller';
import { CriteriaServices } from './criterias.services';

@Module({
  controllers: [CriteriaController],
  providers:[CriteriaServices]
})
export class CriteriaModule {}
