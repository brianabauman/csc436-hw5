import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ChatThread } from '../chat-thread/chat-thread.component';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'chat-window',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {
  messages: Observable<any>;
  currentThread: ChatThread;
  draftMessage: Message;
  currentUser: User;

  constructor(private messagesServce: MessagesService,
              private threadsService: ThreadsService,
              private userService: UserService,
              private el: ElementRef) {
  }

  ngOnInit(): void {
    this.messages = this.threadsService.currentThreadMessages;
    this.draftMessage = new Message();
    this.threadsService.currentThread.subscribe(
      (thread: Thread) => {
        this.currentThread = thread;
      });
    this.userService.currentUser.subscribe(
      (user: User) => {
        this.currentUser = user;
      });
    this.messages.subscribe(
      (messages: Array<Message>) => {
        setTimeout(() => {
          this.scrollToBottom();
        });
      });
  }

  sendMessage(): void {
    let m: Message = this.draftMessage;
    m.author = this.currentUser;
    m.thread = this.currentThread;
    m.isRead = true;
    this.messagesService.addMessage(m);
    this.draftMessage = new Message();
  }

  onEnter(event: any) {
    this.sendMessage();
    event.preventDefault();
  }

  scrollToBottom(): void {
    let scrollPane: any = this.el
      .nativeElement.querySelectr('.msg-container-base');
    scrollPane.scrollTop = scrollPane.scrollHeight;
  }
}
