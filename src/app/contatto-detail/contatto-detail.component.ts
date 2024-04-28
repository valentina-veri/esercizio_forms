import { Component } from '@angular/core';
import { ContattiService } from '../contatti.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contatto} from '../modello/model';

@Component({
  selector: 'app-contatto-detail',
  templateUrl: './contatto-detail.component.html',
  styleUrl: './contatto-detail.component.css'
})
export class ContattoDetailComponent {

  contatto!: Contatto

  constructor(private cs: ContattiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get("id")!)

    this.cs.getContattoById(id).subscribe(dati => this.contatto = dati)
  }

  eliminaContatto() {
    this.cs.deleteContatto(this.contatto!.id).subscribe(dati => this.router.navigate(['/contatti-list']))
  }
}

