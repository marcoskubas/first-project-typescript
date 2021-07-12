/**
 * name - string
 * duration = number (weeks) - optional
 * educator - string
 */
interface Course{
    name: string;
    duration?: number;
    educator: string;
}
class CreateCourseService{
    execute({duration = 8, educator, name}: Course){
        console.log(name, duration, educator);
    }
    run(data: Course){
        console.log(data.name, data.duration, data.educator);
    }
}

export default new CreateCourseService();