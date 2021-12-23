import { Injectable } from '@angular/core';

import { CompanyDetails } from '../Types/CompanyDetails';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 items: any=[];

   addToCart(product:any){

  /*  for (let element in product) { 
      console.log(element)   
        this.items.push( {
         
         [element]: product[element]}) 
    }  */ //for saving in json format inside array
    let i=0;
    let data=[];
  for (let element in product) { 

    data.push( product[element]); 
    
    if(i>2){
      this.items.push(data);
      console.log(data);
      data=[];
      
    
    }
    i++;
  
  }  
  console.log(this.items)  
    
  
      // console.log(product);
      // this.items.push(product);
    
  


  }
  // console.log(this.items);
  getItems(){
    console.log(this.items);
   
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  removeCart(item:any,key:any){

    for(let i=0;i<this.items.length;i++){

      for(let j=0;j<item.length;j++){
        console.log(this.items[i][j]);
        let arr=this.items[i][j];
    
       if(this.items[i][j]==key){
         console.log(this.items[i][j][0]);
         this.items[i].splice(0,4);
         i=0;
         j=0;

       }
       
      }
    }
   
  }
  
}
