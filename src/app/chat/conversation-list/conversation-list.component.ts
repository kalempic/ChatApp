import {Component, OnInit} from '@angular/core';
import {ConversationsService} from "../services/conversations.service";
import {Conversation} from "../models/conversation.model";

@Component({
  selector: 'app-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.css']
})
export class ConversationListComponent implements OnInit {
  conversations!: Conversation[];

  constructor(private conversationService: ConversationsService) {
  }

  ngOnInit(): void {
    this.conversations = this.conversationService.getConversations();
  }

}
