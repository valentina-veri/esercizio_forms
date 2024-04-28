

export type Contatto ={
    id: number,
    tipologia: string,
    nome: string,
    cognome: string,
    RagioneSociale: string,
    indirizzo: Indirizzo,
    email: string,
    prefisso: string,
    telefono: number,
    compleanno: string
}

export type Indirizzo={
    via: string,
    citta: string,
    provincia: string,
    CAP: number,
    nazione: string
}

export class ContattoDTO {
    constructor(
        public id:number =0,
        public tipologia: string = "",
        public nome: string = "",
        public cognome: string = "",
        public RagioneSociale: string = "",
        public indirizzo: IndirizzoDTO,
        public email: string = "",
        public prefisso: string = "",
        public telefono: number = 0,
        public compleanno: string = ""
    ) { }
}

export class IndirizzoDTO {
    constructor(
        public via: string = "",
        public citta: string = "",
        public provincia: string = "",
        public CAP: number = 0,
        public nazione: string = ""
    ) { }
}