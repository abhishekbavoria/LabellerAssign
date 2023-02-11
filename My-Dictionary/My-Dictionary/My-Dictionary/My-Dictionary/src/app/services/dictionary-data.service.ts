import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class DictionaryDataService {
  url = `https://api.dictionaryapi.dev/api/v2/entries/en/fun`;

  constructor(private http:HttpClient) { }
  words(){
    return this.http.get(this.url);
  }
  // posts(data: any) {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   });

  //   return this.http.post(this.url , data, { headers });
  // }
}
