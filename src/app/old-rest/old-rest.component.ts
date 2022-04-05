import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-old-rest',
  templateUrl: './old-rest.component.html',
  styleUrls: ['./old-rest.component.css']
})
export class OldRestComponent implements OnInit {

  departments = [
    {id: 1, name: "Node"},
    {id: 2, name: "Angular"},
    {id: 3, name: "MongoDB"},
    {id: 4, name: "Express"},
  ];
  
  bgcolor = false;

  messageClass = {
    'badge': true,
    'bg-secondary': !this.bgcolor,
    'bg-danger': this.bgcolor    
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(department:any){
    this.router.navigate(['/oldComponent', department.id]);
  }

}
