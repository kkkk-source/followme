import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private readonly http: HttpClient) { }

  uploadFile(formData: FormData, url: string){

    return this.http.post('https://fathomless-castle-42321.herokuapp.com'+url, formData);
  }
}
