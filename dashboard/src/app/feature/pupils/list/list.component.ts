import { AppConsts } from './../../../shared/models/AppConst';
import { Component, OnInit, AfterContentInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { generate } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterContentInit {
  Logged = false;
  Alunos = [];
  AddNewAluno = false;
  AlunosForm: FormGroup;
  IDkey = '';
  constructor(
    private fb: FormBuilder,
  ) {
    this.Alunos = [];

  }
  ngOnInit() {
    this.alunos();
    this.buildForm();
  }
  ngAfterContentInit() {
    if (AppConsts.logged) {
    this.Logged = true;
  }
  }
  buildForm() {
      this.AlunosForm = this.fb.group({
        formName: new FormControl('', Validators.required),
        formIdade: new FormControl('', Validators.required),
        formSexo: new FormControl('', Validators.required),
        formAnoEscolar: new FormControl('', Validators.required)
      });
  }
  alunos() {
    const aluno0 = {nome: 'Vinicius', idade: '25 Anos', sexo: 'Masculino', AnoEscola: 'Terceiro Ano', id: 1};
    const aluno1 = {nome: 'Maria', idade: '25 Anos', sexo: 'Feminino', AnoEscola: 'Terceiro Ano', id: 2 };
    const aluno2 = {nome: 'Joao', idade: '24 Anos', sexo: 'Masculino', AnoEscola: 'Segundo Ano', id: 3 };
    const aluno3 = {nome: 'Victor', idade: '23 Anos', sexo: 'Masculino', AnoEscola: 'Primeiro Ano', id: 4 };
    this.Alunos = [aluno0, aluno1, aluno2, aluno3];
  }

  delet(value) {
   const result = this.Alunos.filter( x => x.id === value);
   for (const obj of result ) {
      const index =  this.Alunos.indexOf(obj);
      this.Alunos.splice(index, 1);
   }
  }
  NewAluno(value) {
      if (value) {
      this.IDkey = value.id;
      this.AddNewAluno = true;
      const x = {
        formName: value.nome,
        formIdade: value.idade,
        formSexo: value.sexo,
        formAnoEscolar: value.AnoEscola,
        id: value.id
      };
      Object.entries(x).forEach(obj => {
        if (this.AlunosForm.get(obj[0])) {
            this.AlunosForm.get(obj[0]).setValue(obj[1]);
        }
    });
  } else {
    this.AddNewAluno = true;
    this.buildForm();
  }
  }
  ConfirmNewAluno() {
    console.log(this.IDkey);
    if (this.IDkey) {
      const value = this.IDkey;
      const result = this.Alunos.filter( x => x.id === value);
      for (const obj of result ) {
         const index =  this.Alunos.indexOf(obj);
         this.Alunos.splice(index, 1);
      }
    }
    const val = this.AlunosForm.value;
    this.Alunos.push({
        nome: val.formName, idade: val.formIdade, sexo: val.formSexo,
        AnoEscola: val.formAnoEscolar, id: Math.random().toString(36).substr(2, 9)
      });
    this.AddNewAluno = false;
  }
}
