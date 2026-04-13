import { useState } from 'react';

export default function SenhaSecreta() {
    const textoSenha = 'REACT123';

    const [senha, setSenha] = useState();

    return (
        <>
            <input
                type="text"
                placeholder="Digite a senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}></input>

            <div>
                {senha === textoSenha ? (
                    <p style={{ color: "#1eff00" }}>Acesso Concedido!</p>
                ) : (
                    <p style={{ color: "#ff0000" }}>Acesso Negado!</p>
                )}
            </div>
        </>
    );
}
