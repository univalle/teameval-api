import { Controller, Get, Post } from '@nestjs/common';
import { CriteriaServices } from './criterias.services';

@Controller('criteria')
export class CriteriaController {
    constructor(private CriteriaServices:CriteriaServices){}

    @Post('/criteria')
    createCriteria(){
        return this.CriteriaServices.createCriteria();
    }
    

}
