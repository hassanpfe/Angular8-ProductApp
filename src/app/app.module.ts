import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AppToolbarComponent } from './components/app-toolbar/app-toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersListComponent } from './components/users-list/users-list.component';

const AppRoutes: Routes=[
{path:'',component:ProductListComponent},
{path:'productList',component:ProductListComponent},
{path:'usersList',component:UsersListComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AppToolbarComponent,
    UsersListComponent
  ],
  imports: [
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
