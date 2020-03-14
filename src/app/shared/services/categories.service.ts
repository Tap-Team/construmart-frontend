import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private dataService: DataService) { }

  public getCategories(req): Observable<any> {
    return this.dataService.getList(this.baseUrl + 'categories', req);
  }

  public postCategory(data: object) {
    return this.http.post(this.baseUrl + 'categories', data);
  }

  public deleteCategory(id: number) {
    return this.http.delete(this.baseUrl + 'categories/' + id);
  }

  public updateCategory(data: any, id: number) {
    return this.http.put(this.baseUrl + 'categories/' + id, data);
  }

  public getProductsByCategoryId(id: number, req) {
    return this.dataService.getList(this.baseUrl + 'categories/' + id + '/products', req);
  }

  public getCategory(id: number) {
    return this.http.get(this.baseUrl + 'categories/' + id);
  }
}
