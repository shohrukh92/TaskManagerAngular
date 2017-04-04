import { Injectable } from '@angular/core';    
import { Headers, Http, Jsonp, Response, RequestOptions } from '@angular/http';    
import { Observable } from 'rxjs/Observable';    
import 'rxjs/Rx';    
import 'rxjs/add/observable/throw';    
    
@Injectable()    
export class ApiService {    
    private _apiURL: string = 'http://localhost:3500';    
    private _headers: Headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});        
    private _options: RequestOptions = new RequestOptions({headers: this._headers});    
    
    constructor(private _http: Http) {}    
    
    private _getJson(response: Response) {    
        return response.json();    
    }    
    
    
    private _checkForError(response: Response): Response {    
        if (response.status >= 200 && response.status < 300) {    
            return response;    
        } else {    
            var error = new Error(response.statusText)    
            error['response'] = response;    
            console.error(error);    
            throw error;    
        }    
    }    
    
    
    get(path: string): Observable<any> {    
        return this._http.get(`${this._apiURL}${path}`)    
            .map(this._checkForError)    
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'))    
            .map(this._getJson)    
    }    
    
    
    post(path: string, body): Observable<any> {    
        return this._http    
            .post(`${this._apiURL}${path}`, body, this._options)    
            .map(this._checkForError)    
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'))    
            .map(this._getJson)    
    }    
    
    put(path: string, body): Observable<any> {    
        return this._http    
            .put(`${this._apiURL}${path}`, body)    
            .map(this._checkForError)    
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'))    
            .map(this._getJson)    
    }    
    
    delete(path: string): Observable<any> {        
        return this._http    
            .delete(`${this._apiURL}${path}`)    
            .map(this._checkForError)    
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'))    
            .map(this._getJson)    
    }    
}    
