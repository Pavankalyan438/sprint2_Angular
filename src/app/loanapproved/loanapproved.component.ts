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
    
    this.myservice.getApprovesInitially().subscribe((data)=>{
      this.loandisbursals = data
  
  })}
  updateBal(updatebal: LoanDisbursal) {
    if(confirm("Are you sure to pay EMI?")){
   if(updatebal.accountId=="SERVER DOWN"){
     alert("Cannot perform operstions when main server is down!!")
   }else{
    this.myservice.updateBal(updatebal).subscribe(data => {
      this.message=data
    alert(this.message)})
   }
  }
  }
}
