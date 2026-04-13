export default function AvisoSistema({ mensagem, corAlerta }) {
    return <div style={{ color: corAlerta }}>{mensagem}</div>;
}
