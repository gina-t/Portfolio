import { Layout } from '../components/Layout';
import { Timeline } from '../components/Layout';
import { article as Article, img as Img } from '../components/Content';


const HomePage = () => {
  
  return (
    <Layout>
      {/* Timeline component */}
      <Timeline />
      {/* Theme toggle button */}
      

      <div className="space-y-24">
        {/* Project 1 */}
        <Article id="project-1" date="2025-02-01">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            E-Commerce Platform
          </h2>
          <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
            A full-stack e-commerce application built with React, Node.js, and
            MongoDB. This project features a responsive design, user
            authentication, product search, cart functionality, and payment
            processing using Stripe.
          </p>
          <Img
            src="/images/project1.png"
            alt="E-commerce platform screenshot"
            className="mt-6"
          />
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
              React
            </span>
            <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900/30 dark:text-green-400">
              Node.js
            </span>
            <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
              MongoDB
            </span>
          </div>
          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/your-username/e-commerce"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-sky-500 hover:text-sky-600"
            >
              <svg
                className="mr-1 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View Code
            </a>
            <a
              href="https://demo-ecommerce.your-portfolio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-sky-500 hover:text-sky-600"
            >
              <svg
                className="mr-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Demo
            </a>
          </div>
        </Article>

        {/* Project 2 */}
        <Article id="project-2" date="2025-01-15">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Weather Dashboard
          </h2>
          <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
            A weather dashboard application that allows users to search for a
            city and view current weather conditions and a 5-day forecast. The
            app utilizes the OpenWeather API and localStorage to save search
            history.
          </p>
          <Img
            src="/images/project2.png"
            alt="Weather dashboard screenshot"
            className="mt-6"
          />
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
              JavaScript
            </span>
            <span className="rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
              CSS
            </span>
            <span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
              APIs
            </span>
          </div>
        </Article>

        {/* Skills Section */}
        <Article id="skills" date="2025-03-01">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Technical Skills
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">
                Frontend
              </h3>
              <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                <li>React, Redux, Next.js</li>
                <li>HTML5, CSS3, Tailwind CSS</li>
                <li>JavaScript, TypeScript</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">
                Backend
              </h3>
              <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                <li>Node.js, Express</li>
                <li>MongoDB, MySQL</li>
                <li>RESTful APIs</li>
                <li>GraphQL</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">
                Tools & Methods
              </h3>
              <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                <li>Git, GitHub</li>
                <li>Jest, React Testing Library</li>
                <li>Agile Development</li>
                <li>CI/CD, Docker</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">
                Other Skills
              </h3>
              <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-400">
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
                <li>Technical Writing</li>
                <li>Attention to Detail</li>
              </ul>
            </div>
          </div>
        </Article>

        {/* Contact Section */}
        <Article id="contact" date="2025-03-15">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
            I'm currently open to new opportunities. Whether you have a question
            or just want to say hello, feel free to reach out!
          </p>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <a
              href="mailto:your-email@example.com"
              className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm transition hover:bg-gray-50 dark:bg-white/[0.07] dark:hover:bg-white/[0.1]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Email
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  your-email@example.com
                </p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm transition hover:bg-gray-50 dark:bg-white/[0.07] dark:hover:bg-white/[0.1]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">
                  LinkedIn
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Connect with me
                </p>
              </div>
            </a>
          </div>
        </Article>
      </div>
    </Layout>
  );
};

export default HomePage;
