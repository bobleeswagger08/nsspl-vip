import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@src/app/services/user.service';
import { Guid, IOfficeListParent } from '../model/office';
//import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss']
})
export class OfficeComponent implements OnInit {
  listParent: IOfficeListParent[];
  model:any={};
  constructor(private router: Router,private office: UserService) { }

  ngOnInit(): void {
    this.model.id=Guid.newGuid();
    this.model.code='';
    this.model.note='';
    this.model.description='';
    this.model.parentUnitId='';
    this.model.isActive=true;
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
  saveOffice(){
    this.model.parentUnitId = this.listParent[this.model.parentUnitId].id;
    this.office.createOrganisationUnit(this.model)
      .subscribe(orgUnitData => {
        this.router.navigate(['/listoffice']);
      },(error: any) => {
        alert(error);
      });
  }

}
