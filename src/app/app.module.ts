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
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';
import { Comp5Component } from './comp5/comp5.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { CountPipe } from './pipe/count.pipe';
import { CountnamePipe } from './pipe/countname.pipe';


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
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Comp5Component,
    PipedemoComponent,
    CountPipe,
    CountnamePipe,
    
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
