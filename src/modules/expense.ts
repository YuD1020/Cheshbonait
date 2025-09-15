import { myDate } from "./myDate";

export class Expense {
  provider: String;
  category: String;
  sum: number;
  date: myDate;
  constructor({
    provider,
    category,
    sum,
    date,
  }: {
    provider: String;
    category: String;
    sum: number;
    date: myDate;
  }) {
    this.provider = provider;
    this.category = category;
    this.sum = sum;
    this.date = date;
  }
}
