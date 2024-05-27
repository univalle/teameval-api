interface actualizarEstudianteDto{
    id?: number
    nombre?: string
    correo?: string
    cursos?: [] //lista de ids de los cursos a los que esta inscrito 
}

export default actualizarEstudianteDto