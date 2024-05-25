import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import { CitiesService } from '../../service/cities.service';
import { Deparments } from '../../models/departments.interface';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { Cities } from '../../models/cities.interface';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [
    MatDividerModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule,
  ],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css'
})
export class DeliveryComponent implements OnInit {

  deparments: Deparments[] = [];
  cities: Cities[] = [];

  formDirectios:FormGroup = this.fb.group({
    departamentos: [this.deparments, [Validators.required,]],
    cities:[this.cities, [Validators.required]],
    direccion:['', [Validators.required]]

  });

  constructor(
    private CitiesService:CitiesService,
    private fb:FormBuilder
  ){}

  ngOnInit(): void {
    this.CitiesService.getDeparments().subscribe(
      deparments => {
        this.deparments = deparments
      }
    )
  }

  addDiretion(){
    if(this.formDirectios.invalid){
      return
    }

    console.log(this.formDirectios.value)

  }

  getCities(id:number){
  this.CitiesService.fethCities(id).subscribe(
      cities => {
        this.cities = cities
        console.log(cities)
      }

    )
  }



}
