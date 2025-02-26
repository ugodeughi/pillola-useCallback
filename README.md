# useCallback in React

## Descrizione
`useCallback` è un hook di React che memorizza una funzione tra i render, evitando di ricrearla inutilmente. Questo è utile per ottimizzare le performance, specialmente quando la funzione viene passata come prop a componenti figli.

## Quando Usarlo?
Senza `useCallback`, una funzione dichiarata all'interno di un componente viene ricreata ad ogni render. Questo può causare inutili aggiornamenti nei componenti figli memorizzati con `React.memo`.

## Esempio di Codice Completo

```jsx
import React, { useState, useCallback } from "react";

// Componente Button ottimizzato con React.memo
const Button = React.memo(({ onClick }) => {
  console.log("Button renderizzato");
  return <button onClick={onClick}>Incrementa</button>;
});

const Counter = () => {
  const [count, setCount] = useState(0);

  // useCallback impedisce la ricreazione della funzione ad ogni render
  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <h3>Conteggio: {count}</h3>
      <Button onClick={increment} />
    </div>
  );
};

export default Counter;
```

## Perché Usare `useCallback`?
- ✅ Evita la ricreazione di funzioni tra i render
- ✅ Migliora le performance in combinazione con `React.memo`
- ✅ Perfetto per componenti che ricevono funzioni come prop

## Differenza tra `useCallback` e `useMemo`
- `useMemo` restituisce un **valore** memorizzato.
- `useCallback` restituisce una **funzione** memorizzata.

## Conclusione
`useCallback` aiuta a evitare ri-render inutili, ma **non va usato eccessivamente** senza un reale guadagno di performance.

---

📌 **Hai trovato utile questa guida? Condividila!** 🚀
