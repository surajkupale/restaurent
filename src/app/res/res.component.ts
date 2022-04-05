import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-res',
  templateUrl: './res.component.html',
  styleUrls: ['./res.component.css']
})
export class ResComponent implements OnInit {

  formValue!: FormGroup;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      emailadd: this.formbuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern("[a-zA-Z]+$"),
        Validators.minLength(3),
        Validators.maxLength(10)
      ])),
      password: this.formbuilder.control('')
    })
  }

  display(item:FormGroup){
    console.log(item);
  }

  addRestaurent(){
    
  }

}
