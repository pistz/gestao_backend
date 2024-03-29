export interface updateStudentDTO {
    id: number;           
    firstName: string;    
    lastName: string;    
    email: string;        
    courseIds?: string[]; 
    listIds?: string[];    
}
