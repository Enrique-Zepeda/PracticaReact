import React, { useEffect, useState } from 'react';
import { getTenis } from './ConnectApi.js';

export const TenisApi = () => {
  const [tenis, setTenis] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTenis({ filterBy: 'Tenis Rayo macuin' });
        setTenis(data);
      } catch (error) {
        console.error("Error cargando los datos de tenis:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Cargando...</div>;

  return (
    <>
      <h1>Tenis</h1>
      <hr />
      {tenis.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <img src={item.img}/>
          <p>{item.price}</p>
        </div>
      ))}
    </>
  );
};
