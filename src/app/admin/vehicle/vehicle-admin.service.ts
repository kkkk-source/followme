import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleSaveResponse } from 'src/app/pages/vehicle-page/model/vehicle-save-response-model';
import { VehicleSaveRequest } from './model/vehicle-save-request';

@Injectable({
  providedIn: 'root'
})
export class VehicleAdminService {

  constructor(private readonly http: HttpClient) { }

  create(vehicleToCreate: VehicleSaveRequest): Observable<HttpResponse<object>>{
    console.log(vehicleToCreate);
    return this.http.post('https://fathomless-castle-42321.herokuapp.com/api/v1/vehicles', vehicleToCreate, {observe: 'response'});
  }

  findVehicleByUrl(vehicleUrl: string): Observable<VehicleSaveResponse> {
    console.log(vehicleUrl);
    return this.http.get<VehicleSaveResponse>(`https://fathomless-castle-42321.herokuapp.com${vehicleUrl}`);
  }

  linkVehicleToFleet(fleetId: String, vehicleCreatedId: string) {
    let url = `https://fathomless-castle-42321.herokuapp.com/api/v1/fleets/${fleetId}/vehicles`;
    console.log(url);
    let vehicleToAddId: number = +vehicleCreatedId;
    return this.http.patch(url, {vehicleId: vehicleToAddId});
  }

  deleteById(id: number): Observable<any> {
    return this.http.delete(`https://fathomless-castle-42321.herokuapp.com/api/v1/vehicles/${id}`);
  }

  uploadFile(formData: FormData, url: string): Observable<string[]>{
    return this.http.post<string[]>('https://fathomless-castle-42321.herokuapp.com'+url, formData);
  }
}
