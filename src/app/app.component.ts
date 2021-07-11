import { Component } from '@angular/core';
import { UserService } from './user.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front-end-works-Angular';
  formData: FormData = new FormData(); 
  constructor(private myservice:UserService){
    
    //myservice.LoginUser({Email:"zezzo@yahoo.com",Password:"12345"}).subscribe((res)=>{console.log(res)},(err)=>{console.log(err)})
  }
  dataform(){

  }
  handleFileInput(files: any) {
    this.formData.append('photo',files[0]); 
    this.formData.append('Name','basel'); 
    this.formData.append('image',files[0].name); 
    this.formData.append('Phone','656565'); 
    this.formData.append('Email','qqqqq@yahoo.com'); 
    this.formData.append('Password','010130799841'); 
    this.formData.append('Address[street]','alamera'); 
    this.formData.append('Address[city]','menof'); 
    this.formData.append('Address[lang]','66666666'); 
    this.formData.append('Address[lat]','233333333'); 
    this.myservice.AddUser(this.formData).subscribe((res)=>{console.log(res)},(err)=>{console.log(err)})
}
}
