import { Validator } from "fluentvalidation-ts";
import { createCourseDTO } from "../../dto/Courses/createCourseDTO";

export class CreateCourseValidation extends Validator<createCourseDTO>{

    constructor(){
        super();

        this.ruleFor('name')
        .notEmpty()
        .withMessage("Nome do curso não pode ser vazio")
        .notNull()
        .withMessage("Nome do curso não pode ser nulo")

        this.ruleFor('startingYear')
        .notNull()
        .withMessage('Ano de início do curso não pode ser nulo')
        .greaterThan(2000)
    }
}