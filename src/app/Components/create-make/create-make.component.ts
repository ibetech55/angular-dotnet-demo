import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MakeService } from '../../Services/make.service';
import { ICreateMake } from '../../Interfaces/Make';

@Component({
  selector: 'app-create-make',
  templateUrl: './create-make.component.html',
  styleUrl: './create-make.component.css'
})

export class CreateMakeComponent {
  public form = new FormGroup({
    makeName: new FormControl("", [Validators.required]),
    origin: new FormControl("", [Validators.required]),
    yearFounded: new FormControl("", [Validators.required]),
    company: new FormControl("", [Validators.required]),
    makeAbbreviation: new FormControl("", [Validators.required]),
  })

  /**
   *
   */
  constructor(private _MakeService:MakeService) {
    
    
  }

  CreateMake(){
    const requestBody:ICreateMake = {
      makeName: this.form.value.makeName as string,
      origin: this.form.value.origin as string,
      makeLogo: '',
      yearFounded: Number(this.form.value.yearFounded),
      company: this.form.value.company as string,
      makeAbbreviation: this.form.value.makeAbbreviation as string
    }
console.log(this.form)
    if(this.form.valid){
      this._MakeService.CreateMake(requestBody).subscribe({
        next:(data)=>{
          if(data) alert("Data saved")
        }
      })
    } else {
      alert("Complete Form")
    }

  }
}
