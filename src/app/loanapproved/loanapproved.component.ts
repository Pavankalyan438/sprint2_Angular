import { Component, OnInit } from '@angular/core';
import { LoanDisbursal, MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loanapproved',
  templateUrl: './loanapproved.component.html',
  styleUrls: ['./loanapproved.component.css']
})
export class LoanapprovedComponent implements OnInit {
  loandisbursals:LoanDisbursal[];
  message:any;
  constructor(private myservice: MyServiceService,private router: Router) { }

  ngOnInit(): void {
    this.getAllApproved();
  }
  getAllApproved() {
    //adding Books or getting data of books
   if(!this.myservice.getAllApproved())
   {
     this.myservice.getApprovesInitially().subscribe((requestsFetched)=>{
     this.loandisbursals = requestsFetched;
     this.myservice.setApprovesInitially(this.loandisbursals);
     },(error)=>console.log(error));
   }
   {
     this.loandisbursals=this.myservice.getAllApproved();
   }
  }
  updateBal(updatebal: LoanDisbursal) {
    this.myservice.updateBal(updatebal).subscribe(data => {
      this.message=data});
     
  }

}
