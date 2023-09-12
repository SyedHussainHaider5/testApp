import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  cardData = [
    {
      image: "https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg",
      text: "Contact our customer support representative now!",
      buttonText: "Customer Support"
    },
    {
      image: "https://raw.githubusercontent.com/DXHeroes/knowledge-base-content/master/files/bug_reporting.png",
      text: "If you find any kind of bug in our system, kindly report it!",
      buttonText: "Report a bug"
    },
    {
      image: "https://icon-library.com/images/it-services-icon/it-services-icon-13.jpg",
      text: "Request for a maintainance!",
      buttonText: "Maintainance"
    
    }
  ]
}
