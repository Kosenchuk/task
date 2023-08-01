import React, {useEffect, useState} from 'react';
import {Select, Space} from 'antd';
import task from '../mocks/task2.json';

interface Item {
   id: number,
   price: number,
   currency: string
}

const currencies: Array<string> = Array
    .from(new Set(Object
        .keys(task['currencies-pairs'])
        .map(item => item.split('-'))
        .flat()))

export const DataCalculation: React.FC = () => {
   const [items, setItems] = useState<Array<Item>>(task['data']);
   const [currenciesPairs, setCurrenciesPairs] = useState<{[key: string]: number}>(task['currencies-pairs']);
   const [selectedItems, setSelectedItem] = useState([]);
   const [selectedCurrency, setSelectedCurrency] = useState<string>(currencies[0]);
   const [totalPrice, setTotalPrice] = useState(0);

   useEffect(() => {
      if (!selectedItems.length) {
         setTotalPrice(0);
      } else {
         const totalPrice = selectedItems.reduce((acc, itemIndex) => {
            const {currency, price} = items[itemIndex];

            if (selectedCurrency === currency) {
               acc += items[itemIndex].price;
            } else {
               acc += currenciesPairs[`${currency}-${selectedCurrency}`] * price;
            }

            return acc;
         }, 0);

         setTotalPrice(totalPrice);
      }
   }, [selectedItems, selectedCurrency]);

   return <Space wrap direction='vertical' className='calculation'>
      <h3 className='title'>Total Price - <span>{totalPrice}</span></h3>
      <Space wrap direction='horizontal'>
         <h3 className='title'>Currency - </h3>
         <Select
             placeholder='Currency'
             style={{ width: 150 }}
             onChange={setSelectedCurrency}
             defaultValue={selectedCurrency}
             options={currencies.map((currency) => ({ label: currency, value: currency }))}
         />
      </Space>
      <Space wrap direction='horizontal' align='start'>
         <h3 className='title'>Selected Items - </h3>
         <Select
             mode="multiple"
             placeholder="Items List"
             onChange={setSelectedItem}
             style={{ width: 150 }}
             options={items.map((item, index) => ({ label: `Item ${item.id}`, value: index }))}
         />
      </Space>
   </Space>
};