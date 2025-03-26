

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![AI](https://img.shields.io/badge/AI-Deep%20Learning-blue?style=for-the-badge)
![Scrum](https://img.shields.io/badge/Scrum-Agile-blue?style=for-the-badge)

# Integración de Google Maps en Angular 19

Este proyecto te enseña a cómo integrar Google Maps en un proyecto Angular 19 y usar la API de Direcciones para trazar una ruta.

---

## Requisitos Previos
- **Node.js** y **npm** instalados.
- **Angular CLI** instalado: `npm install -g @angular/cli`
- Una clave de **API de Google Cloud** válida con acceso a las siguientes APIs:
  - Maps JavaScript API
  - Directions API

---

## Paso 1: Crear un Proyecto Angular

1. Crea un nuevo proyecto Angular:
   ```bash
   ng new angular-google-maps
   cd angular-google-maps
   ```

2. Instala el módulo necesario de Google Maps:
   ```bash
   npm install @angular/google-maps
   ```

---

## Paso 2: Configurar la Clave de API de Google Maps

1. Ve a [Google Cloud Console](https://console.cloud.google.com/).
2. Crea un nuevo proyecto o usa uno existente.
3. Habilita las siguientes APIs:
   - **Maps JavaScript API**
   - **Directions API**
4. Genera una clave de API en **Credenciales > Crear Credenciales > Clave de API**.
5. Restringe la clave de API por razones de seguridad.

6. Agrega la clave de API al archivo `index.html`:
   ```html
   <script src="https://maps.googleapis.com/maps/api/js?key=TU_CLAVE_DE_API&libraries=places"></script>
   ```
   Reemplaza `TU_CLAVE_DE_API` con tu clave de API.

---

## Paso 3: Crear un Componente de Mapa

1. Genera un nuevo componente para el mapa:
   ```bash
   ng generate component map
   ```

2. Actualiza `map.component.html`:
   ```html
   <div class="map-container">
     <google-map [center]="center" [zoom]="zoom" [options]="options"></google-map>
   </div>
   ```

3. Configura el mapa en `map.component.ts`:
   ```typescript
   import { Component, OnInit } from '@angular/core';

   @Component({
     selector: 'app-map',
     templateUrl: './map.component.html',
     styleUrls: ['./map.component.css']
   })
   export class MapComponent implements OnInit {
     center: google.maps.LatLngLiteral = { lat: 19.432608, lng: -99.133209 }; // CDMX
     zoom = 14;
     options: google.maps.MapOptions = {
       zoomControl: true,
       scrollwheel: true,
       disableDoubleClickZoom: false,
       maxZoom: 20,
       minZoom: 5,
     };

     constructor() {}

     ngOnInit(): void {}
   }
   ```

4. Agrega estilos en `map.component.css`:
   ```css
   .map-container {
     height: 100%;
     width: 100%;
   }

   google-map {
     width: 100%;
     height: 100%;
   }
   ```

5. Registra el componente en `app.module.ts`:
   ```typescript
   import { GoogleMapsModule } from '@angular/google-maps';

   @NgModule({
     declarations: [
       AppComponent,
       MapComponent,
     ],
     imports: [
       BrowserModule,
       GoogleMapsModule
     ],
     providers: [],
     bootstrap: [AppComponent]
   })
   export class AppModule { }
   ```

6. Muestra el mapa en `app.component.html`:
   ```html
   <app-map></app-map>
   ```

---

## Paso 4: Agregar Funcionalidad de Rutas

1. Genera un servicio para las rutas:
   ```bash
   ng generate service map
   ```

2. Implementa la API de Direcciones en `map.service.ts`:
   ```typescript
   import { Injectable } from '@angular/core';

   @Injectable({
     providedIn: 'root'
   })
   export class MapService {
     directionsService: google.maps.DirectionsService;
     directionsRenderer: google.maps.DirectionsRenderer;

     constructor() {
       this.directionsService = new google.maps.DirectionsService();
       this.directionsRenderer = new google.maps.DirectionsRenderer();
     }

     calculateRoute(map: google.maps.Map, origin: string, destination: string): void {
       const request: google.maps.DirectionsRequest = {
         origin: origin,
         destination: destination,
         travelMode: google.maps.TravelMode.DRIVING,
       };

       this.directionsService.route(request, (result, status) => {
         if (status === google.maps.DirectionsStatus.OK && result) {
           this.directionsRenderer.setMap(map);
           this.directionsRenderer.setDirections(result);
         } else {
           console.error('Error al calcular la ruta:', status);
         }
       });
     }
   }
   ```

3. Actualiza `map.component.ts` para usar el servicio:
   ```typescript
   import { Component, OnInit, ViewChild } from '@angular/core';
   import { MapService } from '../map.service';

   @Component({
     selector: 'app-map',
     templateUrl: './map.component.html',
     styleUrls: ['./map.component.css']
   })
   export class MapComponent implements OnInit {
     center: google.maps.LatLngLiteral = { lat: 19.432608, lng: -99.133209 }; // CDMX
     zoom = 14;

     @ViewChild('googleMap') googleMap!: google.maps.Map;

     constructor(private mapService: MapService) {}

     ngOnInit(): void {}

     traceRoute(): void {
       const origin = 'Zócalo, Ciudad de México';
       const destination = 'Auditorio Nacional, Ciudad de México';
       this.mapService.calculateRoute(this.googleMap, origin, destination);
     }
   }
   ```

4. Agrega un botón para calcular la ruta en `map.component.html`:
   ```html
   <button (click)="traceRoute()">Trazar Ruta</button>
   <google-map [center]="center" [zoom]="zoom" [options]="options"></google-map>
   ```

---

## Paso 5: Ejecutar la Aplicación

1. Inicia el servidor de desarrollo:
   ```bash
   ng serve
   ```
2. Abre la aplicación en tu navegador en [http://localhost:4200](http://localhost:4200).
3. Haz clic en el botón **"Trazar Ruta"** para ver la ruta trazada en el mapa.

---

## Notas
- Modifica `travelMode` en el `MapService` para diferentes modos de transporte (por ejemplo, `google.maps.TravelMode.WALKING`).
- Personaliza las opciones del mapa y los elementos de la interfaz según tus necesidades.


## APIs recomendadas para integrar en Angular 19

**1. APIs de autenticación y seguridad**  
- **Google Identity**: Para login con OAuth 2.0 y gestión de usuarios.  
- **Firebase Auth**: Autenticación con correo/contraseña, redes sociales y MFA.  

**2. APIs de datos y contenido**  
- **NASA API**: Acceso a imágenes satelitales, datos astronómicos y meteorológicos.  
- **The MovieDB**: Catálogo de películas/series con metadatos e imágenes.  
- **PokéAPI**: Base de datos completa de Pokémon (ideal para proyectos didácticos).  

**3. APIs para comercio electrónico**  
- **Platzi Fake Store**: Simula operaciones CRUD de un e-commerce (productos, usuarios, categorías).  
- **Stripe API**: Procesamiento de pagos seguros.  

**4. APIs de utilidad**  
- **Unsplash**: Banco de imágenes libres de derechos (600k+ fotos).  
- **Random User**: Generación de perfiles ficticios para prototipos.  
- **Frankfurter**: Tipos de cambio de divisas en tiempo real.  

**5. APIs geoespaciales**  
- **Google Maps/Leaflet**: Mapas interactivos y geolocalización.  
- **OpenWeatherMap**: Datos meteorológicos con pronósticos por ubicación.  

**6. Nuevas capacidades en Angular 19**  
- **Resource API**: Manejo reactivo de datos asíncronos con Signals (reduce código complejo).  
- **HttpClient optimizado**: Soporte mejorado para operaciones CRUD y manejo de errores.  

**Implementación básica con HttpClient**  
```typescript
// Ejemplo: Consumo de API de clima
@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=TU_API_KEY`;
    return this.http.get(url);
  }
}
```

**Consideraciones técnicas**  
- Usar **interceptores** para manejar headers (ej: JWT).  
- Implementar **guards** para proteger rutas con autenticación.  
- Explotar **RxJS** para gestión reactiva de datos.
