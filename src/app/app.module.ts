import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { HooksComponent } from './hooks/hooks.component';
import { DemoComponent } from './demo/demo.component';
import { AttributeComponent } from './attribute/attribute.component';
import { InoutComponent } from './inout/inout.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { CustdireComponent } from './custdire/custdire.component';
import { AssidireComponent } from './assidire/assidire.component';
import { Servicecomp3Component } from './servicecomp3/servicecomp3.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    HooksComponent,
    DemoComponent,
    AttributeComponent,
    InoutComponent,
    NgForComponent,
    NgswitchComponent,
    CustdireComponent,
    AssidireComponent,
    Servicecomp3Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
