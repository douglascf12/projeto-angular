import { Component, OnInit } from '@angular/core';
import { Aluno } from '../models/Aluno';


@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos';
  public alunoSelecionado!: Aluno;
  public alunoNull!: Aluno;

  public alunos = [
    { id: 1, nome: 'Marta', sobrenome: 'Kent', telefone: 11110000 },
    { id: 2, nome: 'Paula', sobrenome: 'Isabela', telefone: 22220000 },
    { id: 3, nome: 'Laura', sobrenome: 'Antonia', telefone: 33330000 },
    { id: 4, nome: 'Luiza', sobrenome: 'Maria', telefone: 44440000 },
    { id: 5, nome: 'Lucas', sobrenome: 'Machado', telefone: 55550000 },
    { id: 6, nome: 'Pedro', sobrenome: 'Alvares', telefone: 66660000 },
    { id: 7, nome: 'Paulo', sobrenome: 'Jose', telefone: 77770000 },
  ];

  alunoSelect(aluno: Aluno) {
    this.alunoSelecionado = aluno;
  }

  voltar() {
    this.alunoSelecionado = this.alunoNull;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
