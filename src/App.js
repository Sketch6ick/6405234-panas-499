import React, { useState } from 'react';
import './App.css';


const shoesData = [
  {
    id: 1,
    name: 'Rick Owens',
    price: 22000,
    image: 'https://img.mytheresa.com/1094/1238/100/jpeg/catalog/product/71/P00835191.jpg', 
  },
  {
    id: 2,
    name: 'Birkenstock Boston',
    price: 4800,
    image: 'https://image.goxip.com/kxEBvewHHwmlk_pCFPQRCCnDYlc=/fit-in/500x500/filters:format(jpg):quality(80):fill(white)/https:%2F%2Fcdn-images.farfetch-contents.com%2F22%2F30%2F39%2F59%2F22303959_52167185_1000.jpg',
  },
  {
    id: 3,
    name: 'Timberlands',
    price: 8900,
    image: 'https://www.timberland.com.sg/wp-content/uploads/product/f23/10361713-HERO.jpg',
  },
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
    <div style={{ padding: '20px' }}>
      <h1>6405234ปาณัสม์ บัวเคล้า</h1>
      <input
        type="text"
        placeholder="ค้นหารองเท้า..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
      />
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredShoes.map(shoe => (
          <li key={shoe.id} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <img src={shoe.image} alt={shoe.name} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
            <div>
              <h2>{shoe.name}</h2>
              <p>{shoe.price} บาท</p>
              <button onClick={() => addToCart(shoe)} style={{ padding: '10px', backgroundColor: '#28a745', color: '#fff', border: 'none', cursor: 'pointer' }}>
                เพิ่มไปยังตะกร้า
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h2>ตะกร้าของคุณ</h2>
      <ul>
        {cart.length === 0 ? (
          <li>ไม่มีสินค้าในตะกร้า</li>
        ) : (
          cart.map((shoe, index) => (
            <li key={index}>
              {shoe.name} - {shoe.price} บาท
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default App;