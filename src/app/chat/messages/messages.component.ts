import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ConversationsService} from "../services/conversations.service";
import {Conversation} from "../models/conversation.model";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  conversation !: Conversation;
  message = "";

  constructor(private route: ActivatedRoute, private conversationService: ConversationsService) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          const id = +params['id'];
          this.conversation = this.conversationService.getConversation(id);
          this.conversation.messages.sort((a, b) => {
            return a.time < b.time ? -1 : 1;
          });
        }
      );
  }

  sendMessage() {
    this.conversation.messages.push({time: Date.now() / 1000, content: this.message, type: "sent"});
    this.message = "";
  }

}
