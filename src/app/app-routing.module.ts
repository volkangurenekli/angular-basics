import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConditionalContentProjectionComponent } from './conditional-content-projection';
import { ContentProjectionComponent } from './content-projection';
import { MultiSlotContentProjectionComponent } from './multi-slot-content-projection';
import { NgContainerComponent } from './ng-container';
import { NgTemplateComponent } from './ng-template';
import { NgTemplateOutletComponent } from './ng-template-outlet';
import { PropertyBindingComponent } from './property-binding';
import { SingleSlotContentProjectionComponent } from './single-slot-content-projection';
import { StatementsComponent } from './statements';
import { TemplateReferenceVariableComponent } from './template-reference-variable';
import { TextInterpolationComponent } from './text-interpolation';
import { TwoWayBindingComponent } from './two-way-binding';

const routes: Routes = [
  { path: 'text-interpolation', component: TextInterpolationComponent },
  { path: 'statements', component: StatementsComponent },
  { path: 'property-binding', component: PropertyBindingComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
  {
    path: 'template-reference-variable',
    component: TemplateReferenceVariableComponent,
  },
  { path: 'content-projection', component: ContentProjectionComponent },
  {
    path: 'single-slot-content-projection',
    component: SingleSlotContentProjectionComponent,
  },
  {
    path: 'multi-slot-content-projection',
    component: MultiSlotContentProjectionComponent,
  },
  {
    path: 'conditional-content-projection',
    component: ConditionalContentProjectionComponent,
  },
  { path: 'ng-template', component: NgTemplateComponent },
  { path: 'ng-container', component: NgContainerComponent },
  { path: 'ng-template-outlet', component: NgTemplateOutletComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
