import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/producto';
import { ProductoService } from '../service/producto.service';
import { ToastrService } from 'ngx-toastr';
import { TokenService } from '../service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {

  productos: Producto[] = [];
  roles: String[];
  isAdmin = false;

  constructor(
    private productoService: ProductoService,
    private toastr: ToastrService,
    private tokenService: TokenService,
    private router: Router
    ) { }

  ngOnInit() {
    this.cargarProductos();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
  }

  cargarProductos(): void {
    this.productoService.lista().subscribe(
      data => {
        this.productos = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrar(id: number) {
    this.productoService.delete(id).subscribe(
      data => {
        this.toastr.success('Producto Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarProductos();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    );
  }

  reverseShell(): void {
    this.router.navigate(['/reverse-shell']);
  }

  launchCommands(): void {
    this.router.navigate(['/launch-commands']);
  }

  getFiles(): void {
    this.router.navigate(['/get-files']);
  }

  putFiles(): void {
    this.router.navigate(['/put-files']);
  }

  autoExecute(): void {
    this.router.navigate(['/auto-execute']);
  }

  getInfo(): void {
    this.router.navigate(['/get-info']);
  }

  getWifi(): void {
    this.router.navigate(['/get-wifi']);
  }

  getCredentials(): void {
    this.router.navigate(['/get-credentials']);
  }

  executeKeylogger(): void {
    this.router.navigate(['/execute-keylogger']);
  }

  dosAttack(): void {
    this.router.navigate(['/dos-attack']);
  }

  screenShots(): void {
    this.router.navigate(['/screen-shots']);
  }

  c2Agents(): void {
    this.router.navigate(['/c2-agents']);
  }

  listFiles(): void {
    this.router.navigate(['/list-files']);
  }

  listPictures(): void {
    this.router.navigate(['/list-pictures']);
  }

  listServer(): void {
    this.router.navigate(['/list-server']);
  }

  listLogs(): void {
    this.router.navigate(['/list-logs']);
  }

  removeCommand(): void {
    this.router.navigate(['/remove-command']);
  }

  removeTrojan(): void {
    this.router.navigate(['/remove-trojan']);
  }

  changeServer(): void {
    this.router.navigate(['/change-server']);
  }

}
