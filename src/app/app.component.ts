import {
  Component,
  Inject,
  Injector,
  Optional,
  PLATFORM_ID,
} from '@angular/core';
import { HOSTNAME } from 'src/server/hostname.token';
import { CommonService } from 'src/services/common.service';

import { REQUEST } from '@nguniversal/express-engine/tokens';
import { DOCUMENT, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-landingpage';
}
