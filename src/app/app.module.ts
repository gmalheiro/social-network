import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroBanner } from './components/hero-banner/hero-banner.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserEditComponent } from './components/user-registration/user-edit/user-edit.component';
import { UsersComponent } from './components/users/users.component';

import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroBanner,
    UserRegistrationComponent,
    UserEditComponent,
    UsersComponent,
    UserDetailComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
