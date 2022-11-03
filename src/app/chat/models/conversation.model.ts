import {Picture} from "./picture.model";
import {Message} from "./message.model";

export class Conversation {
  public id: string;
  public name: string;
  public status: string;
  public picture_data: Picture;
  public messages: Message[];


  constructor(id: string, name: string, status: string, picture_data: Picture, messages: Message[]) {
    this.id = id;
    this.name = name;
    this.status = status;
    this.picture_data = picture_data;
    this.messages = messages;
  }
}
