import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextInterpolationComponent } from './text-interpolation';
import { StatementsComponent } from './statements';
import { PropertyBindingComponent } from './property-binding';
import { TwoWayBindingComponent } from './two-way-binding';
import { TemplateReferenceVariableComponent } from './template-reference-variable';
import { ContentProjectionComponent } from './content-projection';
import { SingleSlotContentProjectionComponent } from './single-slot-content-projection';
import { MultiSlotContentProjectionComponent } from './multi-slot-content-projection';
import { ConditionalContentProjectionComponent } from './conditional-content-projection';
import { NgTemplateComponent } from './ng-template';
import { NgContainerComponent } from './ng-container';
import { PropertyBindingChildComponent } from './property-binding/child';
import { TwoWayBindingChildComponent } from './two-way-binding/child';
import { SingleChild } from './single-slot-content-projection/child';
import { MultiChild } from './multi-slot-content-projection/child';

@NgModule({
  declarations: [
    AppComponent,
    TextInterpolationComponent,
    StatementsComponent,
    PropertyBindingComponent,
    TwoWayBindingComponent,
    TemplateReferenceVariableComponent,
    ContentProjectionComponent,
    SingleSlotContentProjectionComponent,
    MultiSlotContentProjectionComponent,
    ConditionalContentProjectionComponent,
    NgTemplateComponent,
    NgContainerComponent,
    PropertyBindingChildComponent,
    TwoWayBindingChildComponent,
    SingleChild,
    MultiChild,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
