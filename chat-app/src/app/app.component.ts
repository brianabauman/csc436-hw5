import { Component } from '@angular/core';

import { ChatExampleData } from './data/ChatExampleData'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private messagesService: MessagesService,
              private threadsService: ThreadsService,
              private userService: UserService) {
    ChatExampleData.init(messagesService, threadsService, userService);
  }
}
