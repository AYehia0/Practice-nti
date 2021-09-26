import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-posts",
    templateUrl: "./posts.component.html",
    styleUrls: ["./posts.component.css"]
})
export class PostsComponent {

    // the post will contain the post content 2 way binding

    postTitle: string = ""
    postContent: string = ""
    postOrder: string = ""

    // to send the the app component we have to create an EventEmmiter
    @Output() postEmitter = new EventEmitter()

    @Output() orderEmitter = new EventEmitter()

    getPostOrder() {
        this.orderEmitter.emit(this.postOrder) 
    }

    getPostContent() {

        const post = {
            title: this.postTitle,
            content: this.postContent,
        }

        // emitting 
        this.postEmitter.emit(post)
    }

}