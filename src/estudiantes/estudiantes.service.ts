import { Injectable } from '@nestjs/common';
import registrarEstudianteDto from './dto/registrarestudiante.dto';
import actualizarEstudianteDto from './dto/actualizarestudiante.dto';

@Injectable()
export class EstudiantesService {
  private lista_estudiantes = []; //esto deberia reemplazarse por la base de datos

  obtenerEstudiantes() {
    return this.lista_estudiantes;
  }

  registrarEstudiante(obj_Estudiante: registrarEstudianteDto) {
    console.log(obj_Estudiante);
    this.lista_estudiantes.push({
      //esto debiera reemplazarse por el push a la base de datos
      ...obj_Estudiante, //vas a copiar todos los valores del objeto Estudiante que estas recibiendo, y ademas vas a agregarle un atributo ID, que sera la longitud de la lista_estudiantes + 1.
      id: this.lista_estudiantes.length + 1, //en la BD se indica que ponga ID secuencialmente, mientras tanto pongo esto
    });
    return obj_Estudiante;
  }

  actualizarEstudiante(obj_Estudiante: actualizarEstudianteDto) {
    // Encuentra el índice del estudiante en la lista que tiene la misma id
    const indice = this.lista_estudiantes.findIndex(
      (est) => est.id === obj_Estudiante.id,
    );

    // Si se encuentra el estudiante, actualiza la información
    if (indice !== -1) {
      this.lista_estudiantes[indice] = {
        ...this.lista_estudiantes[indice],
        ...obj_Estudiante,
      };
      return this.lista_estudiantes[indice];
    } else {
      return 'No se encontró el estudiante';
    }

    /* 

            el jsonbody que recibe este metodo debe tener esta estructura

            {
                "nombre": <nuevo nombre del objeto>,
                "correo": <nuevo correo del objeto>,
                ...otros campos que se quieran actualizar
                "id": <id del objeto que se quiere actualizar>
            }

            osea que el json content que mandemos en la peticion PUT debe tener un campo ID con el id del objeto a modificar

        */
  }

  eliminarEstudiante(idEstudiante: number) {
    //esta es una forma de eliminar aunque se puede ver otra
    // Encuentra el índice del estudiante en la lista que tiene la misma id
    const indice = this.lista_estudiantes.findIndex(
      (est) => est.id === idEstudiante,
    );

    // Si se encuentra el estudiante, elimina el elemento de la lista
    if (indice !== -1) {
      this.lista_estudiantes.splice(indice, 1); //eliminará el elemento en la posición indice y solo eliminará 1 elemento.
      return true; // Retorna verdadero si la eliminación fue exitosa
    } else {
      return false; // Retorna falso si no se encontró un estudiante con esa id
    }
  }
}
