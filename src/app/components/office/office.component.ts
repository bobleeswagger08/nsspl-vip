import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@src/app/services/user.service';
import { IOfficeListParent } from '../model/office';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {
  listParent: IOfficeListParent[];
  model:any={};
  constructor(private router: Router,private office: UserService) { }

  ngOnInit(): void {
    this.model.code='';
    this.model.note='';
    this.model.description='';
    this.model.parentUnitId='';
    this.getParentList();
  }
  listOffice(){
    this.router.navigate(['/listoffice']);
  }
  getParentList() {
    this.office.getOrganisationalList()
      .subscribe((parentList:IOfficeListParent[]) => {
        this.listParent = parentList;
      });
  }

}
