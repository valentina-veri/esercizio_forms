import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contatto, ContattoDTO} from './modello/model';

@Injectable({
  providedIn: 'root'
})
export class ContattiService {

  constructor(private http: HttpClient) { }

  getContatto(): Observable<Contatto[]> {
    return this.http.get<Contatto[]>("http://localhost:3000/rubrica")
  }
  getContattoById(id: number): Observable<Contatto> {
    return this.http.get<Contatto>("http://localhost:3000/rubrica/" + id)
  }
  addContatto(nuovoContatto: Contatto): Observable<Contatto> {
    return this.http.post<Contatto>("http://localhost:3000/rubrica", nuovoContatto)
  }
  deleteContatto(id: number): Observable<any> {
    return this.http.delete("http://localhost:3000/rubrica/" + id)
  }

  modificaContatto(contatto: Contatto, id: number): Observable<Contatto> {
    return this.http.patch<Contatto>("http://localhost:3000/rubrica/" + id, contatto)
  }

}
