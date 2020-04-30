import { Component, OnInit } from '@angular/core';
import { LoanDisbursal, MyServiceService } from '../my-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loanrejected',
  templateUrl: './loanrejected.component.html',
  styleUrls: ['./loanrejected.component.css']
})
export class LoanrejectedComponent implements OnInit {
  loanrejects:LoanDisbursal[];
  constructor(private myservice: MyServiceService,private router: Router) { }

  ngOnInit(): void {
    this.getAllRejected();
  }
  getAllRejected() {
    //adding Books or getting data of books
   if(!this.myservice.getAllRejected())
   {
     this.myservice.getRejectsInitially().subscribe((requestsFetched)=>{
     this.loanrejects = requestsFetched;
     this.myservice.setRejectsInitially(this.loanrejects);
     },(error)=>console.log(error));
   }
   {
     this.loanrejects=this.myservice.getAllRejected();
   }
  }
}
