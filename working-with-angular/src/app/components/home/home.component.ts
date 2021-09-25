import { VERSION } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  apiUrl:string = "https://jsonplaceholder.typicode.com/photos?_limit=12"
  imgs:any 
  status:boolean = false
  searchResult:any 
  twoWayBindingData:any
  welcomeMsg: string = "Welcome to the page"
  angVersion: string = VERSION.full
  script: string = "alert('hi');"
  data:any 

  constructor() { }

  ngOnInit(): void {
  }

  showWelcomeMessage() {
    return this.welcomeMsg
  }

  // handling input 
  handleInput(e:any) {
    this.data = e.target.value
  }
  
  getSearchKey(e:any) {
    this.data = e.target.value
  }
  // getting data from the api
  async getImgsFromApi(){

    // changing the button 
    this.status = true

    const res = await fetch(this.apiUrl)
    const data = await res.json()

    this.imgs = data
  }

  filterTitles() {

    this.searchResult = this.imgs.filter((img:any) => {
      return img.title.includes(this.twoWayBindingData)
    })

  }

}
