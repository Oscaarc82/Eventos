export interface Evento {
    _id? : string,
    NomEvento : string,
    Ciudad : string,
    Area : string,
    Descripcion : string,
    FechaInicio : string,
    FechaFin : string,
    Cupo : number,
    Participantes? : number,
    Asistentes? : number,
    Imagen? : string
}