import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { ImageService } from '../image.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  image;
  constructor(
    private cartService: CartService,
    private imageService: ImageService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      phone: ''
    });
  }

  ngOnInit() {
    this.getImage();
    this.items = this.cartService.getItems();

  }
  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }
  getImage() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.imageService.getImage(id).subscribe(image => this.image = image);
  }
  order() {
    alert('Your Order is accepted');
    this.cartService.buyImage(this.checkoutForm.value).subscribe()
  }
}
