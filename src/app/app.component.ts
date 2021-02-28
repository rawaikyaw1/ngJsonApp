import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularJson';
  allUsers: any;
  userObject = {
    full_name:'',
    phone_number:'',
    email:'',
    password:'',
    id:''
  };

  constructor( private commonService:CommonService ){}

  ngOnInit(){
    this.getUsers();
  }
  
  addUser(formData){
    console.log(formData);
    this.commonService.createUser(formData).subscribe((response)=>{
      this.getUsers();
      this.clearEditData();
    })

  }

  getUsers(){
    this.commonService.getAllUser().subscribe((response)=>{
      this.allUsers = response;
    });
  }

  editUser(user){
    this.userObject = user;
  }

  deleteUser(user){
    this.commonService.deleteUser(user).subscribe((response)=>{
      this.getUsers();
    });
  }

  clearEditData(){
    this.userObject = {
      full_name:'',
      phone_number:'',
      email:'',
      password:'',
      id:''
    };
  }

  updateUser(){
    this.commonService.updateUser(this.userObject).subscribe((response)=>{
      this.getUsers();
      this.clearEditData();
    });
  }

}
