import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  Alluser(){
    return this.http.get('http://localhost:3333/api/user/all-user');
  }
  UpdateData(id:any,user:any){
    return this.http.put(`http://localhost:3333/api/user/update-user/${id}`,user);
  }
  DeleteData(id:any){
    return this.http.delete(`http://localhost:3333/api/user/update-user/${id}`);
  }
  LoginUser(data:any){
    //data {"Email":"zezzo@yahoo.com","Password":"12345}
    return this.http.post(`http://localhost:3333/api/user/login`,data)
  }
  AddUser(data:FormData){
    return this.http.post(`http://localhost:3333/api/user/add-user`,data)
  }
}
