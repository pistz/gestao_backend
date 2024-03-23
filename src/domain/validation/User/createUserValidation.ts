import {Validator} from 'fluentvalidation-ts';
import { createUserDTO } from '../../dto/Users/createUserDTO';

export class CreateUserValidation extends Validator<createUserDTO>{
    constructor(){
        super();

        this.ruleFor('email')
            .notEmpty()
            .withMessage("e-mail não pode ser vazio")
            .notNull()
            .withMessage("e-mail não pode ser nulo")
            .emailAddress()
        
        this.ruleFor('password')
            .notEmpty()
            .withMessage('password não pode ser vazio')
            .minLength(5)
            .withMessage('Deve possuir no mínimo 5 caracteres')
            .notNull()
            .withMessage('password não pode ser nulo')
    }
}