export interface Participante {
    NomParticipante : string,
    ApePaterno : string,
    ApeMaterno : string,
    Edad : number,
    Genero : string,
    Telefono : string,
    Correo : string,
    Ciudad : string,
    Cargo : string,
    Contrasenia : string,
    Eventos? : {
        NomEvento : string,
        Area : string
    }
}