import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService implements OnInit{

  private httpClient: HttpClient;
  constructor(private http: HttpClient, private httpBackend: HttpBackend, private localStorage: LocalStorageService) { 
    this.httpClient = new HttpClient(httpBackend);
  }


  ngOnInit(): void {
  }

  get<T>(url: string, data: any = null) {
    let suffix = '';
    if (data) {
      suffix = `?${Object.keys(data)
        .map(key => [key, data[key]].map(encodeURIComponent).join('='))
        .join('&')}`;
    }
    const apiUrl = `${environment.API_ENOW}${url}${suffix}`;
    return this.http.get<T>(apiUrl).pipe(
      //retry(3), // retry a failed request up to 3 times
      //catchError(this.handleError) // then handle the error
    );
  }

  post<T>(url: string, body : any) {
    //const userInfo = this.getUserLoggedIn();
    //const headers = getHeaders(url,'', userInfo.accessToken);
    //return this.http.post<T>(apiUrl, body, { headers });
    const apiUrl = `${environment.API_ENOW}${url}`;
    return this.http.post<T>(apiUrl, body);
  }

  upload<T>(url: string, body : any) {
    var data = new FormData();
    data.append("file", body);
    const apiUrl = `${environment.CDN_URL}${url}`;
    return this.httpClient.post<T>(apiUrl, data,{
      headers: {
      },
    });
  }
}
