import { useState } from "react";

export default function AcessoBancario() {
  const [estaLogado, setEstaLogado] = useState(false);

  const gerenciarLogin = () => {
    setEstaLogado(!estaLogado);
  };

  return (
    <div>
      {estaLogado ? (
        <>
          <button onClick={gerenciarLogin}>Sair do Sistema</button>
        </>
      ) : (
        <button onClick={gerenciarLogin}>Fazer Login</button>
      )}
    </div>
  );
}
