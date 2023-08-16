import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ShortSentencePipe  }  from './shortSentence.pipe';
import { DatafilterPipe } from './datafilter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PipeDemoComponent,
    ShortSentencePipe,
    DatafilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
