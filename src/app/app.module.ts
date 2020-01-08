
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { RolesComponent } from './Components/roles/roles.component';
import { PermissionsComponent } from './Components/permissions/permissions.component';
import { ClientsComponent } from './Components/clients/clients.component';
import { UsersComponent } from './Components/users/users.component';
import { UserRoleComponent } from './Components/userrole/userrole.component';
import { ClientUserComponent } from './Components/clientuser/clientuser.component';
import { RolePermissionsComponent } from './Components/rolepermissions/rolepermissions.component';
// Material section
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RolesComponent,
    PermissionsComponent,
    ClientsComponent,
    UsersComponent,
    UserRoleComponent,
    ClientUserComponent,
    RolePermissionsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
