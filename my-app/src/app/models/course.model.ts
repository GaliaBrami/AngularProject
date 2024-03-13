 export enum EnumLearningMode {
    Frontaly="Frontally",
    Zoom="Zoom"
  }
export class Course {
  id: number;
  name: string;
  categoryId: number;
  numberOfLessons: number;
  startDate: Date;
  syllabus: string[];
  learningMode: EnumLearningMode; 
  lecturerId: number;
  image: string;

  constructor(
    code: number,
    name: string,
    categoryId: number,
    numberOfLessons: number,
    startDate: Date,
    syllabus: string[],
    learningMode: EnumLearningMode,
    lecturerId: number,
    image: string
  ) {
    this.id = code;
    this.name = name;
    this.categoryId = categoryId;
    this.numberOfLessons = numberOfLessons;
    this.startDate = startDate;
    this.syllabus = syllabus;
    this.learningMode = learningMode;
    this.lecturerId = lecturerId;
    this.image = image;
  }
}
