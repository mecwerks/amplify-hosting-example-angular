import { Component, OnInit } from '@angular/core';
import { DataStore } from '@aws-amplify/datastore';
import { Anime } from '../models';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myamplifyapp';

  async ngOnInit() {
    await DataStore.save(
      new Anime({
        "title": "Yeetmeister",
        "rating": "6969420"
      })
    );
  }
}
