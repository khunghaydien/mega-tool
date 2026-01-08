import dynamic from "next/dynamic";
import { Suspense } from "react";

const Home = dynamic(() => import("@/pages/home"), {
    ssr: true,  
    loading: () => null,
});

export default function Page() {
    return (
        <Suspense fallback={null}>
            <Home />
        </Suspense>
    );
}
