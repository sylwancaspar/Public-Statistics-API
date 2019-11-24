export class Query {

    constructor(public code:string, public selection:{
        filter:string;
        values:string[];

    }){}
}
