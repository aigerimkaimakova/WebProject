import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import { Image} from './images';
import {Immage} from "./models/image.model";
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {IMAGES} from './mock-images';
// import {ErrorObservable} from 'rxjs/ErrorObservable';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  // constructor(private http: HttpClient) { }
  // tslint:disable-next-line:variable-name
  constructor(private http: HttpClient) { }
  private _url: string = "http://localhost:8000/api/images/"
  private httpHeaders = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  getImage(id: number): Observable<Image> {
    return this.http.get<Image>(this._url + id + '/')
  }
  ggetImage(id: number): Observable<Image> {
    return this.http.get<Image>(`${this._url}/${id}`)
  }
  getComments(): Observable<any> {
    return this.http.get<any>(this._url + 'comment/');
  }
  setComment(comment): Observable<any> {
    return this.http.post<any>(this._url + 'comment/', comment, this.httpHeaders);
  }
  // getImages(): Observable<Image[]> {
  //   return Observable.of(IMAGES);
  // }
  getImagesByCategoryId(id: number): Observable<any> {
    return this.http.get<any>(this._url + 'categories/' + id + '/')
  }
  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>(this._url)
  }
  set(image): Observable<Image> {
    return this.http.post<Image>(this._url + 'create/', image, this.httpHeaders);
  }
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error: ', errorResponse.error.message);
    } else {
      console.error('Server Side Error: ', errorResponse);
    }

    // return new ErrorObservable('There is a problem with the service. We are notified & working on it. Please try again later.');
  }

  addImage(img: Immage): Observable<Image> {
    return this.http.post<Image>(this._url, img, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }

  updateImg(img: Immage): Observable<void> {
    return this.http.put<void>(`${this._url}/${img.id}`, img, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    })
  }
  delete(id: number): Observable<any>{
    return this.http.delete(this._url + id + '/')
  }
  deleteImg(id: number): Observable<void> {
    return this.http.delete<void>(`${this._url}/${id}`)
  }
}
