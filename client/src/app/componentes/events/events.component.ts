import { Component, OnInit, ElementRef } from '@angular/core';
import { ParticipanteService } from '../../services/participante.service';
import { Participante } from '../../services/participante.model';
import { Router } from '@angular/router';
import { CiudadService } from '../../services/ciudad.service';
import { Ciudad } from '../../services/ciudad.model';
import { CargoService } from '../../services/cargo.service';
import { Cargo } from '../../services/cargo.model';
import { passwordMatchValidator } from '../../shared/password-match.directives';
import { EmailValidator, FormControl, Validators } from '@angular/forms';

interface ContainerElement extends HTMLElement {
  classList : DOMTokenList;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})

export class EventsComponent implements OnInit{
  ciudades : Ciudad[] = []
  cargos : Cargo[] = []
  participantes : Participante[] = []
  participante : Participante = {
    NomParticipante : '',
    ApeMaterno: '',
    ApePaterno: '',
    Edad: 0,
    Genero: '',
    Telefono: '',
    Correo: '',
    Ciudad: '',
    Cargo: '',
    Contrasenia: ''
  }
  email : string = ''
  passwd : string = ''
  pmv = passwordMatchValidator

  vEmail : FormControl = new FormControl('', [Validators.required, Validators.email]);
  vPasswd : FormControl = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)])

  constructor(
    private ps : ParticipanteService,
    private cs : CiudadService,
    private cas : CargoService,
    private router : Router,
    private er : ElementRef    
  ) { }

  ngOnInit(): void {
    this.getCities();
    this.getCargos();
  }

  ngAfterViewInit() {
    const signUpButton = this.er.nativeElement.querySelector('#signUp');
    const signInButton = this.er.nativeElement.querySelector('#signIn');
    const container = this.er.nativeElement.querySelector('.container') as ContainerElement;

    signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });
  }

  saveParticipante() {
    delete this.participante.Eventos;

    this.ps.saveParticipante(this.participante).subscribe(
      res => {
        this.router.navigate(['/login']);
      },
      err => console.log(err)
    )
  }

  getCities() {
    this.cs.getCiudades().subscribe(ciudades => {
      this.ciudades = ciudades;
    })
  }

  getCargos() {
    this.cas.getCargos().subscribe(cargos => {
      this.cargos = cargos;
    })
  }

  login(correo : string) {
    this.vEmail.setValue(correo);

    if (this.vEmail.valid){
      if (correo != "oscar@gmail.com") {
        this.ps.getUsuario(correo).subscribe(resp => {
          sessionStorage.setItem('NomParticipante', resp.NomParticipante);
          sessionStorage.setItem('ApeMaterno', resp.ApeMaterno);
          sessionStorage.setItem('ApePaterno', resp.ApePaterno);
          sessionStorage.setItem('Edad', resp.Edad.toString());
          sessionStorage.setItem('Genero', resp.Genero);
          sessionStorage.setItem('Telefono', resp.Telefono);
          sessionStorage.setItem('Correo', resp.Correo);
          sessionStorage.setItem('Ciudad', resp.Ciudad);
          sessionStorage.setItem('Cargo', resp.Cargo);
          sessionStorage.setItem('Contrasenia', resp.Contrasenia);
          this.router.navigate(['/index']);
        })
      } else {
        this.ps.getUsuario(correo).subscribe(resp => {
          sessionStorage.setItem('NomParticipante', resp.NomParticipante);
          sessionStorage.setItem('ApeMaterno', resp.ApeMaterno);
          sessionStorage.setItem('ApePaterno', resp.ApePaterno);
          sessionStorage.setItem('Edad', resp.Edad.toString());
          sessionStorage.setItem('Genero', resp.Genero);
          sessionStorage.setItem('Telefono', resp.Telefono);
          sessionStorage.setItem('Correo', resp.Correo);
          sessionStorage.setItem('Ciudad', resp.Ciudad);
          sessionStorage.setItem('Cargo', resp.Cargo);
          sessionStorage.setItem('Contrasenia', resp.Contrasenia);
          this.router.navigate(['/eventos']);
        })
      }
    } else {

    }

  }
}
