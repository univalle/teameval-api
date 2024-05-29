import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ProfesoresService } from './profesores.service';

@Controller('/profesores')
export class ProfesoresController {
  obj_Service: ProfesoresService;
  constructor(obj_Service: ProfesoresService) {
    this.obj_Service = obj_Service;
  }

  @Get()
  obtenerProfesores() {
    return this.obj_Service.obtenerProfesores();
  }

  @Post()
  registrarProfesor(@Body() obj_Profesor: any) {
    return this.obj_Service.registrarProfesor(obj_Profesor);
  }

  @Put()
  actualizarProfesor(@Body() obj_Profesor: any) {
    return this.obj_Service.actualizarProfesor(obj_Profesor);
  }

  @Delete()
  eliminarProfesor(idProfesor: number) {
    return this.obj_Service.eliminarProfesor(idProfesor);
  }

  @Patch()
  actualizarDatoProfesor() {
    return this.obj_Service.actualizarDatoProfesor();
  }
}
