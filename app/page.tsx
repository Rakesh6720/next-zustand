"use client";

import { usePersonStore } from "@/store"
import InputBar from "./_components/InputBar";

export default function Home() {
  const firstName = usePersonStore((state) => state.firstName);

  return (
    <main>
      <div>
        <InputBar />
      </div>
      <p>Hello, <strong>{firstName}!</strong></p>
    </main>
  )
}
