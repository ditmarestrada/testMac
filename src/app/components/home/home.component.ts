import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';

const headers = {
  'TRON-PRO-API-KEY': 'xxxx',
  'Content-Type': 'application/json'
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private client : HttpClient) { }

  ngOnInit(): void {
  }

  tronTest(){

    this.service().subscribe(
      (response : any)=>{

        console.log('response : ', response);
      },
      (error)=> console.log('error', error)
    );

  }

  service(){

    const body = { 
      to_address: 'aaaasasdasd',
      owner_address: 'sadasdad',
      amount: 400 
     };

    return this.client.post('https://api.trongrid.io/wallet/createtransaction', body , {headers})
      .pipe(
        tap(res => res)
      );

  }


}
