"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const QueryProvider = ({ children }) => {
  const queryClinet = new QueryClient();
  return (
    <QueryClientProvider client={queryClinet}>{children}</QueryClientProvider>
  );
};
