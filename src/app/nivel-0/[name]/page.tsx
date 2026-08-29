import { MeuNome } from "@/src/components/MeuNome";
import { Hobbies } from "@/src/components/Hobbies";
import {Imagem} from "@/src/components/Imagem";
import Link from "next/link";

type PageProps = {
     params: Promise<{ name: string }>;
};

const Page = async ({params}: PageProps) => {
    const { name } = await params;

    console.log("Hello "+ name);

    return (
        <div className="p-4 grid gap-y-4">
            <MeuNome name={name} age={32} birthDate={new Date(1994, 3, 24)} />
            <Hobbies />
            <div>
                <p>Gosto de:</p>
            </div>
            <Imagem />
            <Link className="underline" href="/nivel-0">Voltar</Link>
        </div>
    )
};
export default Page;




