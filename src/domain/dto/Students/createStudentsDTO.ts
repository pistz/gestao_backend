export interface createStudentsDTO {
    firstName: string;
    lastName: string;
    email: string;
    courseIds?: string[]; 
    listIds?: string[];   
}
