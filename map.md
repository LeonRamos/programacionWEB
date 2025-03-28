## Implementación de Leaflet con OpenStreetMap en Angular 19

### **1. Instalación de dependencias**
```bash
npm install leaflet
```

### **2. Configuración del módulo principal**
```typescript
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### **3. Componente de mapa**
```typescript
// app.component.ts
import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  map!: L.Map;
  options: L.MapOptions = {
    layers: this.getLayers(),
    zoom: 12,
    center: L.latLng(43.530147, 16.488932)
  };

  ngAfterViewInit() {
    this.map = L.map('map').setView([43.530147, 16.488932], 12);
    this.getLayers().forEach(layer => layer.addTo(this.map));
  }

  getLayers(): L.Layer[] {
    return [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      })
    ];
  }
}
```

### **4. Plantilla HTML**
```html


```

### **5. Estilos CSS**
```css
/* app.component.css */
@import "~leaflet/dist/leaflet.css";

#map {
  height: 600px;
  width: 100%;
}
```

---

## **Integración de API (Ejemplo con datos ficticios)**
### **6. Servicio para obtener datos**
```typescript
// sensor.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  private apiUrl = 'http://localhost:3000/sensors';

  constructor(private http: HttpClient) {}

  getSensores() {
    return this.http.get(this.apiUrl);
  }
}
```

### **7. Modificación del componente**
```typescript
// app.component.ts (actualizado)
import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { SensorService } from './sensor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  map!: L.Map;
  options: L.MapOptions = {
    layers: this.getLayers(),
    zoom: 12,
    center: L.latLng(43.530147, 16.488932)
  };

  constructor(private sensorService: SensorService) {}

  ngAfterViewInit() {
    this.map = L.map('map').setView([43.530147, 16.488932], 12);
    this.getLayers().forEach(layer => layer.addTo(this.map));
    this.cargarSensores();
  }

  cargarSensores() {
    this.sensorService.getSensores().subscribe((datos: any) => {
      datos.sensors.forEach((sensor: any) => {
        const marker = L.marker([sensor.Lat, sensor.Long]);
        marker.addTo(this.map).bindPopup(`Sensor ${sensor.Cod}: ${sensor.Volt}V`);
      });
    });
  }

  getLayers(): L.Layer[] {
    return [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      })
    ];
  }
}
```

---

## **Consideraciones clave**
1. **Atribución obligatoria**: Incluir siempre el texto de atribución de OpenStreetMap en la capa de tiles[1][2].
2. **Orden de coordenadas**: En Leaflet, las coordenadas se especifican como `[latitud, longitud]`[2][7].
3. **Estilos CSS**: Importar los estilos de Leaflet y definir dimensiones para el contenedor del mapa[2][4].
4. **API de datos**: Reemplazar la URL ficticia por una API real que devuelva datos en formato JSON con coordenadas[2][7].

Para probar el proyecto, ejecutar:
```bash
ng serve
```
Y acceder a `http://localhost:4200` en el navegador.
