import { ValidationErrors } from "fluentvalidation-ts/dist/index"
import { ValidationError } from "../../domain/exceptions/ValidationError"

export abstract class BaseService{
    
    protected isValid<T>(result:ValidationErrors<T>){
        if( Object.keys(result).length !== 0){
            const errors:string[] = Object.values(result);
            throw new ValidationError(errors);
        }
        return;
    }
}