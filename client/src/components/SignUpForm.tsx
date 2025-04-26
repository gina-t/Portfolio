import { useId } from 'react';
import { Button } from './Button';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export function SignUpForm() {
  const id = useId()

  return (
    <form className="relative isolate mt-8 flex items-center pr-1">
      <label htmlFor={id} className="sr-only">
        Email address
      </label>
      <input
        required
        type="email"
        autoComplete="email"
        name="email"
        id={id}
        placeholder="Email address"
        className="peer w-0 flex-auto bg-transparent px-4 py-2.5 text-base text-white placeholder:text-gray-500 focus:outline-hidden sm:text-[0.8125rem]/6"
      />
      <Button 
        type="submit" 
        
        >
        Register for Resume
        <Link
          to="/register">
          <ChevronRightIcon
            className='h-3 w-3 inline-flex ml-1 text-gray-200 transition group-hover:translate-x-1'
            aria-hidden="true"
        />
        </Link>
        
      </Button>

      {/* Outer glow ring - appears on hover */}
      <div className="absolute inset-0 -z-10 rounded-lg transition peer-focus:ring-4 peer-focus:ring-sky-300/15" />
      {/* Inner ring - always visible but changes color on hover */}
      <div className="absolute inset-0 -z-10 rounded-lg bg-white/2.5 ring-1 ring-white/15 transition peer-focus:ring-sky-300" />
    </form>
  )
}



