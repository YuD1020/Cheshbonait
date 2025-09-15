import { MongodbOperations } from "../services/mongo-db/operations";
import { Expense } from "../modules/expense";
const operations = new MongodbOperations({ dbName: "bookkeeping", collectionName: "expenses" });

export const createExpense = async ({
  provider,
  category,
  sum,
  date,
}: {
  provider: String;
  category: String;
  sum: number;
  date: any;
}) => {
  const expense = new Expense({ provider: provider, category: category, sum: sum, date: date });
  console.log("------------------");
  console.log(expense);

  const response = await operations.addItem(expense);
  console.log("------------------");
  console.log(response);

  return response;
};
