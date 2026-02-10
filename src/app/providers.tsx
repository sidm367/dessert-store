"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { CartProvider } from "@/context/CartContext";
import { useState } from "react";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  // create query client once
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        {children}
      </CartProvider>
    </QueryClientProvider>
  );
}
