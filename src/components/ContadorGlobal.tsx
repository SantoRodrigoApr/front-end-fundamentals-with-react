"use client";

import {useContext} from "react";

import {ContadorContext} from "@/src/context/ContadorContext";

import {Button} from "@/src/components/Button";

export const ContadorGlobal = () => {
    const { contador, setContador } = useContext(ContadorContext)

    return <div>
        <h2 className="text-2xl">Contador</h2>
        <p>Número atual: {contador}</p>
        <div className="flex grid-cols-2 gap-x-2 gap-y-2">
            <Button
                onClick={() => {
                    console.log(setContador(contador === null ? null : contador));
                }}
            >+1</Button>
            <Button
                onClick={() => {
                    if (contador !== null) {
                        setContador(c => c === null ? null : c + 2);
                        setContador(c => c === null ? null : c + 1);

                    }
                }}
            >+3</Button>
            <Button
                onClick={() => {
                    setContador(c => c === null ? null : c + 2);
                }}
            >-2</Button>
            <button className="border rounded grid px-5.5 py-1"
                    onClick={() => {setContador( 0);}}>
                Reset
            </button>
        </div>
        {/*<div className="flex py-2 gap-x-2">*/}
        {/*    <input value={coisa} onChange={*/}
        {/*        (e) => setCoisa(e.target.value)*/}
        {/*    } className="border px-10 border-gray-500 rounded"/>*/}
        {/*    <Button*/}
        {/*        onClick={() => {setCoisa('')}}*/}
        {/*    >Limpar</Button>*/}
        {/*</div>*/}
    </div>

}




