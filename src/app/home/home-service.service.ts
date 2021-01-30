import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FleetListResponse } from './model/fleet-list.model';
import { HttpClient } from '@angular/common/http';
import { ResponsePagination } from './model/response-pagination-model';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {


  
  constructor(private readonly http: HttpClient) { 

  }

  getFleets(): Observable<ResponsePagination>{
    
    return this.http.get<ResponsePagination>('https://fathomless-castle-42321.herokuapp.com/api/v1/fleets');

  }
}
