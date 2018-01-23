import { NgModule } from '@angular/core';

import { ButtonCheckboxDirective } from './checkbox.directive';
import { ButtonRadioDirective } from './radio.directive';

@NgModule({
  declarations: [ButtonCheckboxDirective, ButtonRadioDirective],
  exports: [ButtonCheckboxDirective, ButtonRadioDirective]
})
export class ButtonsModule {}
