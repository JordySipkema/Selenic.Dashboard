import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app.routing';
import {PagesModule} from './pages/pages.module';

import {AppComponent} from './app.component';
import {EmonService} from './services/emon.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        RouterModule,
        AppRoutingModule,
        PagesModule,
    ],
    providers: [EmonService, {provide: LOCALE_ID, useValue: 'nl-NL'}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
