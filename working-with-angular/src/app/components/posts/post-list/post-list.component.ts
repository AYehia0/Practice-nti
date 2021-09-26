import { Component, Input} from "@angular/core";

@Component({
    selector: "app-post-post-list",
    templateUrl: "./post-list.component.html",
    styleUrls: ["./post-list.component.css"]
})
export class PostListComponent {

    // we have to make the posts bindable to be called outside 
    // dummy data 

    @Input() posts: any [] = []
    @Input() order: string = ""
}