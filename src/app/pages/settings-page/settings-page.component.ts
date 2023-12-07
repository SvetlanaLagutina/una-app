import { Component } from '@angular/core';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent {
    
    initialValue = {
        color: '#5e4b5e', 
        opacity: 0.1,
    }
}
