import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from "./app.component";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    providers: [],
    imports: [BrowserModule,
        FormsModule,
        HttpModule,]
})
export class AppModule {
     
}