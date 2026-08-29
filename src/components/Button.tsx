"use client";

import {FC, MouseEventHandler, ReactNode} from "react";

type ButtonProps = {
    onClick: MouseEventHandler<HTMLButtonElement>;
    children: ReactNode
}

export const Button: FC<ButtonProps> = ({onClick, children}) => (
    <div>
        <button className="border border-blue-500 px-4 py-1 rounded cursor-pointer bg-blue-900 hover:bg-blue-500 text-[#ffe]"
        onClick={onClick}
    >
            {children}</button>
    </div>
)