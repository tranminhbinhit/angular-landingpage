import { PagingResponse } from "./PagingResponse";

export class BasePagingPage { 
    ListData: any[];
    PageNumber: number = 1;
    PageSize: number = 1;
    RowCount: number = 0;

    constructor () {

    }

    setDataPagging(res : any) {
        const dataRes = res.Data;
        this.ListData = dataRes.Results;
        this.PageSize = dataRes.PageSize;
        this.RowCount = dataRes.RowCount;
    }

    setData(res: any){
        const dataRes = res.Data;
        this.ListData = dataRes;
        this.RowCount = dataRes.length;
    }
}