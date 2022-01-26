import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import { IndexComponent } from './index/index.component';
import { RegistroComponent } from './auth/registro.component';
import { LoginComponent } from './auth/login.component';
import { ProdGuardService as guard} from './guards/prod-guard.service';
import { ReverseShellComponent } from './reverse-shell/reverse-shell.component';
import { LaunchCommandsComponent } from './launch-commands/launch-commands.component';
import { GetFilesComponent } from './get-files/get-files.component';
import { PutFilesComponent } from './put-files/put-files.component';
import { AutoExecuteComponent } from './auto-execute/auto-execute.component';
import { GetInfoComponent } from './get-info/get-info.component';
import { GetWifiComponent } from './get-wifi/get-wifi.component';
import { GetCredentialsComponent } from './get-credentials/get-credentials.component';
import { ExecuteKeyloggerComponent } from './execute-keylogger/execute-keylogger.component';
import { DosAttackComponent } from './dos-attack/dos-attack.component';
import { ScreenShotsComponent } from './screen-shots/screen-shots.component';
import { C2AgentsComponent } from './c2-agents/c2-agents.component';
import { ListFilesComponent } from './list-files/list-files.component';
import { ListPicturesComponent } from './list-pictures/list-pictures.component';
import { ListServerComponent } from './list-server/list-server.component';
import { ListLogsComponent } from './list-logs/list-logs.component';
import { RemoveCommandComponent } from './remove-command/remove-command.component';
import { RemoveTrojanComponent } from './remove-trojan/remove-trojan.component';
import { ChangeServerComponent } from './change-server/change-server.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent },
  { path: 'lista', component: ListaProductoComponent, canActivate: [guard], data: {expectedRol:['admin', 'user']}},
  { path: 'detalle/:id', component: DetalleProductoComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] }},
  { path: 'nuevo', component: NuevoProductoComponent, canActivate: [guard], data: { expectedRol: ['admin'] }},
  { path: 'editar/:id', component: EditarProductoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'reverse-shell', component: ReverseShellComponent },
  { path: 'launch-commands', component: LaunchCommandsComponent },
  { path: 'get-files', component: GetFilesComponent },
  { path: 'put-files', component: PutFilesComponent },
  { path: 'auto-execute', component: AutoExecuteComponent },
  { path: 'get-info', component: GetInfoComponent },
  { path: 'get-wifi', component: GetWifiComponent },
  { path: 'get-credentials', component: GetCredentialsComponent },
  { path: 'execute-keylogger', component: ExecuteKeyloggerComponent },
  { path: 'dos-attack', component: DosAttackComponent },
  { path: 'screen-shots', component: ScreenShotsComponent },
  { path: 'c2-agents', component: C2AgentsComponent },
  { path: 'list-files', component: ListFilesComponent },
  { path: 'list-pictures', component: ListPicturesComponent },
  { path: 'list-server', component: ListServerComponent },
  { path: 'list-logs', component: ListLogsComponent },
  { path: 'remove-command', component: RemoveCommandComponent },
  { path: 'remove-trojan', component: RemoveTrojanComponent },
  { path: 'change-server', component: ChangeServerComponent },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
