import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { Role } from '../../models/role.enum';
import { ROLE_OPTIONS } from '../../models/role-options';
import { Cities } from '../../models/cities';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  cities: SelectItem[] = Cities;

  filteredCities: SelectItem[];

  roleOptions: SelectItem<Role>[] = ROLE_OPTIONS;
  myForm: FormGroup;

  ngOnInit() {

    this.cities = Cities;
    
    this.myForm = new FormGroup({
      role: new FormControl<string>(Role.Administrator, Validators.required),
      lastName: new FormControl<string>('', Validators.required),
      firstName: new FormControl<string>('', Validators.required),
      middleName: new FormControl<string>('',),
  
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      phone: new FormControl<string>('', Validators.required),
      city: new FormControl<object | null>(null),
      address: new FormControl<string>('',),
  
      position: new FormControl<string>('', Validators.required),
      department: new FormControl<string>('',),
      supervisor: new FormControl<string>('',),
    });
  }



  filterCity(event: AutoCompleteCompleteEvent) {
    let query = event.query;

    this.filteredCities = this.cities.filter(c => c.label!.toLowerCase().indexOf(query.toLowerCase()) >= 0);
  }

  

  submit(): void {
    console.log(this.myForm.value);
  }
}
