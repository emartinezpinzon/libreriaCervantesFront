import { Component, OnInit } from '@angular/core';
import { Libro } from '@libro/shared/model/libro';
import { ListarLibrosService } from '@libro/shared/service/listar-libros.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-libros',
  templateUrl: './listar-libros.component.html',
  styleUrls: ['./listar-libros.component.css']
})

export class ListarLibrosComponent implements OnInit {
  public listaLibros: Observable<Libro[]>;

  constructor(protected libroService: ListarLibrosService) { }

  ngOnInit() {
    this.listaLibros = this.libroService.consultar();
  }

}
