import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { Role } from '../../models/role.enum';
import { ROLE_OPTIONS } from '../../models/role-options';
import { CityService } from 'src/app/services/cityservice';

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
  cities: any[] | undefined;

  filteredCities: any[] | undefined;

  roleOptions: SelectItem<Role>[] = ROLE_OPTIONS;
  myForm: FormGroup;


  constructor(private cityService: CityService){
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
      boss: new FormControl<string>('',),
    });
  }

  ngOnInit() {
    this.cityService.getCities().then((cities) => {
        this.cities = cities;
    });
  }
  
  filterCity(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.cities as any[]).length; i++) {
        let city = (this.cities as any[])[i];
        if (city.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
            filtered.push(city);
        }
    }

    this.filteredCities = filtered;
  }

  submit(): void {
    console.log(this.myForm.value);
  }
}
