import {Validator} from 'fluentvalidation-ts';
import { createUserDTO } from '../../dto/Users/creatUserDTO';

export class CreateUserValidation extends Validator<createUserDTO>{
    constructor(){
        super();

        this.ruleFor('email')
            .notEmpty()
            .withMessage("e-mail não pode ser vazio")
            .notNull()
            .withMessage("e-mail não pode ser nulo")
            .notEqual
    }
}