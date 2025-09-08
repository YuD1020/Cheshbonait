export class Expense {
    provider: string;
    category: string;
    sum: number;
    date: any;
  
    constructor({provider, category, sum, date}:{provider:string, category:string, sum:number, date:any}) {
      this.provider = provider;
      this.category = category;
      this.sum = sum;
      this.date = date;
    }
  }
  