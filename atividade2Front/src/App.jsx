import BotaoVerde from "./components/BotaoVerde";
import CabecalhoLoja from "./components/CabecalhoLoja.jsx";
import BotaoUniversal from "./components/BotaoPolivalente.jsx";
import CrachaVisitante from "./components/CrachaVisitante.jsx";

export default function App() {
  const visitantes = [
    {
      id: 1,
      nome: "Priscila",
      nivelDeAcesso: "Internacional",
    },
    {
      id: 2,
      nome: "Ricardo",
      nivelDeAcesso: "Internacional",
    },
  ];

  const textoBotao = "qwqwq";

  return (
    <>
      <BotaoVerde></BotaoVerde>
      <CabecalhoLoja></CabecalhoLoja>
      <BotaoUniversal texto={textoBotao}></BotaoUniversal>

      <section>
        {visitantes.map((visitante) => (
          <CrachaVisitante
            key={visitante.id}
            nome={visitante.nome}
            nivelDeAcesso={visitante.nivelDeAcesso}
          ></CrachaVisitante>
        ))}
      </section>
    </>
  );
}
