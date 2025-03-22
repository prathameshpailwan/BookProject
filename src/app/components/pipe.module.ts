import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalFilterPipe } from '../pipes/global-filter.pipe';

@NgModule({
  declarations: [GlobalFilterPipe], // Declare the pipe
  imports: [CommonModule],
  exports: [GlobalFilterPipe] // Export it so it can be used anywhere
})
export class PipeModule {}
