import { useId } from 'react';
import logo from '../assets/logo.svg';

export function Logo(props: React.ComponentPropsWithoutRef<'div'>) {
  const id = useId();

  return (
    <div className="relative flex items-center" {...props}>
      <img src={logo} alt="Portfolio" className="h-17 relative -ml-2 z-10" />
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
        <defs>
          <linearGradient
            id={`${id}-g`}
            x1={15.88}
            y1={0}
            x2={15.88}
            y2={32}
            gradientUnits="userSpaceOnUse"
          >
          </linearGradient>
        </defs>
    </div>
  );
}
