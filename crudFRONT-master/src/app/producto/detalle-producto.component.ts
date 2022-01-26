import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../models/producto';
import { TokenService } from '../service/token.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  producto: Producto = null;
  headers = null;

  constructor(
    private tokenService: TokenService,
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Bearer " + tokenService.getToken()
    });
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params.id;

    this.productoService.detail(id, this.headers).subscribe(
      data => {
        this.producto = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/lista']);
  }

}

