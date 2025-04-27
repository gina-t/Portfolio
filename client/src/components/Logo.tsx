import { useId } from 'react';
import logo from '../assets/logo.svg';

export function Logo(props: React.ComponentPropsWithoutRef<'div'>) {
  const id = useId();

  return (
    <div className="relative flex items-center" {...props}>
      <img src={logo} alt="Portfolio" className="h-12 relative -ml-2 mt-3 z-10" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
        viewBox="0 0 32 32"
      >
        <mask id={`${id}-m`} fill="#fff">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M31.75 18h-8.13a8 8 0 01-15.5 0H0a16 16 0 0031.75 0zm0-4h-8.13a8 8 0 00-15.5 0H0a16 16 0 0131.75 0z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M31.75 18h-8.13a8 8 0 01-15.5 0H0a16 16 0 0031.75 0zm0-4h-8.13a8 8 0 00-15.5 0H0a16 16 0 0131.75 0z"
          fill={`url(#${id}-g)`}
        />
        
      </svg>
    </div>
  );
}
