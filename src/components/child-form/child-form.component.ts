import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-child-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './child-form.component.html',
  styleUrl: './child-form.component.css'
})

export class ChildFormComponent implements OnInit {
  formulario: FormGroup;
  @Output() formEnviado = new EventEmitter<any>();


  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      username: ['', Validators.minLength(8)],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  enviarFormulario() {
    if (this.formulario.valid) {
      this.formEnviado.emit(this.formulario.value);
    }else{
      console.log('Formulario no válido');

    }
  }
}

