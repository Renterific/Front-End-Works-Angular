import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service'
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  constructor(private _CategoryService:CategoryService) { }
  error:string ='';
  ngOnInit(): void {
  }
  addCategory(categoryForm:any){

    this._CategoryService.addNewCategory(categoryForm).subscribe((response)=>{
      if(response.message == "success"){
        console.log("Done");
        console.log(response.title);
        
      }
      else{
        this.error=response.message
      }
    })
   }

   getCategory(){

    this._CategoryService.getAllCategory().subscribe((response)=>{
      if(response){
        console.log("Done");
        console.log(response[0].title);
        

        
      }
      else{
        this.error=response.message
      }
    })
   }

}
