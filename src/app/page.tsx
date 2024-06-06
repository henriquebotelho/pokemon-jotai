"use client";

import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const PokemonFetcher = dynamic(() => import('./components/PokemonFetcher'), { ssr: false });

const Home: React.FC = () => {
  const queryClient = useMemo(() => new QueryClient(), []);

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>Pokémon Fetcher</h1>
        <PokemonFetcher />
      </div>
    </QueryClientProvider>
  );
};

export default Home;
