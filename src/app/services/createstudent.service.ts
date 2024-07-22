import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student';


@Injectable({
  providedIn: 'root'
})


export class CreatestudentService {

  students: Student[] = [
    { name: 'John Doe', email: 'john@example.com', age: 20, dateofbirth: new Date('2020-01-02'), gender: 'Male', },
    { name: 'Jane Doe', email: 'jane@example.com', age: 22, dateofbirth: new Date('2020-01-03'), gender: 'Female', }
  ];
 

  constructor() { 

  }

  create(data: any){
    this.students.push(data);
  }

}
