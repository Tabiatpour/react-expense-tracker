import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState();


  localStorage.setItem('text', text);
  localStorage.setItem('date', date);
  localStorage.setItem('amount', amount);



  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      // option,
      text,
      amount: +amount,
      date,
    }

    addTransaction(newTransaction);
  }



  return (
    <>
      <h3>تراکنش جدید</h3>
      <form onSubmit={onSubmit}>

        <div className="form-control">
          <label htmlFor="text">عنوان</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="عنوان مورد نظر..."
            required
            title="لطفا عنوان را وارد نمایید"
          // onInvalid={F => F.target.setCustomValidity('لطفا عنوان را وارد نمایید')}
          // oninvalid=" must "
          />
        </div>

        <div className="form-control">
          <label htmlFor="date">تاریخ</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)}
            required
            title="لطفا تاریخ را وارد نمایید" />
        </div>

        <div className="form-control">
          <label htmlFor="amount">
            مبلغ
            <br />
            (منفی: هزینه, مثبت: درآمد)
          </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="مبلغ مورد نظر..."
            required
            title="لطفا مبلغ را وارد نمایید" />
        </div>

        <button button className="btn" >
          ثبت تراکنش
        </button >
      </form >

    </>
  )
}
