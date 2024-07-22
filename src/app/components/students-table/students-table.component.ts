import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/interfaces/student';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { PopupComponent } from '../popup/popup.component';
import { CreatestudentService } from 'src/app/services/createstudent.service';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit {

  constructor(private _modalservice:BsModalService,
    private  _createstudentservice: CreatestudentService

  ) { 

  }

  student: Student[]=[];
  modalref:BsModalRef
  selectedIndices: Set<number> = new Set<number>();
  selectAllChecked = false;
  
  ngOnInit(): void {
    this.student = this._createstudentservice.students; 
  }

  openmodal() {
    this.modalref = this._modalservice.show(PopupComponent);
    this.modalref.onHidden.subscribe(() => {
    this.student = this._createstudentservice.students; 
    });
  }
  
  editStudent(index: number) {
    const studentToEdit = this.student[index];
    this.modalref = this._modalservice.show(PopupComponent, { initialState: { student: studentToEdit, index } });
    this.modalref.content.onSave.subscribe(({ index, student }) => {
    this.updateStudent(index, student);
    });
  }

  updateStudent(index: number, updatedStudent: Student) {
    this.student[index] = updatedStudent;
  }

  toggleStudentSelection(index: number) {
    if (this.selectedIndices.has(index)) {
      this.selectedIndices.delete(index);
    } else {
      this.selectedIndices.add(index);
    }
    this.updateSelectAllChecked();
  }

  toggleSelectAll() {
    this.selectAllChecked = !this.selectAllChecked;
    if (this.selectAllChecked) {
      this.student.forEach((_, index) => this.selectedIndices.add(index));
    } else {
      this.selectedIndices.clear();
    }
  }

  updateSelectAllChecked() {
    this.selectAllChecked = this.selectedIndices.size === this.student.length;
  }

  deleteSelectedStudents() {
    this.student = this.student.filter((_, index) => !this.selectedIndices.has(index));
    this.selectedIndices.clear();
    this.selectAllChecked = false;
  }

  isAnyStudentSelected() {
    return this.selectedIndices.size > 0;
  }

  
}


