import { Link } from 'react-router-dom';
import { IconLink } from './IconLink';
import { Logo } from './Logo';
import { SignUpForm } from './SignUpForm';


function BookIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M7 3.41a1 1 0 0 0-.668-.943L2.275 1.039a.987.987 0 0 0-.877.166c-.25.192-.398.493-.398.812V12.2c0 .454.296.853.725.977l3.948 1.365A1 1 0 0 0 7 13.596V3.41ZM9 13.596a1 1 0 0 0 1.327.946l3.948-1.365c.429-.124.725-.523.725-.977V2.017c0-.32-.147-.62-.398-.812a.987.987 0 0 0-.877-.166L9.668 2.467A1 1 0 0 0 9 3.41v10.186Z" />
    </svg>
  );
}

function GitHubIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg 
      viewBox="0 0 16 16"   
      aria-hidden="true" 
      fill="currentColor" 
      {...props}>
      <path 
        d="M8 .198a8 8 0 0 0-8 8 7.999 7.999 0 0 0 5.47 7.59c.4.076.547-.172.547-.384 0-.19-.007-.694-.01-1.36-2.226.482-2.695-1.074-2.695-1.074-.364-.923-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.224 1.873.87 2.33.666.072-.518.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.954 0-.873.31-1.586.823-2.146-.09-.202-.36-1.016.07-2.118 0 0 .67-.214 2.2.82a7.67 7.67 0 0 1 2-.27 7.67 7.67 0 0 1 2 .27c1.52-1.034 2.19-.82 2.19-.82.43 1.102.16 1.916.08 2.118.51.56.82 1.273.82 2.146 0 3.074-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38A7.972 7.972 0 0 0 16 8.199a8 8 0 0 0-8-8Z" 
      />
    </svg>
  );
}

function LinkedInIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg 
      viewBox="0 0 20 20" 
      aria-hidden="true" 
      fill="currentColor" 
      {...props}>
      <path
        fillRule="evenodd"
        d="M19.7065 3H4.34844C3.62264 3 3.04199 3.58065 3.04199 4.30645V19.6935C3.04199 20.3903 3.62264 21 4.34844 21H19.6485C20.3743 21 20.9549 20.4194 20.9549 19.6935V4.27742C21.013 3.58065 20.4323 3 19.7065 3ZM8.35491 18.3H5.71297V9.73548H8.35491V18.3ZM7.01942 8.54516C6.14846 8.54516 5.4807 7.84839 5.4807 7.00645C5.4807 6.16452 6.17749 5.46774 7.01942 5.46774C7.86136 5.46774 8.55813 6.16452 8.55813 7.00645C8.55813 7.84839 7.91942 8.54516 7.01942 8.54516ZM18.371 18.3H15.7291V14.1484C15.7291 13.1613 15.7001 11.8548 14.3356 11.8548C12.942 11.8548 12.7388 12.9581 12.7388 14.0613V18.3H10.0968V9.73548H12.6807V10.9258H12.7097C13.0872 10.229 13.9291 9.53226 15.2356 9.53226C17.9356 9.53226 18.4291 11.2742 18.4291 13.6548V18.3H18.371Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Intro() {
  return (
    <>
      <div>
        <Link to="/">
          <Logo className="inline-block h-8 w-auto" />
        </Link>
      </div>
      <h1 className="mt-14 font-display text-4xl/tight font-light text-white">
        Dr Gina Tsanaktsidis{' '}
        <span className="text-sky-300">
          Software Developer and Ophthalmologist
        </span>
      </h1>
      <p className="mt-4 text-sm/6 text-gray-300">
        Full stack software developer with strong proficiency in TypeScript and
        React. Ophthalmic surgeon with subspecialty surgical training in
        diseases of the retina. Currently employed in the health care sector,
        with a view to fully transferring to a frontend developer role.
      </p>
      <p className="mt-4 text-sm/6 text-gray-300">
        Successfully completed the Coding Boot Camp at University of Sydney
        February 2025. Demonstrated ability to design and implement
        user-focused, scalable, responsive, high-quality web applications.
      </p>
      <p className="mt-4 text-sm/6 text-gray-300">
        Awarded an MBBS at Flinders University in 1993 and subsequently trained
        at the Sydney Eye Hospital, becoming a fellow of the Royal Australian
        and New Zealand College of Ophthalmologists in January 2001.
        Successfully completed two fellowships in vitreoretinal surgery at
        Westmead Hospital, Sydney and The Western Eye Hospital, London.
      </p>
      <p className="mt-4 text-sm/6 text-gray-300">
        I believe the diversity of my experience can positively contribute to
        your team, and that I can successfully leverage my analytical and
        problem solving abilities to a software developer role.
      </p>
      <p className="mt-4 text-sm/6 text-gray-300">
        I excel in critical thinking, pattern detection, time critical decision
        making and problem solving, and thrive in high pressure environments to
        deliver accurate and reproducible outcomes. I can work collaboratively
        due to my vast experience working in the operating theatre or
        individually due to my exceptional motivation and singular focus.
      </p>
      <SignUpForm />
      <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
        <IconLink to="/resume.pdf" icon={BookIcon} className="flex-none">
          Documentation
        </IconLink>
        <IconLink to="https://github.com/gina-t" icon={GitHubIcon} className="flex-none">
          GitHub
        </IconLink>
      </div>
    </>
  );
}

export function IntroFooter() {
  return (
    <p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500">
      Brought to you by{' '}
      <IconLink 
        to="https://www.linkedin.com/in/dr-gina-tsanaktsidis-072020b8" 
        icon={LinkedInIcon} 
        compact
        className="flex-none"
      >
        Dr Gina Tsanaktsidis
      </IconLink>
    </p>
  );
}
