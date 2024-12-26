import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Catogrymodel } from '../models/catogrymodel';
import { Productcatogrymodel } from '../models/productcatogrymodel';
import { CategoryService } from '../services/category.service';
import { ProductcategoryService } from '../services/productcategory.service';
import { AddToCartService } from '../services/add-to-cart.service';
import { GetAllProductService } from '../services/get-all-product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  categories: Catogrymodel[] = []; 
  error: string = ''; 
  ProductCategoryService: Productcatogrymodel[]=[];
  userId: number | null;

  constructor(
    private categoryService: CategoryService,
    private productCategoryService: ProductcategoryService,
    private addToCartService: AddToCartService,
    private getAllProductService:GetAllProductService

  ) {
    const storedUserId = localStorage.getItem('userid');
    this.userId = storedUserId ? parseInt(storedUserId, 10) : 0;
  }

  ngOnInit(): void {
    this.fetchCategories();
    this.getAllProduct();
  }

  fetchCategories(): void {
    this.categoryService.getCategories().subscribe({
      next: (data) => {
        console.log(data)
        this.categories = data;
      },
      error: () => {
        this.error = 'Failed to fetch categories.';
      }
    });
  }

  
  getProductByCategory(categoryId: number): void {
    this.productCategoryService.getProductsByCategories(categoryId).subscribe({
      next: (data) => {
        this.ProductCategoryService = data;
        console.log('Products:', this.ProductCategoryService);
      },
      error: () => {
        this.error = 'Failed to fetch products for the category.';
      }
    });
  }

  handleAddToCart(productId: number): void {
    if (this.userId === null) {
      alert('You must be logged in to add items to your cart.');
      return;
    }
  
    this.addToCartService.addToCart(this.userId, productId).subscribe({
      next: (response) => {
        console.log('Product added to cart:', response);
        alert('Product added to cart successfully!');
      },
      error: (error) => {
        console.error('Error adding product to cart:', error);
        alert('Failed to add product to cart.');
      },
    });
  }
  

  getAllProduct():void{
    this.getAllProductService.getAllProduct().subscribe({
      next: (data) => {
        console.log(data)
        this.ProductCategoryService = data;
      },
      error: () => {
        this.error = 'Failed to fetch categories.';
      }
    });
  }
  // handleAddToCart(productId:number):void{
  //  this.addToCartService.addToCart(this.userId, productId).subscribe({
  //   next: (response) => {
  //     console.log('Product added to cart:', response);
  //     alert('Product added to cart successfully!');
  //   },
  //   error: (error) => {
  //     console.error('Error adding product to cart:', error);
  //     alert('Failed to add product to cart.');
  //   }
  // });
  // }
  
}

