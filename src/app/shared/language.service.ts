import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
baseUrl = environment.baseUrl;
  constructor(private http:HttpClient) { }

  postHeaders() {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    return headers;
  }

login(creds){
  let url = `${this.baseUrl}users/login?[include]=user`;
  let headers = this.postHeaders();
  return this.http.post(url,creds,{headers:headers});
}

userRegister(data){
  let url = `${this.baseUrl}users`;
  let headers = this.postHeaders();
  return this.http.post(url,data,{headers:headers});
}


postCall(data,model){
  let url = `${this.baseUrl}${model}`;
  let headers = this.postHeaders();
  return this.http.post(url,data,{headers:headers});
}

getCall(model){
  let url = `${this.baseUrl}${model}?filter={"order":"created_on DESC"}`;
  return this.http.get(url);
}

patchCall(data,model){
  let url = `${this.baseUrl}${model}/${data.id}`;
  let headers = this.postHeaders();
  return this.http.patch(url,data,{headers:headers});
}

deleteCall(id,model){
  let url = `${this.baseUrl}${model}/${id}`;
  return this.http.delete(url);
}

}
