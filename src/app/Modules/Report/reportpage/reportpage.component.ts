import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ExecuteService } from '../../../execute.service';

@Component({
  selector: 'app-reportpage',
  standalone: true,
  imports: [],
  templateUrl: './reportpage.component.html',
  styleUrl: './reportpage.component.css'
})
export class ReportpageComponent implements OnInit, AfterViewInit{
  dailySalesData: any;
  monthlySalesData: any;
  returnReplaceData: any;
  retrep: any;
  salesreport: any;
  desc: any;


  // dailySalesData = {
  //   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  //   datasets: [{
  //     label: 'Daily Sales',
  //     data: [120, 150, 80, 100, 200, 180, 95], // Sample data
  //     backgroundColor: 'rgba(75, 192, 192, 0.2)',
  //     borderColor: 'rgba(75, 192, 192, 1)',
  //     borderWidth: 1
  //   }]
  // };

  // // Sample data for monthly sales
  // monthlySalesData = {
  //   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  //   datasets: [{
  //     label: 'Monthly Sales',
  //     data: [1200, 1800, 1500, 2000, 1650, 1900], // Sample data
  //     backgroundColor: 'rgba(54, 162, 235, 0.2)',
  //     borderColor: 'rgba(54, 162, 235, 1)',
  //     borderWidth: 1
  //   }]
  // };

  // // Sample data for return/replace
  // returnReplaceData = {
  //   labels: ['Returned', 'Replaced'],
  //   datasets: [{
  //     data: [45, 20], // Sample data
  //     backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(255, 206, 86, 0.2)'],
  //     borderColor: ['rgba(255, 99, 132, 1)', 'rgba(255, 206, 86, 1)'],
  //     borderWidth: 1
  //   }]
  // };

  // ngOnInit(): void {
  //   this.exec.getSalesData().subscribe
  // }
  
  ngOnInit() {
    this.exec.getRetRepData().subscribe((data: any)=>{
      this.retrep = data;
      console.log(this.retrep);
    })

    this.exec.getSalesReportData().subscribe((data: any) => {
      this.salesreport = data; 
    });

    this.exec.getDiscrepancyReportData().subscribe((data: any) => {
      this.desc = data; 
    });

    this.exec.getSalesData().subscribe((data: any) => {
      // Prepare data for daily sales chart
      this.dailySalesData = {
        labels: data.salesData.map((item: any) => item.Day),
        datasets: [{
          label: 'Daily Sales',
          data: data.salesData.map((item: any) => item.DailyTotal),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      };

      // Prepare data for monthly sales chart (aggregation)
      this.monthlySalesData = this.aggregateMonthlySales(data.salesData); 

      // Prepare data for return/replace pie chart
      this.returnReplaceData = {
        labels: ['Returned', 'Replaced'],
        datasets: [{
          data: [data.returnReplaceData.returnedCount, data.returnReplaceData.replacedCount],
          backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(255, 206, 86, 0.2)'],
          borderColor: ['rgba(255, 99, 132, 1)', 'rgba(255, 206, 86, 1)'],
          borderWidth: 1
        }]
      };
      this.createDailySalesChart();
      this.createMonthlySalesChart();
      this.createReturnReplaceChart();
    });
  }
  aggregateMonthlySales(dailySales: any[]) {
    const monthlyTotals: { [key: string]: number } = {};
    dailySales.forEach(sale => {
      const month = sale.Month;
      monthlyTotals[month] = sale.MonthlySales;
      // const month = sale.Day.substring(0, 7); // Extract year-month part
      // monthlyTotals[month] = (monthlyTotals[month] || 0) + sale.DailyTotal;
    });

    return {
      labels: Object.keys(monthlyTotals),
      datasets: [{
        label: 'Monthly Sales',
        data: Object.values(monthlyTotals),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    };
  }
  ngAfterViewInit() {
    // this.createDailySalesChart();
    // this.createMonthlySalesChart();
    // this.createReturnReplaceChart();
  }

  constructor(private exec: ExecuteService, private http: HttpClient) { }

  createDailySalesChart() {
    const dailySalesCanvas = document.getElementById('dailySalesChart') as HTMLCanvasElement;
    new Chart(dailySalesCanvas, {
      type: 'bar',
      data: this.dailySalesData,
      // ... options for daily sales chart
    });
  }

  createMonthlySalesChart() {
    const monthlySalesData = document.getElementById('monthlySalesChart') as HTMLCanvasElement;
    new Chart(monthlySalesData, {
      type: 'bar',
      data: this.monthlySalesData,
    // ... similar to createDailySalesChart, but use monthlySalesData and a different canvas ID
    });
  }

  createReturnReplaceChart() {
    const returnReplaceData = document.getElementById('returnReplaceChart') as HTMLCanvasElement;
    new Chart(returnReplaceData, {
      type: 'pie',
      data: this.returnReplaceData,
    // ... similar to createDailySalesChart, but use monthlySalesData and a different canvas ID
    });
  }

}
