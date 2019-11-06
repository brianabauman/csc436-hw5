import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FromNowPipe } from './pipes/from-now.pipe';

import { AppComponent } from './app.component';
import { ChatThreads } from './chat-threads/chat-threads.component';
import { ChatThread } from './chat-thread/chat-thread.component';
import { ChatWindow } from './chat-window/chat-window.component';
import { ChatMessage } from './chat-message/chat-message.component';
import { ChatNavBar } from './chat-nav-bar/nav-bar.component';

import { MessagesService } from './message/messages.service';
import { ThreadsService } from './thread/threads.service';
import { UsersService } from './user/users.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatNavBar,
    ChatThreads,
    ChatThread,
    ChatWindow,
    ChatMessage,
    ChatThreads,
    ChatThread,
    ChatWindow,
    ChatMessage,
    ChatNavBar,
    FromNowPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    MessagesService, ThreadsService, UsersService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);