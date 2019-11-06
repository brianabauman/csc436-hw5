import { Component, OnInit } from '@angular/core';

@Component({
  inputs: ['thread'],
  selector: 'chat-thread',
  templateUrl: './chat-thread.component.html',
  styleUrls: ['./chat-thread.component.css']
})
export class ChatThread implements OnInit {
  thread: Thread;
  selected: boolean = false;

  constructor(private threadsService: ThreadsService) { }

  ngOnInit(): void {
    this.threadsService.currentThread
      .subscribe( (currentThread: Thread) => {
        this.selected = currentThread &&
        this.thread &&
        (currentThread.id === this.thread.id);  
      });
  }

  clicked(event: any): void {
    this.threadsService.setCurrentThread(this.thread);
    event.preventDefault();
  }
}
