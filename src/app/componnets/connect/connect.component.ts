import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  ethereum: any;
  walletAddress:any; 
  
  constructor() { }

  ngOnInit(): void {
    
  }
  onConnectWallet() {
    this.ethereum = window['ethereum'];
    this.ethereum.request({ method: 'eth_requestAccounts' }).then((response) => {
      console.log("hj", response[0])
      this.walletAddress = response[0];
      console.log(window.ethereum.networkVersion, 'window.ethereum.networkVersion');
      console.log(response);
    })
    .catch((error) => {
      console.log(error)
    });
    console.log('dsfsd',  this.ethereum.request({ method: 'eth_requestAccounts' }));
  }

}
