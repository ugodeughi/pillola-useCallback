import React, { useState, useCallback } from "react";

// Componente Button ottimizzato con React.memo
const Button = React.memo(({ onClick }) => {
  console.log("Button renderizzato");
  return <button className="btn btn-primary" onClick={onClick}>Incrementa</button>;
});

const Counter = () => {
  const [count, setCount] = useState(0);

  // useCallback impedisce la ricreazione della funzione ad ogni render
  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div className="container text-center">
      <h3>Conteggio: {count}</h3>
      <Button onClick={increment} />
    </div>
  );
};

export default Counter;