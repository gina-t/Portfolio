import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

declare module 'react'
declare module 'react-dom'
declare module 'react-dom/client';
declare module 'react/jsx-runtime';
declare module '@vitejs/plugin-react';
declare module '@tailwindcss/vite';

export {};
