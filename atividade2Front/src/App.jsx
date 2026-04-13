import BotaoVerde from './components/BotaoVerde';
import CabecalhoLoja from './components/CabecalhoLoja.jsx';
import BotaoUniversal from './components/BotaoPolivalente.jsx';
import CrachaVisitante from './components/CrachaVisitante.jsx';
import AvisoSistema from './components/AvisoSistema.jsx';
import Contador from './components/Contador.jsx';
import Disjuntor from './components/Disjuntor.jsx';
import CampoDigitacao from './components/CampoDigitacao.jsx';
import AcessoBancario from './components/AcessoBancario.jsx';
import SenhaSecreta from './components/SenhaSecreta.jsx';

export default function App() {
    const visitantes = [
        {
            id: 1,
            nome: 'Priscila',
            nivelDeAcesso: 'Internacional',
        },
        {
            id: 2,
            nome: 'Ricardo',
            nivelDeAcesso: 'Internacional',
        },
    ];

    const textoBotao = 'cade o 100 fessor';

    return (
        <>
            <BotaoVerde></BotaoVerde>
            <CabecalhoLoja></CabecalhoLoja>
            <BotaoUniversal textoBotao={textoBotao}></BotaoUniversal>

            <section>
                {visitantes.map((visitante) => (
                    <CrachaVisitante
                        key={visitante.id}
                        nome={visitante.nome}
                        nivelDeAcesso={visitante.nivelDeAcesso}></CrachaVisitante>
                ))}
            </section>

            <AvisoSistema mensagem="Cuidado ⚠️" corAlerta="yellow" />

            <Contador></Contador>
            <Disjuntor></Disjuntor>
            <CampoDigitacao></CampoDigitacao>
            <AcessoBancario></AcessoBancario>
            <SenhaSecreta></SenhaSecreta>
        </>
    );
}
