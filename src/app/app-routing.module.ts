import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ChatComponent} from "./chat/chat.component";
import {StartComponent} from "./chat/start/start.component";
import {MessagesComponent} from "./chat/messages/messages.component";
import {ConversationsResolverService} from "./chat/services/conversations-resolver.service";

const routes: Routes = [
  {path: '', redirectTo: '/chat', pathMatch: 'full'},
  {
    path: 'chat', component: ChatComponent, resolve: [ConversationsResolverService], children: [
      {path: '', component: StartComponent},
      {path: 'conversation/:id', component: MessagesComponent, resolve: [ConversationsResolverService]},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
