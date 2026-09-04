"use client";

import {useEffect, useState} from "react";
import {Button} from "@/src/components/Button";

export const Contador = () => {
    const [contador, setContador] = useState(0);
    const [coisa, setCoisa] = useState('');

    useEffect(() => {
        console.log("Comtador atualizado");
    }, [contador]);


    useEffect(() => {
        console.log("Coisa atualizado");
    }, [coisa]);

    return <div>
        <h2 className="text-2xl">Contador</h2>
        <p>Número atual: {contador}</p>
        <div className="flex grid-cols-2 gap-x-2 gap-y-2">
            <Button
                    onClick={() => {
                        console.log(setContador(contador + 1));
                    }}
            >+1</Button>
            <Button
                    onClick={() => {
                        setContador((c: number): number => (c ?? 0) + 2);
                        setContador((c: number): number => (c as number) + 1);
                    }}
            >+3</Button>
            <Button
                    onClick={() => {
                        setContador((c: number): number => c - 2);
                    }}
            >-2</Button>
            <button className="border rounded grid px-5.5 py-1"
            onClick={() => {setContador( 0);}}>
                Reset
            </button>
        </div>
        <div className="flex py-2 gap-x-2">
            <input value={coisa} onChange={
                (e) => setCoisa(e.target.value)
            } className="border px-10 border-gray-500 rounded"/>
            <Button
                onClick={() => {setCoisa('')}}
            >Limpar</Button>
        </div>
    </div>
}