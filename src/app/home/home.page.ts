import { Component } from '@angular/core';
import { Keyboard, KeyboardStyle } from '@capacitor/keyboard';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    Keyboard.setAccessoryBarVisible({ isVisible: false });
    Keyboard.setStyle({ style: KeyboardStyle.Dark })

  }

}
