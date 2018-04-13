import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { HttpModule } from '@angular/http';
import { RootRouter } from './router/router';
import { HttpclientService} from './services/httpclient.service';



import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { AccountComponent } from './components/account/account.component';


@NgModule({
  declarations: [   
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProductComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    RootRouter,
    HttpModule
  ],
  providers: [
    HttpclientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
