import { Component } from '@angular/core';
import { MakeService } from '../../Services/make.service';
import { IMake } from '../../Interfaces/Make';

@Component({
  selector: 'app-view-makes',
  templateUrl: './view-makes.component.html',
  styleUrl: './view-makes.component.css'
})
export class ViewMakesComponent {
  /**
   *
   */
  public makes:IMake[] = [];
  constructor(private _MakeService:MakeService) {
    this.GetMakes()
  }

  public GetMakes(){
    this._MakeService.GetMakes()
        .subscribe({
          next:(data)=>{
            this.makes = data
          }
        })
  }
}
