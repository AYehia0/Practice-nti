// a class ,, everything here is a class

import { Component } from "@angular/core";

@Component({
    // selection defines how would you select and refernce the component in the html page
    selector: "app-header",

    // reference the file that contains the template aka html
    templateUrl: "./header.component.html"
})
export class HeaderComponent {
}