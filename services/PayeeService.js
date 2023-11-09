

class PayeeService {
    getAllPayees() {
      const localStore = localStorage.getItem('payees');
      return localStore ? JSON.parse(localStore) : [];
    }
  
    insertPayee(newPayee) {
      const payees = this.getAllPayees();
      payees.push(newPayee);
      localStorage.setItem('payees', JSON.stringify(payees));
    }
  }
  
  export default PayeeService;
  
