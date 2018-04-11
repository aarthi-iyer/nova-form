import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { User } from '../../user';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userList: User[]=[];
addReport(form)
{
  var user: User;
  user=form.value;
  this.userList.push(user);
}
  siteFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  addressFormControl = new FormControl('', [
    Validators.required,
   
  ]);
  addressFormControl1 = new FormControl('', [
    Validators.required,
   
  ]);
  cityFormControl = new FormControl('', [
    Validators.required,
   
  ]);
  stateFormControl = new FormControl('', [
    Validators.required,
   
  ]);
  postalFormControl = new FormControl('', [
    Validators.required,
   
  ]);
  firstFormControl = new FormControl('', [
    Validators.required,
   
  ]);
  lastFormControl = new FormControl('', [
    Validators.required,
   
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  makeFormControl = new FormControl('', [
    Validators.required,
    
  ]);
  matcher = new MyErrorStateMatcher();

  favoriteseason: string;
  site_name: string;
  site_address1: string;
  site_addressLine2: string;
  city: string;
  state: string;
  postal: string;
  firstname: string;
  lastname:string;
  email:string;
  model:string;
  seasons = [
    'REFRIGERATOR',
    'AMBIENT TEMPERATURE'
    
  ];

 states = [
    {value: 'AL', viewValue: 'Alabama'},
    {value: 'AK', viewValue: 'Alaska'},
    {value:'AZ',viewValue:'Arizona'},
  {value:'AR',viewValue:'Arkansas'},
   {value:'CA',viewValue:'California'},
  { value:'CO',viewValue:'Colorado'},
  {  value:'CT',viewValue:'Connecticut'},
  {  value:'DE',viewValue:'Delaware'},
  {  value:'DC',viewValue:'District Of Columbia'   },
  {  value:'FL',viewValue:'Florida'},
  {  value:'GA',viewValue:'Georgia'},
  {  value:'HI',viewValue:'Hawaii' },
  {  value:'ID',viewValue:'Idaho' },
  {  value:'IL',viewValue:'Illinois' },
  {  value:'IN',viewValue:'Indiana' },
  {  value:'IA',viewValue:'Iowa'},
  {  value:'KS',viewValue:'Kansas' },
  {  value:'KY',viewValue:'Kentucky'},
  {  value:'LA',viewValue:'Louisiana' },
  {  value:'ME',viewValue:'Maine'},
  {  value:'MD',viewValue:'Maryland' },
  {  value:'MA',viewValue:'Massachusetts' },
  {  value:'MI',viewValue:'Michigan'},
  {  value:'MN',viewValue:'Minnesota'},
  {  value:'MS',viewValue:'Mississippi'},
  {  value:'MO',viewValue:'Missouri'},
  {  value:'MT',viewValue:'Montana'},
  {  value:'NE',viewValue:'Nebraska'},
  {  value:'NV',viewValue:'Nevada'},
  {  value:'NH',viewValue:'New Hampshire' },
  {  value:'NJ',viewValue:'New Jersey'},
  {  value:'NM',viewValue:'New Mexico' },
  {  value:'NY',viewValue:'New York'},
  {  value:'NC',viewValue:'North Carolina'},
  {  value:'ND',viewValue:'North Dakota' },
  {  value:'OH',viewValue:'Ohio'},
  {  value:'OK',viewValue:'Oklahoma'},
  {  value:'OR',viewValue:'Oregon'},
  {  value:'PA',viewValue:'Pennsylvania' },
  {  value:'RI',viewValue:'Rhode Island'},
  {  value:'SC',viewValue:'South Carolina'},
  {  value:'SD',viewValue:'South Dakota'},
  {  value:'TN',viewValue:'Tennessee' },
  {  value:'TX',viewValue:'Texas' },
  {  value:'UT',viewValue:'Utah'},
  {  value:'VT',viewValue:'Vermont'},
  {  value:'VA',viewValue:'Virginia'},
  {  value:'WA',viewValue:'Washington'},
  {  value:'WV',viewValue:'West Virginia'},
  {  value:'WI',viewValue:'Wisconsin'},
  {  value:'WY',viewValue:'Wyomin'   }
  ];
  constructor() { }

  ngOnInit() {
  }

}
