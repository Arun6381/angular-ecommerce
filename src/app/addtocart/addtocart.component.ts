import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GetAddtocart } from '../models/get-addtocart';
import { GetAddtocartForUserService } from '../services/get-addtocart-for-user.service';
import { UpdateAddtocartstatusService } from '../services/update-addtocartstatus.service';
import { DeleteAddtocartstatusService } from '../services/delete-addtocartstatus.service';

@Component({
  selector: 'app-addtocart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './addtocart.component.html',
  styleUrl: './addtocart.component.css'
})
export class AddtocartComponent {
  userId: number | null;
  role:string|null;
  cartItems: GetAddtocart[] = [];
  errorMessage: string | null = null;

  constructor(
    private getAddToCart: GetAddtocartForUserService,
    private placetheorder:UpdateAddtocartstatusService,
    private deleteorder:DeleteAddtocartstatusService
  ) {
    const storedUserId = localStorage.getItem('userid');
    const roles = localStorage.getItem('role');

    this.userId = storedUserId ? parseInt(storedUserId, 10) : null;
    this.role = roles ? "" : null;

  }

  ngOnInit(): void {
    if (this.userId !== null) {
      this.fetchAddToCartDetails();
    } else {
      this.errorMessage = 'User ID is not available.';
    }
  }

  fetchAddToCartDetails(): void {
    if (this.userId !== null) {
      this.getAddToCart.getAllAddToCart(this.userId).subscribe({
        next: (data: GetAddtocart[]) => {
          this.cartItems = data;
          this.errorMessage = null; 
          console.log(data)
        },
        error: (err) => {
          this.errorMessage = 'Failed to fetch cart details.';
          console.error(err);
        }
      });
    } else {
      this.errorMessage = 'Invalid User ID.';
    }
  }

  placeTheOrder(cartId:number):void{
    this.placetheorder.placeTheOrder(cartId).subscribe({
      next: (response: GetAddtocart[]) => {
        console.log('Order placed successfully:', response);
        this.fetchAddToCartDetails();

      },
      error: (error) => {
        console.error('Error placing the order:', error);
      },
      complete: () => {
        console.log('Order placement process completed.');
      }
    })
  }

  deleteItem(cartId:number):void{
    this.deleteorder.deletecartitem(cartId).subscribe({
      next: () => {
        console.log('Order deleted successfully:', cartId);
        this.fetchAddToCartDetails();
            },
      error: (error) => {
        console.error('Error deleting the order:', error);
      },
      complete: () => {
        console.log('Order delete process completed.');
      }
    })
  }

}

