import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ChatComponent} from './chat/chat.component';
import {ConversationListComponent} from './chat/conversation-list/conversation-list.component';
import {MessagesComponent} from './chat/messages/messages.component';
import {StartComponent} from './chat/start/start.component';
import {ConversationItemComponent} from './chat/conversation-list/conversation-item/conversation-item.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ConversationListComponent,
    MessagesComponent,
    StartComponent,
    ConversationItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
