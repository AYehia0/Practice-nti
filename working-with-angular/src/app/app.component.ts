import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestingAngular';
  storedPosts: any []= []
  storedOrder: string = ""

  onPostAdded(post:any) {
    this.storedPosts.push(post)
  }

  // the 
  onOrderAdded(order:string) {
    this.storedOrder = order
  }

}
