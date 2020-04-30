import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  
  loanrequests:LoanRequests[];
  loandisbursals:LoanDisbursal[];
  loanrejects:LoanDisbursal[];
  updateBal(updatebal: LoanDisbursal):any {
    console.log(updatebal);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:1004/update/updateBal", updatebal,  { headers,responseType: 'text'});
  }
  getAllRequests() {
    return this.loanrequests;
  }
  getRequestsInitially(): Observable<LoanRequests[]> {
    //this function runs for first time
    return this.httpService.get<LoanRequests[]>("http://localhost:1005/loan/getAllRequests");
  }
  setRequestsInitially(reqlist: LoanRequests[]) {
    //set the requests data for future use
    this.loanrequests = reqlist;
  }

  getAllApproved() {
    return this.loandisbursals;
  }
  getApprovesInitially(): Observable<LoanDisbursal[]> {
    //this function runs for first time
    return this.httpService.get<LoanDisbursal[]>("http://localhost:1001/loan/approvedrequests");
  }
  setApprovesInitially(reqlist: LoanDisbursal[]) {
    //set the approves data for future use
    this.loandisbursals = reqlist;
  }

  getAllRejected() {
    return this.loanrejects;
  }
  getRejectsInitially(): Observable<LoanDisbursal[]> {
    //this function runs for first time
    return this.httpService.get<LoanDisbursal[]>("http://localhost:1003/loan/allreqrejects");
  }
  setRejectsInitially(reqlist: LoanDisbursal[]) {
    //set the rejects data for future use
    this.loanrejects = reqlist;
  }

  loanRequest(user: LoanRequests):any{
   
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.httpService.post("http://localhost:1000/loan/request", user,  {headers, responseType: 'text'});
  }

  constructor(private httpService: HttpClient) { }
}

export class LoanRequests {
  
    
    public accountId: string;
   public loanAmount : number;
   public loanTenure: number;
   public creditScore: number;
   public loanRoi: number;
   public loanStatus: string;
   public loanType: string;
   public loanId:number;
   
   
 }
 export class LoanDisbursal {
  constructor(
    
    public accountId: string,
   public loanAmount : number,
   public loanTenure: number,
   public creditScore: number,
   public loanRoi: number,
   public loanStatus: string,
   public loanType: string,
   public emi: number,
   public loanId:number){}
 }
