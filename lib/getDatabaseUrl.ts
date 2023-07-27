import { cache } from 'react';

export const getDatabaseUrl = cache(() =>
  process.env.DATABASE_URL
    ? `https://app-dir.vercel.app` 
    : `http://localhost:${process.env.PORT ?? 3000}`,
);
