export class myDate {
   year: number;
    month: number;
    day: number;
   
    constructor({ year,month,day}: { year: number,month: number,day: number}) {
        this.year = year;
        this.month = month;
        this.day = day;
      
    }
    toString() {
        return `${this.day}-${this.month}-${this.year}`;
      }
      
      
}


