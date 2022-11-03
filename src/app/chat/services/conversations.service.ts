import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, tap} from "rxjs";
import {Conversation} from "../models/conversation.model";

@Injectable({
  providedIn: 'root'
})
export class ConversationsService {
  conversations: any = []

  constructor(private httpClient: HttpClient) {
  }

  public loadAllConversationsFromJSONFile() {
    return this.httpClient.get<{ [key: string]: Conversation }>("assets/conversation.json").pipe(
      map(responseData => {
        const conversationsArray: Conversation[] = [];
        const i = 0;
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            conversationsArray.push({...responseData[key], id: key});
          }
        }
        return conversationsArray;
      }),
      tap(conversations => {
        this.conversations = conversations;
      })
    )

  }

  getConversation(index: number) {
    return this.conversations[index];
  }

  getConversations() {
    return this.conversations;
  }
}
