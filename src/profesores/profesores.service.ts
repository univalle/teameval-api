import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfesoresService {
  obtenerProfesores() {
    return JSON.stringify({ message: 'Hello World! 🧨' });
  }

  registrarProfesor(profesor: any) {
    return JSON.stringify({ profesor: profesor });
  }

  actualizarProfesor(profesor: any) {
    return JSON.stringify({ profesor: profesor });
  }

  eliminarProfesor(idProfesor: number) {
    return JSON.stringify({ idProfesor: idProfesor });
  }

  actualizarDatoProfesor() {
    return JSON.stringify({ message: 'updated' });
  }
}
