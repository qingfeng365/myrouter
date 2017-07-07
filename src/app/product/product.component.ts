import { Params, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productType: string;
  productId: number;

  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    // this.productType = this.routeInfo.snapshot.queryParams.type;
    // console.log(this.productType);
    // this.productId = this.routeInfo.snapshot.params.id;
    // console.log(this.productId);


    console.log('ngOnInit 被触发...')

    this.routeInfo.queryParams.subscribe(
      (params: Params) => {
        console.log('获得新的 queryParams:');
        console.log(params);
        this.productType = params.type;

      }
    );

    this.routeInfo.params.subscribe(
      (params: Params) => {
        console.log('获得新的 params:');
        console.log(params);
        this.productId = params.id
      }
    );


  }

}
