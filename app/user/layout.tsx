import React from 'react';

export const metadata = {
  title: 'Static Data',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>{children}</div>
  );
}
