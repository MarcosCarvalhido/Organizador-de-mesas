export enum faixaEtaria {
    LIVRE = 'Livre',
    INFALTIL = 'Infaltil',
    ADULTO = 'Adulto'
}

interface participante {
    nome: string;
    email: string;
}

export interface Mesa {
    mestre: string;
    uri:string;
    descricao: {
        aventura: string;
        resumo?: string;
        sistema: string;
        faixaEtaria?: faixaEtaria;
    }
    qtdDeParticipante?: number;
    qtdDeParticipantesMax?: number;
    participantes?: participante[]
}