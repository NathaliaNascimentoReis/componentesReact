import { useState } from "react";

export default function Disjuntor() {
  const [ligado, setLigado] = useState(false);

  return (
    <button onClick={() => setLigado(!ligado)}>
      <p> {ligado ? "SISTEMA ON" : "SISTEMA OFF"}</p>
    </button>
  );
}
