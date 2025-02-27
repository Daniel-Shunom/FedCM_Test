export interface CourseProps {
    courseName: string;
    course_Id?: string;
    enrolled?: boolean;
    onTap?: ()=>{};
}

export interface UserProfile {
    firstName: string;
    lastName: string;
    email: string;
    onTap: ()=>{};
}