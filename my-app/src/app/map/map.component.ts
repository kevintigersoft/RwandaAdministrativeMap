import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  lat = 51.505; // Replace with your desired latitude
  lng = -0.09; // Replace with your desired longitude
  zoom = 15; 
}
