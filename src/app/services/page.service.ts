import {Injectable} from '@angular/core';
import {Page} from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  private page: Page;

  constructor() {
  }

  getPage(): Page {
    return (this.page) ? this.page : new Page();
  }

  setPage(page: Page) {
    this.page = page;
  }
}
