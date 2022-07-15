import { useState } from "react";

import { UserConsumer } from "./context";

function DepositComponent() {
  const [deposit, setDeposit] = useState(0);

  return (
    <UserConsumer>
      {({ name, email, balance, updateBalance }) => {

        const submitDeposit = () => {
          console.log('here');
          updateBalance(deposit);
        };

        const updateDeposit = (event) => setDeposit(parseFloat(event.target.value));

        return (
          <>
            <h1>Balance</h1>
            <label>Name</label>
            <p> {name}</p>
            <br />
            <label>Email</label>
            <p> {email}</p>
            <br />
            <label>Balance</label>
            <p> {balance}</p>
            <br />
            <h1>Deposits</h1>
            <br />
            <button type="submit" onClick={submitDeposit}>
              Submit Deposit
            </button>
            <div>
              <label name="amount">amount</label>
              <input
                type="text"
                id="amount"
                name="amount"
                placeholder="$ 0.00"
                onChange={updateDeposit}
              />
            </div>
          </>
        );
      }}
    </UserConsumer>
  );
}

export default DepositComponent;
