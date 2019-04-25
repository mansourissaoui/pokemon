/**
 * this class is used to save all information about pokemon list page
 * it useful when we back from pokemon detail page (we find the same filter and we back to the same page index)
 */
export class Page {
  currentPageSize: number ;
  currentPage: number;
  searchingInput: string;
  selectedCategory: string;
  collectionSize: number;
}
