'use client';
import { Suspense } from "react";

export default function About() {
    return (
        <Suspense fallback={null}>
            <div>About</div>
        </Suspense>
    );
}
