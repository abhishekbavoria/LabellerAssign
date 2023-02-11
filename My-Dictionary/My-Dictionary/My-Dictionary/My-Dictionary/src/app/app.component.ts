import { Component } from '@angular/core';
import { DictionaryDataService } from './services/dictionary-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // template: `<form (ngSubmit)=sendData()>
  //     <label>
  //       Word:
  //       <input type="text" [(ngModel)]="words">
  //     </label>
  //     <br><br>
  //     <button type="submit">Submit</button>
  //   </form>`
})
export class AppComponent {
  title = 'Dictionary';
  words:any;
  constructor(private wordData:DictionaryDataService){
    wordData.words().subscribe((data)=>{
      console.warn("data",data);
      
      this.words= data
    })
  }
    // sendData() {
    //   const data = {
    //     word:'hello'
    //   };
    // postData.posts().subscribe((data)=>{
    //   console.warn("data",data);
      
    //   this.words= data
    // });
    // this.postData.posts(data).subscribe(response=>{
    //   console.log("hello abhishek");
    //   console.log(response);
      
    // })
  // }
}
