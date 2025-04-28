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

declare module 'react';
declare module 'react-dom';
declare module 'react-dom/client';
declare module 'react/jsx-runtime';

declare module '@vitejs/plugin-react' {
  import { Plugin } from 'vite';
  function reactPlugin(options?: unknown): Plugin;
  export default reactPlugin;
}

declare module '@tailwindcss/vite' {
  import { Plugin } from 'vite';
  function tailwindPlugin(options?: unknown): Plugin;
  export default tailwindPlugin;
}

declare module 'express';
declare module 'jsonwebtoken';
declare module 'bcrypt';
declare module 'cors';
declare module 'mongoose';

export {};
