import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  public departmentID: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.departmentID = this.route.snapshot.paramMap.get('id');
  }

}
