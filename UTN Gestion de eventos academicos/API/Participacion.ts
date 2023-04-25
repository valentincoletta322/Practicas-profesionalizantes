export class Participacion{
    id: Number;
    idEvento: Number;
    idInvestigador: Number;
    tipoParticipacion: TipoParticipacion;

    constructor(id: Number, idEvento: Number, idInvestigador: Number, tipoParticipacion: TipoParticipacion){
        this.id = id;
        this.idEvento = idEvento;
        this.idInvestigador = idInvestigador;
        this.tipoParticipacion = tipoParticipacion;
    }

}