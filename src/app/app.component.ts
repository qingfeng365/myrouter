import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private router: Router) {

  }

  toProductDetail(): void {
    // this.router.navigateByUrl('/product');

    // this.router.navigate(['/product']);

    // this.router.navigateByUrl('/product/2?type=电子产品');

    this.router.navigate(['/product', 2],
      { queryParams: { type: '电子产品' } });
  }

}
