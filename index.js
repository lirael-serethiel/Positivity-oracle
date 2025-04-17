import { useState } from 'react';

const elements = [
  { name: 'Water', message: "You don’t need to be calm to be whole. Even tides are sacred." },
  { name: 'Fire', message: "You are allowed to burn without explanation." },
  { name: 'Air', message: "Even when the winds shift, you are still held by breath." },
  { name: 'Earth', message: "You are allowed to root and rise in your own time." },
  { name: 'Aether', message: "You’ve been listening to silence—and it’s been speaking back." },
];

export default function Home() {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(to bottom right, #ffffff, #fef3c7)',
      color: '#333',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>The Positivity Oracle</h1>
      <p style={{ fontStyle: 'italic', marginBottom: '2rem' }}>by Serethiel</p>
      {!selected ? (
        <>
          <p>Choose your element:</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', maxWidth: '300px', marginTop: '1rem' }}>
            {elements.map((el) => (
              <button key={el.name} onClick={() => setSelected(el)} style={{
                background: '#fff',
                padding: '1rem',
                borderRadius: '1rem',
                border: '1px solid #fcd34d',
                cursor: 'pointer'
              }}>
                {el.name}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div style={{
          marginTop: '2rem',
          background: 'rgba(255,255,255,0.7)',
          padding: '1.5rem',
          borderRadius: '1rem',
          maxWidth: '500px'
        }}>
          <h2 style={{ fontSize: '1.5rem' }}>{selected.name}</h2>
          <p style={{ marginTop: '1rem' }}>{selected.message}</p>
          <button onClick={() => setSelected(null)} style={{ marginTop: '1.5rem', textDecoration: 'underline', color: '#ca8a04' }}>
            Choose again
          </button>
        </div>
      )}
    </div>
  );
}
