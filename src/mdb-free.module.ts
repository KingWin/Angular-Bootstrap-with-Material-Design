// free
import { ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { DeepModule } from './inputs/deep.module';
import { ButtonsModule } from './buttons/buttons.module';
import { RippleModule } from './ripple/ripple.module';
import { ActiveModule } from './inputs/active.module';
import { NavbarModule } from './navbars/navbar.module';
import { BsDropdownModule } from './dropdown/dropdown.module';
import { CarouselModule } from './carousel/carousel.module';
import { MDBChartsModule } from './charts/chart.module';
import { CollapseModule } from './collapse/collapse.module';
import { ModalModule } from './modals/modal.module';
import { MDBTooltipModule } from './tooltip/tooltip.module';
import { PopoverModule } from './popover/popover.module';

export {
  ButtonsModule, ButtonRadioDirective, ButtonCheckboxDirective
} from './buttons/index';

export {
  RippleModule, RippleDirective
} from './ripple/index';

export {
  DeepModule, DeepDirective
} from './inputs/index';


export {
  ActiveModule, ActiveDirective, InputValidateDirective
} from './inputs/index';

export {
  NavbarModule
} from './navbars/index';

export {
  BsDropdownConfig, BsDropdownContainerComponent, BsDropdownDirective, BsDropdownMenuDirective,
  BsDropdownModule, BsDropdownState, BsDropdownToggleDirective
} from './dropdown/index';

export {
  CarouselComponent, CarouselConfig, CarouselModule
} from './carousel/index';

export {
  MDBChartsModule, BaseChartDirective
} from './charts/index';

export {
  CollapseDirective, CollapseModule
} from './collapse/index';

export {
  ModalBackdropComponent, ModalBackdropOptions, ModalDirective, ModalModule, ModalOptions, MDBModalService,
  ModalContainerComponent, MDBModalRef
} from './modals/index';

export {
  TooltipConfig, TooltipContainerComponent, TooltipDirective, MDBTooltipModule
} from './tooltip/index';

export {
  PopoverConfig, PopoverContainerComponent, PopoverModule, PopoverDirective
} from './popover/index';



const MODULES = [
DeepModule,
ButtonsModule,
RippleModule,
ActiveModule,
NavbarModule,
BsDropdownModule,
CarouselModule,
MDBChartsModule,
CollapseModule,
ModalModule,
MDBTooltipModule,
PopoverModule,
];

@NgModule({
  imports: [
  ButtonsModule,
  DeepModule,
  RippleModule.forRoot(),
  ActiveModule.forRoot(),
  NavbarModule,
  BsDropdownModule.forRoot(),
  CarouselModule.forRoot(),
  MDBChartsModule,
  CollapseModule.forRoot(),
  ModalModule.forRoot(),
  MDBTooltipModule.forRoot(),
  PopoverModule.forRoot(),
  ],
  exports: MODULES,
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class MDBRootModule {
}

@NgModule({exports: MODULES})
export class MDBBootstrapModule {
  public static forRoot(): ModuleWithProviders {
    return {ngModule: MDBRootModule};
  }
}
