export interface PagingResponse {
    Results: any[],
    CurrentPage: number,
    PageCount: number,
    PageSize: number,
    RowCount: number,
    FirstRowOnPage: number,
    LastRowOnPage: number
}