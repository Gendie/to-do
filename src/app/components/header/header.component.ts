import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public languages: { local: string, name: string, dir: 'ltr' | 'rtl', current: boolean}[] = [
    {
      local: "en",
      name: "En",
      dir: 'ltr',
      current: true
    }, {
      local: "ar",
      name: "عربى",
      dir: 'rtl',
      current: false
    }
  ]

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.translate.onLangChange.subscribe(
      change => {
        this.languages.forEach(lang => lang.current = lang.local === change.lang);
        this.document.querySelector('body').setAttribute('dir', this.isRtl(change.lang) ? 'rtl' : 'ltr');
      }
    )
  }

  public setLanguage(local: string) {
    this.translate.use(local);
  }

  private isRtl(local): boolean {
    const language = this.languages.find(lang => lang.local === local);
    return language && language.dir === 'rtl';
  }

}
