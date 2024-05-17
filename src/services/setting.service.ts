import { Injectable } from '@angular/core';
import { RequestService } from './base/request.sevice';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  constructor(private requestService: RequestService, private commonService: CommonService) { }

  getListSetting() {
    const req = {
      isActive: true
    };
    return this.requestService.get<any>('/setting/list', req);
  }
}
