import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { NotificationsService } from "angular2-notifications";
import { Meta, Title } from "@angular/platform-browser";
import { isEmpty, isEmptyObject } from "src/utils/utils";
import { seoInfoDefault } from "src/app/app.setting";
// import { Papa } from "ngx-papaparse";

@Injectable({
  providedIn: "root",
})
export class CommonService {
  public isLoading: boolean = false;

  private loadingSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor(
    private notificaionService: NotificationsService,
    private title: Title,
    private meta: Meta,
    // private papa: Papa
  ) {}

  loadingState(isLoading: boolean) {
    this.isLoading = isLoading;
    this.loadingSubject.next(this.isLoading);
  }

  notificationSuccess(
    description: string = "",
    config: any = { title: "Thông báo", timeOut: 2000 }
  ) {
    this.notificaionService.success(config.title, description, {
      timeOut: config.timeOut,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true,
    });
  }

  notificationErrorServer() {
    this.notificationError('Hệ thống quá tải');
  }

  notificationError(
    description: string = "",
    config: any = { title: "Thông báo", timeOut: 2000 }
  ) {
    this.notificaionService.error(config.title, description, {
      timeOut: config.timeOut,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true,
    });
  }

  notificationWarning(
    description: string = "",
    config: any = { title: "Thông báo", timeOut: 2000 }
  ) {
    this.notificaionService.warn(config.title, description, {
      timeOut: config.timeOut,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true,
    });
  }

  notificationCreateUpdate(
    data: any,
    config: any = { title: "Thông báo", timeOut: 2000 }
  ) {
    if (!isEmptyObject(data)) {
      if (data?.ID > 0) {
        this.notificationSuccess(data?.Message);
      } else {
        this.notificationWarning(data?.Message);
      }
    } else {
      this.notificationError("Hệ thống quá tải");
    }
  }

  //Seo Page
  initSeoPage(
    seoInfo: {
      title?: string;
      image?: string;
      keyword?: string;
      description?: string;
    } = { title: "", image: "", keyword: "", description: "" }
  ) {
    let title = seoInfoDefault.title;
    let image = seoInfoDefault.image;
    let keyword = seoInfoDefault.keyword;
    let description = seoInfoDefault.description;
    if (!isEmpty(seoInfo.title)) {
      title = seoInfo.title || '';
    }

    if (!isEmpty(seoInfo.image)) {
      image = seoInfo.image || '';
    }

    if (!isEmpty(seoInfo.description)) {
      description = seoInfo.description || '';
    }

    if (!isEmpty(seoInfo.keyword)) {
      keyword = seoInfo.keyword || '';
    }

    this.title.setTitle(title);
    this.meta.addTags([
      {
        name: "og:image",
        content: image,
      },
      {
        name: "description",
        content: description,
      },
      {
        name: "keywords",
        content: keyword,
      },
    ]);
  }

  // parseCsvToJson(csvData: string): Observable<any[]> {
  //   return new Observable<any[]>((observer) => {
  //     this.papa.parse(csvData, {
  //       header: true,
  //       complete: (result : any) => {
  //         observer.next(result.data);
  //         observer.complete();
  //       },
  //       error: (error : any) => {
  //         observer.error(error);
  //       },
  //     });
  //   });
  // }
}
