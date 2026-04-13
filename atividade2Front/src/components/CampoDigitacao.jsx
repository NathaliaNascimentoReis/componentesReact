import { useState } from 'react';

export default function CampoDigitacao() {
    const [termo, setTermo] = useState();

    return (
        <>
            <h1>{termo}</h1>
            <input
                type="text"
                placeholder='Digite'
                value={termo}
                onChange={(e) => setTermo(e.target.value)}
            ></input>
        </>
    )
}
