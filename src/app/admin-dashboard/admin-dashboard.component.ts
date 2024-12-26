import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator'; // Import PaginatorModule
import { GetAddtocart } from '../models/get-addtocart';
import { AdminDashboardService } from '../services/admin-dashboard.service';
import { Skeleton } from 'primeng/skeleton';
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, PaginatorModule,Skeleton], // Add PaginatorModule here
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  GetAddToCart: GetAddtocart[] = [];
  error: string = ''; 
  usernames: string[] = [];
  filteredUsernames: string[] = [];
  selectedUser: string = '';
  filteredCartDetails: GetAddtocart[] = [];
  first: number = 0; 
  itemsPerPage: number = 10; 
  loading: boolean = true;

  constructor(private adminDashBoard: AdminDashboardService) {}

  ngOnInit(): void {
    this.fetchCartDetails();
  }

  fetchCartDetails(): void {
    this.adminDashBoard.getAddToCart().subscribe({
      next: (data) => {
        this.GetAddToCart = data;
        this.usernames = Array.from(new Set(data.map((item) => item.firstName)));
        this.filterCartDetails();
      },
      error: () => {
        this.error = 'Failed to load cart details.';
      },
      complete: () => {
        this.loading = false;
      }
    });
  }

  loadPageData(event: any): void {
    this.first = event.first;
    this.itemsPerPage = event.rows;
    this.filterCartDetails();
  }

  handleInputChange(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    this.selectedUser = input;

    if (input) {
      this.filteredUsernames = this.usernames.filter((username) =>
        username.toLowerCase().includes(input.toLowerCase())
      );
    } else {
      this.filteredUsernames = [];
    }
  }

  handleSuggestionClick(username: string): void {
    this.selectedUser = username;
    this.filteredUsernames = [];
    this.filterCartDetails();
  }

  filterCartDetails(): void {
    this.filteredCartDetails = this.selectedUser
      ? this.GetAddToCart.filter((item) =>
          item.firstName.toLowerCase().includes(this.selectedUser.toLowerCase())
        )
      : this.GetAddToCart;
  }

  get currentItems(): GetAddtocart[] {
    const startIndex = this.first;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredCartDetails.slice(startIndex, endIndex);
  }

  clearSearch(): void {
    this.selectedUser = '';
    this.filteredUsernames = [];
    this.filterCartDetails();
  }
}



// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// import { GetAddtocart } from '../models/get-addtocart';
// import { AdminDashboardService } from '../services/admin-dashboard.service';
// @Component({
//   selector: 'app-admin-dashboard',
//   standalone: true,
//   imports: [CommonModule,FormsModule],
//   templateUrl: './admin-dashboard.component.html',
//   styleUrl: './admin-dashboard.component.css'
// })
// export class AdminDashboardComponent {
//   GetAddToCart:GetAddtocart[]=[];
//   error: string = ''; 
//   usernames: string[] = [];
//  filteredUsernames: string[] = [];
//  selectedUser: string = '';
//  filteredCartDetails: GetAddtocart[] = [];
//  currentPage: number = 1;
//  itemsPerPage: number = 10;
//  loading: boolean = true;

//   constructor(
//    private adminDashBoard:AdminDashboardService,
//   ){}

//   ngOnInit():void{
//    this.fetchCartDetails();
//   }
//   fetchCartDetails(): void {
//     this.adminDashBoard.getAddToCart().subscribe({
//         next: (data) => {
//             this.GetAddToCart = data;
//             this.usernames = Array.from(new Set(data.map((item) => item.firstName)));
//             this.filterCartDetails();
//         },
//         error: () => {
//             this.error = 'Failed to load cart details.';
//         },
//         complete: () => {
//             this.loading = false;
//         },
//     });
// }

// loadPageData(event: any): void {
//     // Update currentPage and load filtered data based on pagination
//     this.currentPage = event.first / this.itemsPerPage + 1;
//     this.filterCartDetails();
// }


//  handleInputChange(event: Event): void {
//    const input = (event.target as HTMLInputElement).value;
//    this.selectedUser = input;
 
//    if (input) {
//      this.filteredUsernames = this.usernames.filter((username) =>
//        username.toLowerCase().includes(input.toLowerCase())
//      );
//    } else {
//      this.filteredUsernames = [];
//    }
//  }
 

//  handleSuggestionClick(username: string): void {
//    this.selectedUser = username;
//    this.filteredUsernames = [];
//    this.filterCartDetails();
//  }

//  filterCartDetails(): void {
//    this.filteredCartDetails = this.selectedUser
//      ? this.GetAddToCart.filter((item) =>
//          item.firstName.toLowerCase().includes(this.selectedUser.toLowerCase())
//        )
//      : this.GetAddToCart;

//    this.currentPage = 1; // Reset to the first page
//  }

//  get currentItems(): GetAddtocart[] {
//    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
//    const endIndex = startIndex + this.itemsPerPage;
//    return this.filteredCartDetails.slice(startIndex, endIndex);
//  }

//  get totalPages(): number {
//    return Math.ceil(this.filteredCartDetails.length / this.itemsPerPage);
//  }

//  goToPreviousPage(): void {
//    if (this.currentPage > 1) this.currentPage--;
//  }

//  goToNextPage(): void {
//    if (this.currentPage < this.totalPages) this.currentPage++;
//  }

//  clearSearch(): void {
//    this.selectedUser = '';
//    this.filteredUsernames = [];
//    this.filterCartDetails();
//  }
// }
//  //  getAddtoCartProdect():void{
//  //    this.adminDashBoard.getAddToCart().subscribe({
//  //     next: (data) => {
//  //       console.log(data)
//  //       this.GetAddToCart = data;
//  //     },
//  //     error: () => {
//  //       this.error = 'Failed to fetch categories.';
//  //     }
//  //    })
//  //  }
//  // }


