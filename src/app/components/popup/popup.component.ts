import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup,FormControl,Validators, RequiredValidator } from '@angular/forms';
import { CreatestudentService } from 'src/app/services/createstudent.service';
import { Student } from 'src/app/interfaces/student';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {


  constructor(
    private _formbuilder: FormBuilder,
    private _createstudentservice: CreatestudentService,
    public   modalref:BsModalRef
  ) { }

  @Input() student: Student;
  @Input() index: number;
  @Output() onSave = new EventEmitter<{ index: number; student: Student }>();

  students:Student []=[]
  addNewSudent: FormGroup;

  genderOptions = [
    { value: 'value', name: 'Male' },
    { value: 'value', name: 'Female' },
  ];
  

  ngOnInit(): void {
    this.addNewSudent = this._formbuilder.group({
      name: ['',[Validators.required,Validators.minLength(3)]],
      email: ['',[Validators.required,Validators.email]],
      age: ['',[Validators.required,Validators.pattern('^[0-9]*$')]],
      dateofbirth: ['',Validators.required],
      gender: ['',Validators.required]
    });
  }
  
  save(form: FormGroup) {
    const studentData: Student = form.value;
    studentData.dateofbirth = new Date(studentData.dateofbirth); 

    if (this.index !== undefined) {
      this.onSave.emit({ index: this.index, student: studentData });
      } else {
      this._createstudentservice.create(studentData); 
    }
    this.onSave.emit();
    this.modalref.hide();
    form.reset(); 
  }
  
  
 


}
