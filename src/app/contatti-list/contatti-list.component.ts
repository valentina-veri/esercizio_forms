import { Component } from '@angular/core';
import { ContattiService } from '../contatti.service';
import { Contatto } from '../modello/model';

@Component({
  selector: 'app-contatti-list',
  templateUrl: './contatti-list.component.html',
  styleUrl: './contatti-list.component.css'
})
export class ContattiListComponent {

  constructor(private cs: ContattiService) { }

  contatti: Contatto[] = []

  ngOnInit(): void {
    this.cs.getContatto().subscribe(dati => this.contatti = dati)
  }
  
}
