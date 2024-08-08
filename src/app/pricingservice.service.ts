import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class PricingserviceService {
  constructor(private http: HttpClient) {}
  getdata() {
    return this.http.get('http://127.0.0.1:8000/');
  }
}
