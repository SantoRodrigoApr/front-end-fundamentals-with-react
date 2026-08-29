import {ReactNode} from "react";
import ContadorProvider from "@/src/context/ContadorContext";

export default function Layout({
   children,
 }: Readonly<{
  children: ReactNode;
}>) {
  return (
      <ContadorProvider>{children}</ContadorProvider>
  );
}
