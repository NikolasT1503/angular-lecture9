import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { Mod1Module } from './mod1/mod1.module';
import { Mod2Module } from './mod2/mod2.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Mod1Module, Mod2Module],
  providers: [
    /* { provide: 's1', useClass: AppService }, */
    { provide: 's2', useClass: AppService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
