import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Perfil } from '../model/cadastrar';
import { PerfilsService } from '../services/perfils.service';
import { TemplateService } from '../services/template.service';

@Component({
  selector: 'app-perfils-atualizar',
  templateUrl: './perfils-atualizar.page.html',
  styleUrls: ['./perfils-atualizar.page.scss'],
})
export class PerfilsAtualizarPage implements OnInit {

  formGroup : FormGroup;
  perfil : Perfil = new Perfil();

  constructor(private perfilServ : PerfilsService,
    private route: ActivatedRoute,
    private navCtrl : NavController,
    private formBuilder : FormBuilder,
    private template : TemplateService) {
      this.iniciarForm();
    }

  ngOnInit() {

    this.route.paramMap.subscribe(url=>{
      let id = url.get('id');
      
      this.perfilServ.buscaPorId(id).subscribe(response=>{
        this.perfil = response;
        this.iniciarForm();
      })

    })

  }

  atualizar() {
    this.template.loading.then(load => {

      load.present();

      this.perfilServ.atualizar(this.formGroup.value).subscribe(response => {
        console.log("OK");
        load.dismiss();
        this.template.myAlert(response);
      }, erro => {
        console.log("Erro");
        load.dismiss();
        this.template.myAlert("Erro ao Cadastrar");
      })

    })
  }

  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      id: [this.perfil.id],
      nome: [this.perfil.nome],
      idade: [this.perfil.idade],
      cpf: [this.perfil.cpf],
      endereco: [this.perfil.endereco],
      numero: [this.perfil.numero],
      cidade: [this.perfil.cidade],
      estado: [this.perfil.estado],
      email: [this.perfil.email],
      telefone: [this.perfil.telefone]
    })
  }

}