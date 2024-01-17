import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../attendance.service';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.scss']
})
export class AttendanceListComponent implements OnInit {

  searchValue: any;
  constructor(private attedanceService: AttendanceService) {

  }

  ngOnInit(): void {

  }


  public searchMemberList(): void {
    this.attedanceService.getSearchMemberList(this.searchValue).subscribe((response: any) => {
      console.log('tttttttttt', response)
    })
  }

}
