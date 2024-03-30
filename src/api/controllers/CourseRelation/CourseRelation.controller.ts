import { Request, Response } from "express";
import { CourseRelationService } from "../../../domain/service/CourseRelationService";
import { CourseRelationRepository } from "../../../repositories/CourseStudentRelationRepository";

export class CourseRelationToStudentController {

    async enrollStudentToCourse(request:Request, response:Response){
        const courseRelationRepository = new CourseRelationRepository();
        const courseRelationService = new CourseRelationService(courseRelationRepository);

        const studentId:number = Number(request.body.studentId);
        const courseId:string = request.body.courseId;

        try {
            await courseRelationService.createCourseRelation(courseId, studentId);
            response.status(201).json({success : true, message: "Student enrolled to Course"})
        } catch (error) {
            response.status(500).json({ success: false, message: 'Internal Server Error with enrollment' });
        }
    }

    async removeStudentToCourse(request:Request, response:Response){
        const courseRelationRepository = new CourseRelationRepository();
        const courseRelationService = new CourseRelationService(courseRelationRepository);

        const courseRelationId = request.body.id;

        try {
            await courseRelationService.deleteCourseRelation(courseRelationId);
            response.status(200).json({success: true, message: "Student removed from course"})
        } catch (error) {
            response.status(500).json({ success: false, message: 'Internal Server Error removing from course' });
        }
    }

    async getCourseRelationIds(request:Request, response:Response){
        const courseRelationRepository = new CourseRelationRepository();
        const courseRelationService = new CourseRelationService(courseRelationRepository);

        const courseId:string = request.body.courseId;
        const studentId:number = Number(request.body.studentId);

        try {
            const courseRelation = await courseRelationService.getCourseRelationIds(courseId, studentId);
            response.json(courseRelation);
        } catch (error) {
            response.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }

    async getSingleCourseRelation(request:Request, response:Response){
        const courseRelationRepository = new CourseRelationRepository();
        const courseRelationService = new CourseRelationService(courseRelationRepository);

        const relationId = request.params.id;

        try {
            const singleCourseRelation = await courseRelationService.getCourseRelation(relationId);
            response.json(singleCourseRelation);
        } catch (error) {
            response.status(500).json({ success: false, message: 'Internal Server Error' });
        }

    }
}