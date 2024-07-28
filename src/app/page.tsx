import Hero from "./Hero";
import React from "react";
import Introduction from "@/app/Introduction/Introduction";

export default function Home() {
  return (
      <main className="min-h-screen relative ">
          <Hero/>
          <Introduction/>
      </main>
  );
}
