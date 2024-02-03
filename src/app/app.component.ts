import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { compactedVALUE } from './lib/lodashCompact';

const SPINNER_VERTICAL_OFFSET = '20px';
// @ts-ignore
import HR from '!raw-loader!assets/xml/workday/Human_resources_v39_1.wsdl';
import { compactedVALUE2 } from './compact2';
import { ReadFileAsContentComponent } from "./components/read-file-as-content/read-file-as-content.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styles: [`
    :host { 
      height:100%;
      width:100%;
      #splash-container {
        top: calc(50% + ${SPINNER_VERTICAL_OFFSET});
      }
    }
    `],
    imports: [CommonModule, RouterOutlet, ReadFileAsContentComponent]
})
export class AppComponent {
  private _HR: string;
  private _compactedVALUE = compactedVALUE;
  constructor() {
  }

  title = 'xkx-ng-esbuild';
  name = "This is name";
  compactedVALUE2 = compactedVALUE2;

  logger() {
    console.log("logger");
    console.log(this.name);
    console.log(this.title);
    console.log(this._compactedVALUE);
    console.log(this._HR);
  }


  // HR = HR;
}
