"use client";

import {ContadorContext} from "@/src/context/ContadorContext";
import {useContext} from "react";

export const ValorContadorGlobal = () => {
    const { contador } = useContext(ContadorContext)

    return <div className="grid gap-y-4">
        <p>Valor do meu Contador Global: {contador}</p>
    </div>

}




