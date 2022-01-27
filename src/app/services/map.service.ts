import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import * as L from 'leaflet';
import { Localizacao } from './modelos.models';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MapService {
  urlAPIJSON_Server:string ='http://localhost:3000/pessoas'; //para Json-server
  headers:any= { 'content-type': 'application/json'}
  constructor(private http:HttpClient) { }

  marcarLocalizacao(map: L.Map): void{

    this.http.get(this.urlAPIJSON_Server).subscribe((resultado:any)=>{

      resultado.forEach((item:any) => {
         const posicao=L.marker([item.latitude,item.longitude])
               posicao.bindPopup(`<p><strong>${item.nome}</strong></p>`)
               .openPopup().addTo(map);
      });
    })
  }

   pegarLocalizacoes():Observable<any>{
    return this.http.get(this.urlAPIJSON_Server,{'headers':this.headers})
   }
  inserirLocalizacao(localizacao: Localizacao):Observable<any>
  {
    const body=JSON.stringify(localizacao);
    return this.http.post(this.urlAPIJSON_Server, body,{'headers':this.headers})
  }
}
