import {Validator} from 'fluentvalidation-ts';
import { createSchoolDTO } from '../../dto/Schools/createSchoolDTO';


export class CreateSchoolValidation extends Validator<createSchoolDTO>{
    constructor(){
        super();

        this.ruleFor('schoolName')
        .notEmpty()
        .notNull()
    }
}