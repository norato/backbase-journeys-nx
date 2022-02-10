import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactManagerJourneyModule } from '@backbase/contact-manager-journey-ang';

@NgModule({
  imports: [CommonModule, ContactManagerJourneyModule.forRoot()],
})
export class CustomContactManagerJourneyBundleModule {}
