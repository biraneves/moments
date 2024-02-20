import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/Response';
import { Moment } from '../interfaces/Moment';

@Injectable({
  providedIn: 'root',
})
export class MomentsService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`;

  constructor(private http: HttpClient) {}

  getMoments(): Observable<Response<Moment[]>> {
    return this.http.get<Response<Moment[]>>(this.apiUrl);
  }

  getMoment(id: Number): Observable<Response<Moment>> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Response<Moment>>(url);
  }

  createMoment(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  updateMoment(id: number, formData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<FormData>(url, formData);
  }

  removeMoment(id: Number) {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
