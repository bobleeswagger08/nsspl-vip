import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@src/app/services/user.service';
import { IOfficeListParent } from '../model/office';
@Component({
  selector: 'app-list-office',
  templateUrl: './list-office.component.html',
  styleUrls: ['./list-office.component.scss']
})
export class ListOfficeComponent implements OnInit {
  listParent:IOfficeListParent[]
  constructor(private router: Router,private office: UserService) { }

  ngOnInit(): void {
    this.getOfficeList();
  }
  getOfficeList(){
    this.office.getOrganisationalList()
    .subscribe((parentList:IOfficeListParent[]) =>{
      this.listParent = parentList;
    },(error: any) => {
      alert(error);
    });
  }
  addOffice(){
    this.router.navigate(['/office']);
  }

}
