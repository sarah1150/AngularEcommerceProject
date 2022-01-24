import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productList: any = [];
  public filterCategory: any;
  searchKey: string = '';
  constructor(
    private apiservice: ApiService,
    private cartservice: CartService
  ) {}

  ngOnInit(): void {
    this.apiservice.getProduct().subscribe((product: any) => {
      this.productList = product;
      this.filterCategory = product;
      this.productList.forEach((a: any) => {
        if (
          a.category === "women's clothing" ||
          a.category === "men's clothing"
        ) {
          a.category = 'fashion';
        }

        // Merge or add in each product 'a' add to it Key value
        Object.assign(a, { quantity: 1, total: a.price });
      });
      console.log(this.productList);
    });

    this.cartservice.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }

  onAddToCart(element: any) {
    this.cartservice.addtoCart(element);
  }

  filter(category: string) {
    this.filterCategory = this.productList.filter((a: any) => {
      if (a.category == category || category == '') {
        return a;
      }
    });
  }
}
