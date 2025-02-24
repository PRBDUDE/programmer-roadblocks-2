import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RoadblockFooterComponent} from "@rootComponents/roadblock-footer.component";
import {RoadblockHeaderComponent} from "@rootComponents/roadblock-header.component";
import {RoadblockNavComponent} from "./core/roadblock-nav/roadblock-nav.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RoadblockFooterComponent, RoadblockHeaderComponent, RoadblockNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'programmer-roadblocks-2';
}
