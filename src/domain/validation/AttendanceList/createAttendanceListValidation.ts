import { Validator } from "fluentvalidation-ts";
import { createListDTO } from "../../dto/Lists/createListDTO";

export class CreateAttendanceListValidation extends Validator<createListDTO>{

    constructor(){
        super();

        this.ruleFor('attendanceDate')
        .notNull()
        .withMessage("Data não pode ser vazia")
        .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/)
        .withMessage("Data precisa seguir padrão dd/mm/yyyy")
    }
}