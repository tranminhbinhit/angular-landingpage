import { Injectable } from '@angular/core';
import { RequestService } from './base/request.sevice';
import { CommonService } from './common.service';
import { map } from 'rxjs';
import { isEmpty, isEmptyObject } from 'src/utils/utils';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  constructor(private requestService: RequestService, private commonService: CommonService) { }

  createUpdatePage(req: any) {
    return this.requestService.post<any>('/page/create-update', req);
  }

  
  getPageDetail(req:any) {
    return this.requestService.post<any>("/page/detail", req).pipe(
      map((info) => {
        const dataInfo = info?.Data;
        if (!isEmptyObject(dataInfo)) {
          info.Data = {
            ...dataInfo,
            DataTemplateJson: !isEmpty(dataInfo?.DataTemplateJson) ? JSON.parse(dataInfo.DataTemplateJson) : [],
            ValueDataJson: !isEmpty(dataInfo.ValueDataJson) ? JSON.parse(dataInfo.ValueDataJson) : {},
            ListImageJson: !isEmpty(dataInfo.ListImageJson) ? JSON.parse(dataInfo.ListImageJson) : [],
          };
        }
        return info;
      })
    );
  }

  getList(req: any) {
    return this.requestService.post<any>('/page/getlist', req);
  }
}
