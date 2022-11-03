import {Injectable} from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import {Conversation} from "../models/conversation.model";
import {ConversationsService} from "./conversations.service";

@Injectable({providedIn: 'root'})
export class ConversationsResolverService implements Resolve<Conversation[]> {
  constructor(
    private conversationsService: ConversationsService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const conversations = this.conversationsService.getConversations();

    if (conversations.length === 0) {
      return this.conversationsService.loadAllConversationsFromJSONFile();
    } else {
      return conversations;
    }
  }
}
