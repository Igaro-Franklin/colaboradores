import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent{
  novoLembrete: String = '';
  lembrentes: String[] = [];

  constructor(){
    const alertasSalvos = localStorage.getItem('meusLembretes');
    if(alertasSalvos){
      this.lembrentes = JSON.parse(alertasSalvos);
    }
  }
  
  adicionarLembrete(){
    if(this.novoLembrete.trim() !== ''){
      this.lembrentes.push(this.novoLembrete);
      localStorage.setItem('meusLembretes', JSON.stringify(this.lembrentes));
      this.novoLembrete = '';
    }
  }

}
