import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private cartservice: CartService, private router: Router) {}
  public products: any = [];
  public totalItem: number = 0;

  ngOnInit(): void {
    this.cartservice.getProducts().subscribe((res) => {
      this.products = res;
      this.totalItem = this.cartservice.getTotalPrice();
    });
  }

  removeItem(item: any) {
    this.cartservice.removeCartItem(item);
  }

  emptyCart() {
    this.cartservice.removeAllCart();
  }
}
