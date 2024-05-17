import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdnUrlPipe, DatetimePipe, PageIndexPipe, PhonePipe } from './common.pipe';
import { ValidateMessagePipe } from './validateMessage.pipe';

@NgModule({
  declarations: [
    CdnUrlPipe,
    PageIndexPipe,
    DatetimePipe,
    PhonePipe,
    ValidateMessagePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CdnUrlPipe,
    PageIndexPipe,
    DatetimePipe,
    PhonePipe,
    ValidateMessagePipe
  ]
})
export class PipeModule { }
