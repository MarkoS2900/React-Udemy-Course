import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [fitleredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  
  const filteredExpenses = props.expenses.filter(
    (x) => x.date.getFullYear().toString() === fitleredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangedSelectedYear={filterChangeHandler}
          selected={fitleredYear}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
