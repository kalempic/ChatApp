import {Component, Input, OnInit} from '@angular/core';
import {Conversation} from "../../models/conversation.model";

@Component({
  selector: 'app-conversation-item',
  templateUrl: './conversation-item.component.html',
  styleUrls: ['./conversation-item.component.css']
})
export class ConversationItemComponent implements OnInit {
  @Input() conversation!: Conversation;

  constructor() { }

  ngOnInit(): void {
  }

}
