import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CadastroMarketPlaceComponent } from './cadastro-market-place/cadastro-market-place.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HelloComponent },
      {
        path: 'cadastro',
        pathMatch: 'full',
        component: CadastroMarketPlaceComponent,
      },
    ]),
  ],
  declarations: [AppComponent, HelloComponent, CadastroMarketPlaceComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
