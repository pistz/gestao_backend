export class ValidationError extends Error
{
    readonly errors:string[];

    constructor(errors:string[]){
        super();
        this.errors = errors;
        Object.setPrototypeOf(this, ValidationError.prototype);
    }
}