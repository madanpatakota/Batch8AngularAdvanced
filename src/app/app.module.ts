import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ShortSentencePipe  }  from './shortSentence.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeDemoComponent,
    ShortSentencePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
