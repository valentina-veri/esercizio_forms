import { Component } from '@angular/core';
import { ContattiService } from '../contatti.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contatto, ContattoDTO, IndirizzoDTO } from '../modello/model';

@Component({
  selector: 'app-contatto-add',
  templateUrl: './contatto-add.component.html',
  styleUrl: './contatto-add.component.css'
})
export class ContattoAddComponent {

  contatto!: FormGroup

  constructor(private cs: ContattiService, private router: Router, private route:ActivatedRoute) { }

  contatti: Contatto[] = []

  ngOnInit() {
    this.contatto = new FormGroup({

      tipologia: new FormControl("", Validators.required),
      nome: new FormControl(""),
      cognome: new FormControl(""),
      RagioneSociale: new FormControl(""),
      indirizzo: new FormGroup({
        via: new FormControl("", Validators.required),
        citta: new FormControl("", Validators.required),
        provincia: new FormControl("", Validators.required),
        CAP: new FormControl<number | null>(null, Validators.required),
        nazione: new FormControl("", Validators.required)
      }),
      email: new FormControl("", Validators.required),
      prefisso: new FormControl("", Validators.required),
      telefono: new FormControl<number | null>(null, Validators.required),
      compleanno: new FormControl("")
    })

    this.cs.getContatto().subscribe({
      next: contatti => {
        this.contatti = contatti
      },
      error: error => {
        console.error("Errore:", error)
        throw error
      }
    })
  }

  aggiungiContatto() {

    this.cs.addContatto(this.contatto.value).subscribe({
      next:(dati) =>{
        console.log(dati)
        this.router.navigate(['/contatti-list'])
      },
      error:(error)=>{
        alert('attenzione qualcosa è andato storto')
      }
    })
    
  }

}


