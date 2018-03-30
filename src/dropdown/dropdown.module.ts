import { ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentLoaderFactory } from '../utils/component-loader/component-loader.factory';

import { PositioningService } from '../utils/positioning/positioning.service';
import { BsDropdownContainerComponent } from './dropdown-container.component';
import { BsDropdownMenuDirective } from './dropdown-menu.directive';
import { BsDropdownToggleDirective } from './dropdown-toggle.directive';
import { BsDropdownConfig } from './dropdown.config';

import { BsDropdownDirective } from './dropdown.directive';
import { BsDropdownState } from './dropdown.state';


@NgModule({
  declarations: [
  BsDropdownMenuDirective,
  BsDropdownToggleDirective,
  BsDropdownContainerComponent,
  BsDropdownDirective
  ],
  exports: [
  BsDropdownMenuDirective,
  BsDropdownToggleDirective,
  BsDropdownDirective
  ],
  entryComponents: [BsDropdownContainerComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class BsDropdownModule {
  public static forRoot(config?: any): ModuleWithProviders {
    return {
      ngModule: BsDropdownModule, providers: [
      ComponentLoaderFactory,
      PositioningService,
      BsDropdownState,
      {provide: BsDropdownConfig, useValue: config ? config : {autoClose: true}}
      ]
    };
  }
}
