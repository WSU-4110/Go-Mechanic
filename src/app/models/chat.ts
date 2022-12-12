import { Timestamp } from '@angular/fire/firestore';
import { ProfileUser } from './user-profile';

export interface Chat {
  id: string;
  lastMessage?: string;
  lastMessageDate?: Date & Timestamp;
  userIds: string[];
  users: ProfileUser[];

  //bug: not displaying chat pic - [jsb]
  chatPic?: string;
  chatName?: string;
}

export interface Message {
    text: string;
    senderId: string;
    sentDate: Date & Timestamp;
  }