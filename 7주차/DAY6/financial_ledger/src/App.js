import { useState } from "react";
import PaymentForm from "./components/PaymentForm";
import PocketList from "./components/PocketList/PocketList";

function App() {
  const [list, setList] = useState([]);
  // const dummy = [
  //   {
  //     id: 1,
  //     name: '바나나',
  //     price: 3000,
  //     spendType: 'food',
  //     date: new Date(),
  //     memo: 'E사마트에서 구입',
  //     repurchase: true,
  //   },
  //   {
  //     id: 2,
  //     name: 'Mac북',
  //     price: 5000000,
  //     spendType: 'goods',
  //     date: new Date(),
  //     memo: '중고마켓에서 구입',
  //     repurchase: false,
  //   },
  //   {
  //     id: 3,
  //     name: '맨투맨 티셔츠',
  //     price: 10000,
  //     spendType: 'clothes',
  //     date: new Date(),
  //     memo: '',
  //     repurchase: false,
  //   },
  //   {
  //     id: 4,
  //     name: '구름 헤어핀',
  //     price: 2000,
  //     spendType: 'goods',
  //     date: new Date(),
  //     memo: 'OO마켓에서 구입',
  //     repurchase: false,
  //   }
  // ]

  const getData = (data) => {
    setList((prevListState) => [
      {
        id: Math.random().toString(),
        name: data.name,
        price: data.price,
        spendType: data.spendType,
        date: data.today,
        memo: data.memo,
      },
      ...prevListState
    ])
  }

  return (
    <div className="App">
      <PaymentForm getData={getData} />
      <PocketList listItems={list} />
    </div>
  );
}

export default App;
