"use client";

import {FC} from "react";
import {useParams} from "next/navigation";

type MeuNomeProps={name : string, age: number, birthDate: Date};

export const MeuNome: FC <MeuNomeProps> = (props) => {
    // return props.name === "Rodrigo" && <p>{props.name} {props.age}</p>;
    const {name, age, birthDate} = props;
    const params = useParams();
    console.log(params);
    return (
        <>
            <p>Sou o {name} tenho {age} anos e nas em {birthDate.toLocaleDateString("pt-BR")}</p>
        </>
    );
};