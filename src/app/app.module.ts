import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeroesModulo } from './heroes/heroes.module';
import { ContadorModulo } from './contador/contador.module';
import { DbzModule } from './dbz/dbz.module';






@NgModule({
  declarations: [
    AppComponent,
    
    
  ],

  imports: [
    BrowserModule,
    HeroesModulo,
    ContadorModulo,
    DbzModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
