import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { utils, writeFile } from 'xlsx';
import { toPng } from 'html-to-image';
import { GetAddtocart } from '../models/get-addtocart';
import { AdminDashboardService } from '../services/admin-dashboard.service';
import { SplitButton } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-chart-and-graph',
  standalone: true,
  imports: [CommonModule, NgxChartsModule, SplitButton, ToastModule,ButtonModule],
  providers: [MessageService],
  templateUrl: './chart-and-graph.component.html',
  styleUrls: ['./chart-and-graph.component.css'],
})

export class ChartAndGraphComponent {
  
  GetAddToCart: GetAddtocart[] = [];
  loading: boolean = true;
  error: string = '';
  statusData: any[] = [];
  productData: any[] = [];
  COLORS = ['#0088FE', '#FF8042'];

  menuItems: any[] = [];

  constructor(
    private adminDashBoard: AdminDashboardService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.fetchCartDetails();

    this.menuItems = [
      {
        label: 'Export to Excel',
        command: () => this.exportToExcel(),
      },
      {
        label: 'Export Chart as Image',
        command: () => this.exportGraphToImage(),
      },
    ];
  }
  yAxisTickFormatting(value: number): string {
    return Math.round(value).toString(); 
  }

  fetchCartDetails(): void {
    this.adminDashBoard.getAddToCart().subscribe({
      next: (data) => {
        this.GetAddToCart = data;
        this.prepareChartData();
      },
      error: (err) => {
        this.error = err.error || 'Error fetching cart details';
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  prepareChartData(): void {
    this.statusData = [
      {
        name: 'Order Placed',
        value: this.GetAddToCart.filter((item) => item.status === 1).length,
      },
      {
        name: 'Pending',
        value: this.GetAddToCart.filter((item) => item.status !== 1).length,
      },
    ];

    this.productData = this.GetAddToCart.reduce((acc: any[], item: any) => {
      const found = acc.find((prod) => prod.name === item.productName);
      if (found) {
        found.value += 1;
      } else {
        acc.push({ name: item.productName, value: 1 });
      }
      return acc;
    }, []);
  }

  exportToExcel(): void {
    const excelData = this.GetAddToCart.map((item) => ({
      Username: item.firstName,
      ProductName: item.productName,
      Price: item.price,
      Status: item.status === 1 ? 'Order Placed' : 'Pending',
    }));

    const workbook = utils.book_new();
    const cartDetailsSheet = utils.json_to_sheet(excelData);
    utils.book_append_sheet(workbook, cartDetailsSheet, 'Cart Details');

    writeFile(workbook, 'CartReports.xlsx');
    this.messageService.add({
      severity: 'success',
      summary: 'Export Successful',
      detail: 'Excel report has been exported.',
    });
  }

  exportGraphToImage(): void {
    const charts = document.querySelectorAll('.chart');
    charts.forEach((chart, index) => {
      if (chart instanceof HTMLElement) {
        toPng(chart)
          .then((dataUrl) => {
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = `Chart-${index + 1}.png`;
            link.click();
          })
          .catch((err) => {
            console.error('Failed to export image', err);
          });
      }
    });
    this.messageService.add({
      severity: 'success',
      summary: 'Export Successful',
      detail: 'Chart images have been exported.',
    });
  }
}


// import { Component, Input, OnChanges } from '@angular/core';
// import { GetAddtocart } from '../models/get-addtocart';

// @Component({
//   selector: 'app-chart-and-graph',
//  standalone: true,
//   templateUrl: './chart-and-graph.component.html',
//   styleUrls: ['./chart-and-graph.component.css']
// })
// export class ChartAndGraphComponent implements OnChanges {
//   @Input() GetAddToCart: GetAddtocart[] = [];
//   @Input() loading: boolean = true;

//   statusData: any[] = [];
//   productData: any[] = [];
//   COLORS = ['#0088FE', '#FF8042'];

//   ngOnChanges(): void {
//     if (!this.loading) {
//       this.prepareChartData();
//     }
//   }

//   prepareChartData(): void {
//     this.statusData = [
//       {
//         name: 'Order Placed',
//         value: this.GetAddToCart.filter((item) => item.status === 1).length,
//       },
//       {
//         name: 'Pending',
//         value: this.GetAddToCart.filter((item) => item.status !== 1).length,
//       },
//     ];

//     this.productData = this.GetAddToCart.reduce((acc: any[], item: any) => {
//       const found = acc.find((prod) => prod.name === item.productName);
//       if (found) {
//         found.value += 1;
//       } else {
//         acc.push({ name: item.productName, value: 1 });
//       }
//       return acc;
//     }, []);
//   }
// }
