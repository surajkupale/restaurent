import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService1Service {

  constructor(private http: HttpClient) { }

  onPost(item: any){
    return this.http.post<any>("http://localhost:3000/api/register", item)
    .pipe(map((res:any) => {
      return res
    })
    )    
  }

  onGet(){
    return this.http.get<any>("http://localhost:3000/api/restdata")
    .pipe(map((res:any) => {
      return res;
    })
    )
  }

  onLogin(item: any){
    return this.http.post<any>("http://localhost:3000/api/login", item)
    .pipe(map((res:any) => {
      return res;
    })
    )
  }

  onDelete(id: number){
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
    .pipe(map((res:any) => {
      return res;
    })
    )
  }

}
