import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(
    private http: HttpClient,
  ) { }

  upload(form) {
    return this.http.post('http://destinationurl.com/endpoint', form);
  }
}
