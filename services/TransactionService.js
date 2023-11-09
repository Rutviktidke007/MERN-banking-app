import transactionHistory from "../database/transaction_history.json";

class TransactionService {

    getAllTransactions() {
        const localStore = localStorage.getItem('transaction_history');

        if (!localStore) {
            localStorage.setItem('transaction_history', JSON.stringify(transactionHistory));
        }

        return JSON.parse(localStorage.getItem('transaction_history'));
    }

    getId(){
        return JSON.parse(localStorage.getItem('transaction_history')).length + 1;
    }

    insertTransaction(newTransaction) {
        // Check if an object with the same id already exists
        const existingTransaction = transactionHistory.find(transaction => transaction.id === newTransaction.id);

        if (!existingTransaction) {
            transactionHistory.push(newTransaction);
            localStorage.setItem('transaction_history', JSON.stringify(transactionHistory));
        }
    }
}

export default TransactionService;
