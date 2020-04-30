import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyServiceService, LoanRequests } from '../my-service.service';

@Component({
  selector: 'app-loanaccepted',
  templateUrl: './loanaccepted.component.html',
  styleUrls: ['./loanaccepted.component.css']
})
export class LoanacceptedComponent implements OnInit {
  loanrequests:LoanRequests[];
  constructor(private myservice: MyServiceService,private router: Router) { }

  ngOnInit(): void {
    this.getAllRequests();
  }
  getAllRequests() {
    //adding Books or getting data of books
   if(!this.myservice.getAllRequests())
   {
     this.myservice.getRequestsInitially().subscribe((requestsFetched)=>{
     this.loanrequests = requestsFetched;
     this.myservice.setRequestsInitially(this.loanrequests);
     },(error)=>console.log(error));
   }
   {
     this.loanrequests=this.myservice.getAllRequests();
   }
  }
}
