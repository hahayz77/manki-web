import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { HeroUIProvider } from "@heroui/react";

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}) {
    return (
        <>
            <SessionProvider session={session}>
                <HeroUIProvider>
                    <Component {...pageProps} />
                </HeroUIProvider>
            </SessionProvider>
        </>
    );
}
