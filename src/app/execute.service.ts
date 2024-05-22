import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExecuteService {
  url = "http://localhost/nlahPOS/";

  isLogin = false

  isAuthenticated() {
    if(localStorage.getItem('token') != undefined) {
      this.isLogin = true
    } else {
      this.isLogin = false
    }
    return this.isLogin;
  }

  // private searchResults = new Subject<string[]>();
  
  constructor(private http: HttpClient) { }

  checklogin(ldata: any){
    return this.http.post(this.url + 'checklogin.php',JSON.stringify(ldata));
  }

  savenewproduct(data: any){
    return this.http.post(this.url + 'newproduct.php',JSON.stringify(data));
  }
  savenewcustomer(data: any){
    return this.http.post(this.url + 'newcustomer.php',JSON.stringify(data));
  }

  saveremit(data: any){
    return this.http.post(this.url + 'saveremittance.php', JSON.stringify(data));
  }

  getremit(){
    return this.http.get(this.url + 'getremittance.php');
  }

  getremitupdate(rid: any){
    return this.http.get(this.url + `getupdateremittance.php?rid=${rid}`);
  }

  updateRemit(data: any){
    return this.http.post(this.url + 'updateremittance.php',JSON.stringify(data));
  }

  getproduct(){
    return this.http.get(this.url + 'getproduct.php');
  }

  updateProduct(data: any){
    return this.http.post(this.url + 'updateProduct.php',JSON.stringify(data));
  }

  deleteProduct(bid: any){
    return this.http.post(this.url + 'deleteProd.php', { bid });
  }

  getcust(){
    return this.http.get(this.url + 'getCustomer.php');
  }

  getrelease(){
    return this.http.get(this.url + 'getRelease.php');
  }

  getBarcode(data: any){
    return this.http.get(this.url + `getProductBarcode.php?bid=${data}`);
  }

  viewCustomer(data: any){
    return this.http.get(this.url + `viewCustomer.php?cid=${data}`);
  }

  getCustomer(cid: any){
    return this.http.get(this.url + `getCustomerId.php?cid=${cid}`);
  }
  getAdmin(aid: any){
    return this.http.get(this.url + `getAdminId.php?aid=${aid}`);
  }

  Admin(aid: any){
    return this.http.get(this.url + `getAdmin.php?aid=${aid}`);
  }

  updateCustomer(data: any){
    return this.http.post(this.url + 'updateCustomer.php',JSON.stringify(data));
  }

  updateAdmin(data: any){
    return this.http.post(this.url + 'updateAdmin.php',JSON.stringify(data));
  }

  getSales(){
    return this.http.get(this.url + 'getTransaction.php');
  }

  getSalesData(){
    return this.http.get(this.url + 'getSalesData.php');
  }

  getRetRepData(){
    return this.http.get(this.url + 'getReturnReplace.php');
  }

  getSalesReportData(){
    return this.http.get(this.url + 'getSalesReport.php');
  }

  getDiscrepancyReportData(){
    return this.http.get(this.url + 'getDiscrepancyReport.php');
  }

  getSalesPrint(dy: any){
    return this.http.get(this.url + `getTransactionDetails.php?dt=${dy}`)
  }

  addToReleaseProduct(data: any){
    return this.http.post(this.url + 'addreleaseproduct.php',JSON.stringify(data));
  }
}
