# Sample Application

## Keyboard
The application hides the accessory bar on ios using the [Capacitor Keyboard plugin](https://capacitorjs.com/docs/apis/keyboard#setaccessorybarvisible) with:

```typescript
import { Keyboard } from '@capacitor/keyboard';
...
Keyboard.setAccessoryBarVisible({ isVisible: false });
```

## SSN Input
Input of Social Security Numbers is added to `home.page.ts` via a `ion-input` component:
```html
<ion-input name="ssn" id="ssn" placeholder="Enter SSN" minlength=10 maxlength=10 inputmode="numeric" type="number" pattern="/^\d{10}$/"></ion-input>
```

To mask the input to 000-000-0000 we use [ngx-mask](https://github.com/JsDaddy/ngx-mask) and can improve the display of the number with:
```html
<input class="my-input" name="ssn2" id="ssn2" placeholder="000-000-0000" type="text" pattern="[0-9]*" mask="000-000-0000" />
```

Note: we're using a standard html input here to improve it visually we added some css:
```css
.my-input {
  border: unset;
  padding: 10px;
}

.my-input:focus {
  outline: unset;
}
```

## One Time Password (OTP)
One time passwords are used for example where two factor authentication allows a code to be texted to your device. To simplify input you can use `autocomplete` with `one-time-code` to have iOS suggest auto completing from the text message that was sent:

```html
<input class="my-input" maxlength="6" type="number" name="token" id="token" inputmode="numeric" pattern="[0-9]*" autocomplete="one-time-code" />
```

### What about Android?
Google is working on it:

[https://9to5google.com/2020/02/10/autofill-code-google-messages/](https://9to5google.com/2020/02/10/autofill-code-google-messages/)

Note: This could previously be done with the [SMS retriever](https://developers.google.com/identity/sms-retriever/user-consent/overview) functionality and the cordova plugin [here](https://ionicframework.com/docs/native/sms-retriever) but the content dialog doesn't provide as nice of an experience as iOS.