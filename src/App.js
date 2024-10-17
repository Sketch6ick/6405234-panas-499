import React, { useState } from 'react';

const shoesData = [
  { id: 1, name: 'Rick Owens', price: 22900 },
  { id: 2, name: 'Birkenstock', price: 4800 },
  { id: 3, name: 'Timberland', price: 8900 },
];

function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addToCart = (shoe) => {
    setCart([...cart, shoe]);
  };

  const filteredShoes = shoesData.filter(shoe => 
    shoe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>ร้านรองเท้า</h1>
      <input
        type="text"
        placeholder="ค้นหารองเท้า..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredShoes.map(shoe => (
          <li key={shoe.id}>
            {shoe.name} - {shoe.price} บาท
            <button onClick={() => addToCart(shoe)}>เพิ่มไปยังตะกร้า</button>
          </li>
        ))}
      </ul>
      <h2>ตะกร้าของคุณ</h2>
      <ul>
        {cart.map((shoe, index) => (
          <li key={index}>{shoe.name} - {shoe.price} บาท</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
