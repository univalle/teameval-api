import { Body, Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import registrarEstudianteDto from './dto/registrarestudiante.dto';
import actualizarEstudianteDto from './dto/actualizarestudiante.dto';

@Controller('/estudiantes')
export class EstudiantesController {
    obj_Service:EstudiantesService
    constructor(obj_Service:EstudiantesService){
        this.obj_Service = obj_Service
    }

    @Get()
    obtenerEstudiantes(){
        return this.obj_Service.obtenerEstudiantes()
    }

    @Post()
    registrarEstudiante(@Body() obj_Estudiante:registrarEstudianteDto){
        return this.obj_Service.registrarEstudiante(obj_Estudiante)
    }

    @Put()
    actualizarEstudiante(@Body() obj_Estudiante:actualizarEstudianteDto){

        return this.obj_Service.actualizarEstudiante(obj_Estudiante)
    }

    @Delete()
    eliminarEstudiante(idEstudiante:number){
        return this.obj_Service.eliminarEstudiante(idEstudiante)
    }

    /*
    @Patch()
    actualizarDatoEstudiante(){
        return this.obj_Service.actualizarDatoEstudiante()
    }*/
}
