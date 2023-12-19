import { RestService } from './../shared/services/Rest.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http'
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Shared } from '../shared/services/shared.service';
import { AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  data: {
    FirstName: string,
    LastName: string,
    UserName: string,
    Birthday: string,
    Email: string,
    image: File,
    imagePath: string,

  } = {
      FirstName: "",
      LastName: "",
      UserName: "",
      Birthday: "",
      Email: "",
      image: null,
      imagePath: ""
    }
    requestData = {
      FirstName: this.data.FirstName,
      LastName: this.data.LastName,
      UserName: this.data.UserName,
      Birthday: this.data.Birthday,
      image: this.data.image,
    }
  session: any;
  profilePicture: File | undefined;
  @ViewChild('fileInput') fileInput:any;
  selectedImage: string | null = null;
  selectedFile: File | null = null;
  imageLink: string | null = null;
  constructor(
    private rest: RestService,
    private restService: RestService,
    private http: HttpClient,
    private datePipe : DatePipe,
    private toastr:ToastrService
  ) {}

  emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  validateAge(control: AbstractControl): ValidationErrors | null {
    const currentDate = new Date();
    const selectedDate = new Date(control.value);

    if (selectedDate <= currentDate) {
      return null;
    } else {
      return { customError: true };
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
    this.data.imagePath = URL.createObjectURL(this.selectedFile);
  }
  
  ngOnInit() {

    this.restService.post("User/ProfileInfo", null).subscribe((res: ProfileResult) => {

      this.data.FirstName = res.firstName;
      this.data.LastName = res.lastName;
      this.data.UserName = res.userName;
      this.data.Email = res.email;
      this.data.Birthday = res.birthday;
      this.data.imagePath = res.imagePath;
      const parts = res.birthday.split('/');
      if (parts.length === 3) {
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1; // Months are 0-indexed
        const year = parseInt(parts[2], 10);
      
        const format = this.datePipe.transform(new Date(year, month, day), 'yyyy-MM-dd');
        this.data.Birthday = format;
      }
    });
    

  }

  
  submit()
  {
    console.log(this.selectedFile);
    const formData = new FormData;
    formData.append('FirstName',this.data.FirstName);
    formData.append('LastName',this.data.LastName);
    formData.append('UserName',this.data.UserName);
    formData.append('BirthDay',this.data.Birthday);
    formData.append('Image',this.selectedFile);
    
    this.restService.post<any>('User/EditProfile', formData).subscribe(
      (response) => {
        if (response['success']) {
          this.updateData();
          this.toastr.success('پروفایل با موفقیت تغییر یافت', 'موفقیت');
        }
        else
        {
          if(response['message']='User already exists.')
            this.toastr.error('نام کاربری قبلا در سبستم ثبت شده است.', 'خطا');
          else
          {
            this.toastr.error('مشکلی پیش آمده دوباره تلاش کنید', 'خطا');
          }
        }
      },
    )
  }
  
  updateData(){
    this.requestData = {
      FirstName: "",
      LastName: "",
      UserName: "",
      Birthday: null,
      image: null,
    }
    this.selectedImage = undefined;
    this.selectedFile = null;
  }
  
  onSubmit() {
    if (this.profilePicture) {
      const formData = new FormData();
      formData.append('profilePicture', this.profilePicture);
    }
  }
}

interface ProfileResult {
  success: boolean,
  code: number,
  message: string,

  firstName: string,
  lastName: string,
  userName: string,
  birthday: string,
  email: string,
  imagePath: string,
  
}
