import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products: Product[] = [
    new Product(111, "iphone 11", "Apple iphone 11", 49900, 'assets/images/apple-iphone-11.jpeg'),
    new Product(222, "S21 Ultra", "Samsun S21 Ultra", 149900, 'https://rukminim1.flixcart.com/image/312/312/klb78nk0/mobile/4/y/h/galaxy-f62-sm-e625fzkdins-samsung-original-imagygxzrsmbhptk.jpeg?q=70'),
    new Product(333, "Macbook Air", "Apple Macbook Air", 99900, 'https://rukminim1.flixcart.com/image/312/312/jsnjbm80/computer/j/8/c/apple-na-thin-and-light-laptop-original-imafe6f78hur4jbh.jpeg?q=70'),
    new Product(444, "HP Envy", "HP Envy", 49900, 'https://rukminim1.flixcart.com/image/312/312/kbqu4cw0/computer/h/h/h/hp-original-imaftyzqnpnrmnfx.jpeg?q=70'),
    new Product(555, "iPad Pro", "Apple iPad Pro", 119900, 'https://rukminim1.flixcart.com/image/312/312/kb5eikw0/tablet/a/p/h/apple-mxe42hn-a-original-imafsjzsbfdzewts.jpeg?q=70')
  ]

  public text: string = "Add to cart";

  addToCart(id: number) {
    
    console.log(id);
    var i = 0;
    //for(i = 0; i < this.products.length; i++){
    for (let p of this.products){
      if ( p.id == id){
        console.log(p)
        this.text = "Added successfully to cart"
      }
    }
    
  }

  

  

}

export class Product {
  constructor(public id: number,
    public name: string,
    public description: string,
    public price: number,
    public imgUrl: string) {}

}
