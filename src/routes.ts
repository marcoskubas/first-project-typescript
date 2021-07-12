import { Request, Response} from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response){
    CreateCourseService.execute({name: "ReactJS", educator: "Marcos"});
    CreateCourseService.run({
        name: "NodeJS",
        educator: "Marcos",
        duration: 10
    });
}