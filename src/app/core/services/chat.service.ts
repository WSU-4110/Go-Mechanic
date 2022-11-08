import { Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  doc,
  Firestore,
  getDoc,
  orderBy,
  query,
  Timestamp,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { concatMap, from, map, Observable, take, tap } from 'rxjs';
import { Chat } from 'src/app/models/chat';
import { ProfileUser } from 'src/app/models/user-profile';
import { UsersService } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class ChatService {

  constructor(private firestore: Firestore, private userService: UsersService ) { }

  createChat(otherUser: ProfileUser): Observable<string> {
    const ref = collection(this.firestore, 'chats');
    return this.userService.currentUserProfile$.pipe(
      take(1),
      concatMap((user) =>
        addDoc(ref, {
          userIds: [user?.uid, otherUser?.uid],
          users: [
            {
              displayName: user?.displayName ?? '',
              photoURL: user?.photoURL ?? '',
            },
            {
              displayName: otherUser.displayName ?? '',
              photoURL: otherUser.photoURL ?? '',
            },
          ],
        })
      ),
      map((ref) => ref.id)
    );
}

  get myChats$(): Observable<Chat[]> {
    const ref = collection(this.firestore, 'chats');
    return this.userService.currentUserProfile$.pipe(
      concatMap((user) => {
        const myQuery = query(
          ref,
          where('userIds', 'array-contains', user?.uid))
          return collectionData(myQuery, { idField: 'id'}).pipe(
            map(chats => this.addChatNameAndPic(user?.uid, chats as Chat[]))
          ) as Observable<Chat[]>
        })
      )
    }

    addChatNameAndPic(currentUserId: string | undefined, chats: Chat[]): Chat[] {
      chats.forEach((chat: Chat) => {
        const otherUserIndex =
          chat.userIds.indexOf(currentUserId ?? '') === 0 ? 1 : 0;
        const { displayName, photoURL } = chat.users[otherUserIndex];
        chat.chatName = displayName;
        chat.chatPic = photoURL;
      });
  
      return chats;
    }
}
