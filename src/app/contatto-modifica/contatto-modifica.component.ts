import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContattiService } from '../contatti.service';
import { Contatto, ContattoDTO, Indirizzo, IndirizzoDTO } from '../modello/model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contatto-modifica',
  templateUrl: './contatto-modifica.component.html',
  styleUrl: './contatto-modifica.component.css'
})
export class ContattoModificaComponent {

  contatto!: FormGroup

  contattoModificato!: Contatto

  constructor(private cs: ContattiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.contatto = new FormGroup({
      tipologia: new FormControl(""),
      nome: new FormControl(""),
      cognome: new FormControl(""),
      RagioneSociale: new FormControl(""),
      indirizzo: new FormGroup({
        via: new FormControl(""),
        citta: new FormControl(""),
        provincia: new FormControl(""),
        CAP: new FormControl<number | null>(null),
        nazione: new FormControl("")
      }),
      email: new FormControl(""),
      prefisso: new FormControl(""),
      telefono: new FormControl<number | null>(null),
      compleanno: new FormControl("")
    })

    const id = parseInt(this.route.snapshot.paramMap.get("id")!)
    this.cs.getContattoById(id).subscribe(dati =>
      this.contatto.patchValue(dati))

  }

  modificaContatto() {

    this.cs.modificaContatto(this.contattoModificato, this.contattoModificato.id).subscribe({
      next: (dati) => {
        console.log(dati)
        this.router.navigate(['/contatti-list'])
      },
      error: error => {
        console.error("Errore!!")
        throw error
      }
    })
  }

}
