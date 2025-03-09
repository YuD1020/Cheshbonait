class Expence {
    provider: String;
    category: String;
    sum: number;
    date: number;
    constructor({ provider, category, sum, date }: { provider: String, category: String, sum: number, date: number }) {
        this.provider = provider;
        this.category = category;
        this.sum = sum;
        this.date = date;
    }
}