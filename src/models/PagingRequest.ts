export class PagingRequest {
    PageSize: number = 10;
    PageNumber: number = 1;

    constructor() {
        this.PageNumber = 1;
        this.PageSize = 10;
    }
}