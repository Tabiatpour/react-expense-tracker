import { Header } from "../components/Header";
import { Balance } from "../components/Balance";
import { IncomeExpenses } from "../components/IncomeExpenses";
import { AddTransaction } from "../components/AddTransaction";
import { TransactionList } from "../components/TransactionList";
import { GlobalProvider } from "../context/GlobalState";

export default function ExpenseTracker() {
    return (
        <GlobalProvider>
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpenses />
                <AddTransaction />
                <TransactionList />
            </div>
        </GlobalProvider>
    )
}