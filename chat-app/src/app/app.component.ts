import { Component } from '@angular/core';

import { ChatThreads } from './chat-threads/chat-threads.component';
import { ChatThread } from './chat-thread/chat-thread.component';
import { ChatWindow } from './chat-window/chat-window.component';
import { ChatMessage } from './chat-message/chat-message.component';
import { ChatNavBar } from './chat-nav-bar/nav-bar.component';
import { ChatExampleData } from './data/ChatExampleData';
import { MessagesService } from './message/messages.service';
import { ThreadsService } from './thread/threads.service';
import { UsersService } from './user/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private messagesService: MessagesService,
              private threadsService: ThreadsService,
              private usersService: UsersService) {
    ChatExampleData.init(messagesService, threadsService, usersService);
  }
}
