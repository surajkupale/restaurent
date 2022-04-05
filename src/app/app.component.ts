import { Component} from '@angular/core';
import { RestService } from './Services/rest-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  restorrent: any = [];

  constructor(private _restService: RestService){
    this.restorrent = _restService.getRestorrent();
    console.log(this.restorrent)
  }
}
