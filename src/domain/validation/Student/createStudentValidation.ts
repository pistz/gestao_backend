import { Validator } from "fluentvalidation-ts";
import { createStudentsDTO } from "../../dto/Students/createStudentsDTO";


export class CreateStudentValidation extends Validator<createStudentsDTO>{

    constructor(){
        super();

        this.ruleFor('firstName')
        .notEmpty()
        .withMessage("Nome não pode ser vazio")
        .notNull()
        .withMessage("Nome não pode ser nulo")

        this.ruleFor('lastName')
        .notEmpty()
        .withMessage("Sobrenome não pode ser vazio")
        .notNull()
        .withMessage("Sobrenome não pode ser nulo")

        this.ruleFor('email')
        .notEmpty()
        .withMessage("email não pode ser vazio")
        .notNull()
        .withMessage("email não pode ser nulo")

        this.ruleFor('schoolId')
        .notEmpty()
        .withMessage("schoolId não pode ser vazio")
        .notNull()
        .withMessage("schoolId não pode ser vazio")



    }
}