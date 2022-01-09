import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestsService } from './services/requests.service';
import { BodyComponent } from './template/body/body.component';
import { VendasComponent } from './template/vendas/vendas.component';
import { HeaderComponent } from './template/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    VendasComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RequestsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
