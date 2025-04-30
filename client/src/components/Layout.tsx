import { useId } from 'react';
import { Intro, IntroFooter } from './Intro';
import { StarField } from './StarField';
import { ThemeToggle } from './ThemeToggle';

export function Timeline({
  items = [],
}: {
  items?: Array<{ id: string; date: string; label: string }>;
}) {
  const id = useId();

  // Sort by most recent first if items are provided
  const sortedItems =
    items.length > 0
      ? [...items].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
      : [];

  return (
    <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-visible">
      {/* The existing timeline line */}
      <svg
        className="absolute top-0 left-[max(0px,calc(50%-18.125rem))] h-full w-1.5 lg:left-full lg:ml-1 xl:right-1 xl:left-auto xl:ml-0"
        aria-hidden="true"
      >
        <defs>
          <pattern id={id} width="6" height="8" patternUnits="userSpaceOnUse">
            <path
              d="M0 0H6M0 8H6"
              className="stroke-sky-900/10 xl:stroke-white/10 dark:stroke-white/10"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>

      {/* Add timeline markers if items are provided */}
      {sortedItems.length > 0 && (
        <div className="absolute top-32 left-[max(0px,calc(50%-18.625rem))] lg:left-full lg:ml-0.5 xl:right-0 xl:left-auto">
          {sortedItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group relative flex items-center py-4 pointer-events-auto"
            >
              <div className="absolute left-0 -translate-x-1/2 transform">
                <div className="h-3 w-3 rounded-full border-2 border-sky-300 bg-white group-hover:border-sky-400 dark:border-sky-400 dark:bg-gray-800 group-hover:dark:border-sky-300"></div>
              </div>
              <div className="ml-6 text-sm font-medium text-gray-500 group-hover:text-gray-700 dark:text-gray-400 group-hover:dark:text-gray-300">
                {item.label}
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function Glow() {
  const id = useId();

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-gray-950 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]">
      <svg
        className="absolute -bottom-48 left-[-40%] h-[80rem] w-[180%] lg:top-[-40%] lg:-right-40 lg:bottom-auto lg:left-auto lg:h-[180%] lg:w-[80rem]"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id={`${id}-desktop`} cx="100%">
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
            <stop offset="53.95%" stopColor="rgba(0, 71, 255, 0.09)" />
            <stop offset="100%" stopColor="rgba(10, 14, 23, 0)" />
          </radialGradient>
          <radialGradient id={`${id}-mobile`} cy="100%">
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)" />
            <stop offset="53.95%" stopColor="rgba(0, 71, 255, 0.09)" />
            <stop offset="100%" stopColor="rgba(10, 14, 23, 0)" />
          </radialGradient>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#${id}-desktop)`}
          className="hidden lg:block"
        />
        <rect
          width="100%"
          height="100%"
          fill={`url(#${id}-mobile)`}
          className="lg:hidden"
        />
      </svg>
      <div className="absolute inset-x-0 right-0 bottom-0 h-px bg-white mix-blend-overlay lg:top-0 lg:left-auto lg:h-auto lg:w-px" />
    </div>
  );
}

function FixedSidebar({
  main,
  footer,
}: {
  main: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <div className="relative flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0">
      <Glow />
      <div className="relative flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-x-hidden lg:overflow-y-auto lg:pl-[max(4rem,calc(50%-38rem))]">
        <div className="mx-auto max-w-lg lg:mx-0 lg:flex lg:w-96 lg:max-w-none lg:flex-col lg:before:flex-1 lg:before:pt-6">
          <div className="pt-20 pb-16 sm:pt-32 sm:pb-20 lg:py-20">
            <div className="relative">
              <StarField className="top-14 -right-44" />
              {main}
            </div>
          </div>
          <div className="flex flex-1 items-end justify-center pb-4 lg:justify-start lg:pb-6">
            {footer}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen dark:bg-gray-950 relative">
      <FixedSidebar main={<Intro />} footer={<IntroFooter />} />
      <ThemeToggle />
      <div className="relative flex-auto">
        <Timeline />
        <main className="space-y-20 py-20 sm:space-y-32 sm:py-32">
          {children}
        </main>
      </div>
    </div>
  );
}
