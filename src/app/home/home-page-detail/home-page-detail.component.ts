import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageContentTemplateModel, PageDetail, enumLayoutPageTemplate, enumLayoutPageTemplateModel } from 'byn-landing-page';
import { CommonService } from 'src/services/common.service';
import { PageService } from 'src/services/page.service';
import { getImageCdn, parseJson } from 'src/utils/utils';

@Component({
  selector: 'app-home-page-detail',
  templateUrl: './home-page-detail.component.html',
  styleUrls: ['./home-page-detail.component.scss']
})
export class HomePageDetailComponent {

  nameRewrite: any = '';
  dataInfo: PageDetail = {} as PageDetail;
  dataTemplateJson: PageContentTemplateModel[] = [];
  enumLayoutPageTemplate: enumLayoutPageTemplateModel = enumLayoutPageTemplate;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private pageService: PageService,
    private commonService: CommonService) {
  }
  ngOnInit(): void {
    this.commonService.initSeoPage({
      title: 'Đây là trang test',
      description: 'Bình test nha'
    })
    this.route.paramMap.subscribe(paramMap => {
      this.nameRewrite = paramMap.get('nameRewrite');
      if (this.nameRewrite) {
        this.innitData();
      } else {

      }
    })
  }

  innitData() {
    this.pageService.getPageDetail({
      NameRewrite: 'localhost'
    }).subscribe(res => {
      this.dataInfo = res?.Data || {};
      this.initSeo();
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
