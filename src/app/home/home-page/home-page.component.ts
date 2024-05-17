import { DOCUMENT, isPlatformServer } from '@angular/common';
import { Component, Inject, Injector, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { enumLayoutPageTemplate, enumLayoutPageTemplateModel } from 'byn-landing-page';
import { PageContentTemplateModel } from 'byn-landing-page';
import { PageDetail } from 'byn-landing-page';
import { HOSTNAME } from 'src/server/hostname.token';
import { CommonService } from 'src/services/common.service';
import { PageService } from 'src/services/page.service';
import { getImageCdn, isEmptyObject } from 'src/utils/utils';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  nameRewrite: any = '';
  dataInfo: PageDetail = {} as PageDetail;
  dataTemplateJson: PageContentTemplateModel[] = [];
  enumLayoutPageTemplate: enumLayoutPageTemplateModel = enumLayoutPageTemplate;

  constructor(
    private injector: Injector,
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private route: ActivatedRoute,
    private pageService: PageService,
    private commonService: CommonService) {
  }
  ngOnInit(): void {
    this.innitData();
  }

  innitData() {
    let nameRewrite = '';
    if (isPlatformServer(this.platformId)) {
      nameRewrite =  this.injector.get('hostname');
    } else {
      nameRewrite = document.location.hostname;
    }

    this.pageService.getPageDetail({
      NameRewrite: nameRewrite
    }).subscribe(res => {
      this.dataInfo = res?.Data || {};
      console.log(nameRewrite, this.dataInfo, 'nameRewrite');
      this.initSeo()
    })
  }

  initSeo() {
    const {ValueDataJson} = this.dataInfo;
    this.commonService.initSeoPage({
      title: ValueDataJson?.WebTitle,
      description: ValueDataJson?.WebDescription,
      keyword: ValueDataJson?.WebKeyword,
      image: !!ValueDataJson?.WebImage ? getImageCdn(ValueDataJson?.WebImage) : ''
    });
  }
}
