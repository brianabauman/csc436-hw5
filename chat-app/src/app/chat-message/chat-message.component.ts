import { Component, OnInit } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  inputs: ['message'],
  selector: 'chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {
  message: Message;
  currentUser: User;
  incoming: boolean;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.CurrentUser.subscribe(
      (user: User) => {
        this.currentUser = user;
        if (this,message.author && user) {
          this.incoming = this.message.author.id !== user.id;
        }
      });
  }
}
