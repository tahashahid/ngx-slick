import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickComponent, SlickItemDirective } from './slick.component';

export * from './slick.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SlickComponent,
        SlickItemDirective,
    ],
    exports: [
        SlickComponent,
        SlickItemDirective,
    ]
})
export class SlickModule {
    static forRoot(): ModuleWithProviders<SlickModule> {
        return {
            ngModule: SlickModule,
        };
    }
}



