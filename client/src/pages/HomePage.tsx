import { Layout } from '../components/Layout';
import { Timeline } from '../components/Layout';
import { article as Article } from '../components/Content';
import interstitial from '../assets/interstitial.png';
import plant_mama from '../assets/plant_mama.png';
import github_actions from '../assets/github_actions.png';
import cypress_testing from '../assets/cypress_testing.png';
import graphql from '../assets/graphql.png';
import weather from '../assets/weather.png';
import decibel from '../assets/decibel.png';
import social_network from '../assets/social_network.png';
import kanban from '../assets/kanban.png';
import candidate_search from '../assets/candidate_search.png';

const HomePage = () => {
  return (
    <Layout>
      <Timeline />
      <div className="space-y-24">
        {/* Project 1 */}
        <Article id="project-1" date="2025-04-06">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Interstitial
          </h2>
          <p className="mt-2 text-base text-gray-900 dark:text-gray-100">
            A responsive, full-stack health app built with MERN and TypeScript.
            Interstitial features:
          </p>
          <ul className="mt-2 space-y-1 pl-2 text-sm text-gray-700 dark:text-gray-300 list-disc marker:text-sky-300 marker:text-xs">
            <li className="ml-2">
              Real-time nutrition data lookup using FatSecret Platform REST API
            </li>
            <li className="ml-2">
              Personalized food favourites and calorie tracking
            </li>
            <li className="ml-2">
              Evidence-based educational content about nutrition and exercise
            </li>
            <li className="ml-2">Secure user authentication</li>
            <li className="ml-2">
              Responsive and modern user interface for mobile and desktop
            </li>
          </ul>
          <img
            src={interstitial}
            alt=""
            className="mt-6 rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 md:max-w-md lg:max-w-none lg:w-[48rem]"
          />
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-100 px-2 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-sky-300">
              React
            </span>
            <span className="rounded-full bg-purple-100 px-2 py-1 text-sm font-medium text-fuchsia-800 dark:bg-purple-900/30 dark:text-purple-400">
              TypeScript
            </span>
            <span className="rounded-full bg-gray-100 px-2 py-1 text-sm font-medium text-gray-800 dark:bg-gray-900/30 dark:text-gray-400">
              Node.js/Express.js
            </span>
            <span className="rounded-full bg-indigo-100 px-2 py-1 text-sm font-medium text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400">
              MongoDB
            </span>
          </div>
          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/gina-t/interstitial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-sky-500 hover:text-sky-600"
            >
              <svg
                className="ml-1 mr-1 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View Code
            </a>
            <a
              href="https://interstitial.onrender.com"
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
        <Article id="project-2" date="2025-02-20">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Plant Mama
          </h2>
          <p className="mt-2 text-base text-gray-900 dark:text-gray-100">
            A scalable user-focused e-commerce app built with MERN and
            TypeScript. Plant Mama features:
          </p>
          <ul className="mt-2 space-y-1 pl-2 text-sm text-gray-700 dark:text-gray-300 list-disc marker:text-sky-300 marker:text-xs">
            <li className="ml-2">Secure user authentication</li>
            <li className="ml-2">Product search and filtering</li>
            <li className="ml-2">Shopping cart and checkout process</li>
            <li className="ml-2">Order history and tracking</li>
            <li className="ml-2">Stripe online secure payment processing</li>
            <li className="ml-2">
              Responsive and modern user interface for mobile and desktop
            </li>
          </ul>
          <img
            src={plant_mama}
            alt=""
            className="mt-6 rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 md:max-w-md lg:max-w-none lg:w-[48rem]"
          />
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-100 px-2 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-sky-300">
              React
            </span>
            <span className="rounded-full bg-purple-100 px-2 py-1 text-sm font-medium text-fuschia-800 dark:bg-purple-900/30 dark:text-purple-400">
              TypeScript
            </span>
            <span className="rounded-full bg-cyan-100 px-2 py-1 text-sm font-medium text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400">
              Apollo GraphQL
            </span>
            <span className="rounded-full bg-indigo-100 px-2 py-1 text-sm font-medium text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400">
              MongoDB
            </span>
          </div>
          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/gina-t/plant-mama-deployed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-sky-500 hover:text-sky-600"
            >
              <svg
                className="ml-1 mr-1 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View Code
            </a>
            <a
              href="https://plant-mama-deployed.onrender.com"
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

        {/* Project 3 */}
        <Article id="project-3" date="2025-01-27">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            GitHub Actions Pipeline
          </h2>
          <p className="mt-2 text-base text-gray-900 dark:text-gray-100">
            Two CI/CD pipelines created using GitHub Actions. The test-on-pr.yml
            is triggered when a pull request is submitted to Develop branch, and
            automatically executes Cypress component testing. The
            deploy-to-render.yml is triggered when a pull request is submitted
            to Main branch and merged, and automatically deploys the app to
            Render. GitHub Actions Pipeline features:
          </p>
          <ul className="mt-2 space-y-1 pl-2 text-sm text-gray-700 dark:text-gray-300 list-disc marker:text-sky-300 marker:text-xs">
            <li className="ml-2">
              GitHub Actions Workflows: Automated pipelines that trigger on
              specific events
            </li>
            <li className="ml-2">
              Automatically runs Cypress component tests when pull requests are
              opened to the Develop branch
            </li>
            <li className="ml-2">
              Automatically deploys the app to Render when pull requests are
              merged into the Main branch
            </li>
            <li className="ml-2">
              Uses GitHub Secrets to securely store sensitive information
            </li>
          </ul>
          <img
            src={github_actions}
            alt=""
            className="mt-6 rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 md:max-w-md lg:max-w-none lg:w-[48rem]"
          />
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-100 px-2 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-sky-300">
              React
            </span>
            <span className="rounded-full bg-purple-100 px-2 py-1 text-sm font-medium text-fuchsia-800 dark:bg-purple-900/30 dark:text-purple-400">
              TypeScript
            </span>
            <span className="rounded-full bg-gray-100 px-2 py-1 text-sm font-medium text-gray-800 dark:bg-gray-900/30 dark:text-gray-400">
              Node.js/Express.js
            </span>
            <span className="rounded-full bg-indigo-100 px-2 py-1 text-sm font-medium text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400">
              MongoDB
            </span>
            <span className="rounded-full bg-emerald-100 px-2 py-1 text-sm font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
              CI/CD
            </span>
          </div>
          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/gina-t/github-actions-pipeline"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-sky-500 hover:text-sky-600"
            >
              <svg
                className="ml-1 mr-1 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View Code
            </a>
            <a
              href="https://github-actions-pipeline.onrender.com"
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

        {/* Project 4 */}
        <Article id="project-4" date="2025-01-21">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Cypress Test Suite
          </h2>
          <p className="mt-2 text-base text-gray-900 dark:text-gray-100">
            Component and end-to-end testing suite for a React app using
            Cypress. The test suite features:
          </p>
          <ul className="mt-2 space-y-1 pl-2 text-sm text-gray-700 dark:text-gray-300 list-disc marker:text-sky-300 marker:text-xs">
            <li className="ml-2">Component tets for UI elements</li>
            <li className="ml-2">Complete user flow testing</li>
          </ul>
          <img
            src={cypress_testing}
            alt=""
            className="mt-6 rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 md:max-w-md lg:max-w-none lg:w-[48rem]"
          />
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-100 px-2 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-sky-300">
              React
            </span>
            <span className="rounded-full bg-purple-100 px-2 py-1 text-sm font-medium text-fuchsia-800 dark:bg-purple-900/30 dark:text-purple-400">
              TypeScript
            </span>
            <span className="rounded-full bg-gray-100 px-2 py-1 text-sm font-medium text-gray-800 dark:bg-gray-900/30 dark:text-gray-400">
              Node.js/Express.js
            </span>
            <span className="rounded-full bg-indigo-100 px-2 py-1 text-sm font-medium text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400">
              MongoDB
            </span>
          </div>
          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/gina-t/cypress-test-suite"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-sky-500 hover:text-sky-600"
            >
              <svg
                className="ml-1 mr-1 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View Code
            </a>
            <a
              href="https://drive.google.com/file/d/1pdpG67JWtrdOXHFsJYH6_hLikpYOr4Sc/view?usp=sharing"
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

        {/* Project 5 */}
        <Article id="project-5" date="2025-01-16">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Book Search Engine
          </h2>
          <p className="mt-2 text-base text-gray-900 dark:text-gray-100">
            Refactor an existing Google Books RESTful API into a GrahpQL API
            built with Apollo. Book Search Engine features
          </p>
          <ul className="mt-2 space-y-1 pl-2 text-sm text-gray-700 dark:text-gray-300 list-disc marker:text-sky-300 marker:text-xs">
            <li className="ml-2">Secure user authentication</li>
            <li className="ml-2">
              Integration with Google Books API for comprehensive book searching
            </li>
            <li className="ml-2">
              Real-time search results with cover images and descriptions
            </li>
            <li className="ml-2">
              Intuitive user interface for search and save operations
            </li>
            <li className="ml-2">
              Modern API architecture using GraphQL with login, addUser,
              saveBook and removeBook mutations
            </li>
          </ul>
          <img
            src={graphql}
            alt=""
            className="mt-6 rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 md:max-w-md lg:max-w-none lg:w-[48rem]"
          />
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-100 px-2 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-sky-300">
              React
            </span>
            <span className="rounded-full bg-purple-100 px-2 py-1 text-sm font-medium text-fuchsia-800 dark:bg-purple-900/30 dark:text-purple-400">
              TypeScript
            </span>
            <span className="rounded-full bg-cyan-100 px-2 py-1 text-sm font-medium text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-400">
              Apollo GraphQL
            </span>
            <span className="rounded-full bg-indigo-100 px-2 py-1 text-sm font-medium text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400">
              MongoDB
            </span>
          </div>
          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/gina-t/book-search-engine"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-sky-500 hover:text-sky-600"
            >
              <svg
                className="ml-1 mr-1 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View Code
            </a>
            <a
              href="https://book-search-engine-1-bwrk.onrender.com"
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

        {/* Project 6 */}
        <Article id="project-6" date="2025-01-05">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Weather Dashboard
          </h2>
          <p className="mt-2 text-base text-gray-900 dark:text-gray-100">
            A weather dashboard app that calls
            https://openweathermap.org/forecast5 and displays a 5-day forecast
            for various cities using metric units, built with TypeScript.
            Weather Dashboard features:
          </p>
          <ul className="mt-2 space-y-1 pl-2 text-sm text-gray-700 dark:text-gray-300 list-disc marker:text-sky-300 marker:text-xs">
            <li className="ml-2">
              Real-time weather information for searched cities
            </li>
            <li className="ml-2">Extended weather forecast for 5 days</li>
            <li className="ml-2">
              Persistent storage of previously searcged cities
            </li>
            <li className="ml-2">Visual weather indicators</li>
            <li className="ml-2">
              Responsive and modern user interface for mobile and desktop
            </li>
          </ul>
          <img
            src={weather}
            alt=""
            className="mt-6 rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 md:max-w-md lg:max-w-none lg:w-[48rem]"
          />
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-purple-100 px-2 py-1 text-sm font-medium text-fuchsia-800 dark:bg-purple-900/30 dark:text-purple-400">
              TypeScript
            </span>
            <span className="rounded-full bg-gray-100 px-2 py-1 text-sm font-medium text-gray-800 dark:bg-gray-900/30 dark:text-gray-400">
              Node.js/Express.js
            </span>
          </div>
          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/gina-t/weather-dashboard-2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-sky-500 hover:text-sky-600"
            >
              <svg
                className="ml-1 mr-1 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View Code
            </a>
            <a
              href="https://weather-dashboard-2-tcuy.onrender.com"
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

        {/* Project 7 */}
        <Article id="project-7" date="2024-12-27">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Social Network API
          </h2>
          <p className="mt-2 text-base text-gray-900 dark:text-gray-100">
            A RESTful API server for a social network app built with Express.js,
            MongoDB, and Mongoose ODM. This server provides CRUD operations for
            users, thoughts (posts), reactions, and friend relationships through
            various API endpoints, enabling developers to build a complete
            social networking app frontend. Social Network API features:
          </p>
          <ul className="mt-2 space-y-1 pl-2 text-sm text-gray-700 dark:text-gray-300 list-disc marker:text-sky-300 marker:text-xs">
            <li className="ml-2">
              CRUD operations for users, thoughts, reactions, friends
            </li>
            <li className="ml-2">
              Complete, ready-to-use API endpoints for a social network app
            </li>
          </ul>
          <img
            src={social_network}
            alt=""
            className="mt-6 rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 md:max-w-md lg:max-w-none lg:w-[48rem]"
          />
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-purple-100 px-2 py-1 text-sm font-medium text-fuchsia-800 dark:bg-purple-900/30 dark:text-purple-400">
              JavaScript
            </span>
            <span className="rounded-full bg-gray-100 px-2 py-1 text-sm font-medium text-gray-800 dark:bg-gray-900/30 dark:text-gray-400">
              Node.js/Express.js
            </span>
            <span className="rounded-full bg-indigo-100 px-2 py-1 text-sm font-medium text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400">
              MongoDB
            </span>
          </div>
          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/gina-t/social-network-api"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-sky-500 hover:text-sky-600"
            >
              <svg
                className="ml-1 mr-1 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View Code
            </a>
            <a
              href="https://drive.google.com/file/d/1z0veiWE4IFFzh1ExgKp_k1dAR1pBnPc5/view?usp=sharing"
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

        {/* Project 8 */}
        <Article id="project-8" date="2024-12-23">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Decibel
          </h2>
          <p className="mt-2 text-base text-gray-900 dark:text-gray-100">
            A collaborative full-stack music streaming app using React + Vite +
            Tailwind CSS + PostgreSql + Sequelize ORM, that calls the Spotify
            API, and allows a user to register/login and subsequently listen to
            an artist/song/album and create/delete a playlist.
          </p>
          <ul className="mt-2 space-y-1 pl-2 text-sm text-gray-700 dark:text-gray-300 list-disc marker:text-sky-300 marker:text-xs">
            <li className="ml-2">Spotify API integration</li>
            <li className="ml-2">
              Personalized playlists with create, view, and delete functionality
            </li>
            <li className="ml-2">PostgresSQL database with Sequelize ORM</li>
            <li className="ml-2">Secure user authentication</li>
            <li className="ml-2">
              Responsive and modern user interface for mobile and desktop
            </li>
          </ul>
          <img
            src={decibel}
            alt=""
            className="mt-6 rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 md:max-w-md lg:max-w-none lg:w-[48rem]"
          />
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-100 px-2 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-sky-300">
              React
            </span>
            <span className="rounded-full bg-purple-100 px-2 py-1 text-sm font-medium text-fuchsia-800 dark:bg-purple-900/30 dark:text-purple-400">
              TypeScript
            </span>
            <span className="rounded-full bg-gray-100 px-2 py-1 text-sm font-medium text-gray-800 dark:bg-gray-900/30 dark:text-gray-400">
              Node.js/Express.js
            </span>
            <span className="rounded-full bg-pink-100 px-2 py-1 text-sm font-medium text-pink-800 dark:bg-pink-900/30 dark:text-pink-400">
              PostgreSQL
            </span>
          </div>
          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/gina-t/decibel-spa-fork"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-sky-500 hover:text-sky-600"
            >
              <svg
                className="ml-1 mr-1 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View Code
            </a>
            <a
              href="https://decibel-spa-fork.onrender.com"
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

        {/* Project 9 */}
        <Article id="project-9" date="2024-12-09">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Kanban Board
          </h2>
          <p className="mt-2 text-base text-gray-900 dark:text-gray-100">
            A full-stack Kanban board app built with React + Vite + Express.js +
            PostgreSQL + Sequelize ORM, that allows users to create and manage
            tasks in a kanban-style interface. Kanban Board features:
          </p>
          <ul className="mt-2 space-y-1 pl-2 text-sm text-gray-700 dark:text-gray-300 list-disc marker:text-sky-300 marker:text-xs">
            <li className="ml-2">Swimlanes</li>
            <li className="ml-2">
              Ticket management: create, view, edit and delete tickets
            </li>
            <li className="ml-2">User assignment to tickets</li>
            <li className="ml-2">Secure user authentication</li>
            <li className="ml-2">
              Responsive and modern user interface for mobile and desktop
            </li>
          </ul>
          <img
            src={kanban}
            alt=""
            className="mt-6 rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 md:max-w-md lg:max-w-none lg:w-[48rem]"
          />
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-100 px-2 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-sky-300">
              React
            </span>
            <span className="rounded-full bg-purple-100 px-2 py-1 text-sm font-medium text-fuchsia-800 dark:bg-purple-900/30 dark:text-purple-400">
              TypeScript
            </span>
            <span className="rounded-full bg-gray-100 px-2 py-1 text-sm font-medium text-gray-800 dark:bg-gray-900/30 dark:text-gray-400">
              Node.js/Express.js
            </span>
            <span className="rounded-full bg-pink-100 px-2 py-1 text-sm font-medium text-pink-800 dark:bg-pink-900/30 dark:text-pink-400">
              PostgreSQL
            </span>
          </div>
          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/gina-t/kanban-board"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-sky-500 hover:text-sky-600"
            >
              <svg
                className="ml-1 mr-1 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View Code
            </a>
            <a
              href="https://kanban-board-dvp7.onrender.com"
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

        {/* Project 10 */}
        <Article id="project-10" date="2024-12-02">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Candidate Search
          </h2>
          <p className="mt-2 text-base text-gray-900 dark:text-gray-100">
            A candidate search app that calls the GitHub API from the
            client-side and renders data in the browser, built with React +
            TypeScript + Tailwind CSS. Candidate Search features:
          </p>
          <ul className="mt-2 space-y-1 pl-2 text-sm text-gray-700 dark:text-gray-300 list-disc marker:text-sky-300 marker:text-xs">
            <li className="ml-2">
              GitHub API integration for searching and displaying user profiles
            </li>
            <li className="ml-2">
              Real-time search results with user avatars and profile details
            </li>
            <li className="ml-2">
              User interface for accepting or rejecting candidate profiles
            </li>
            <li className="ml-2">
              Context-based state management for saved candidates
            </li>
            <li className="ml-2">
              Responsive and modern user interface for mobile and desktop
            </li>
          </ul>
          <img
            src={candidate_search}
            alt=""
            className="mt-6 rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 md:max-w-md lg:max-w-none lg:w-[48rem]"
          />
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-blue-100 px-2 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-sky-300">
              React
            </span>
            <span className="rounded-full bg-purple-100 px-2 py-1 text-sm font-medium text-fuchsia-800 dark:bg-purple-900/30 dark:text-purple-400">
              TypeScript
            </span>
          </div>
          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/gina-t/candidate-search-spa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-sky-500 hover:text-sky-600"
            >
              <svg
                className="ml-1 mr-1 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View Code
            </a>
            <a
              href="https://candidate-search-spa-1.onrender.com"
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
              <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-200">
                <li>React</li>
                <li>HTML5, CSS3, Tailwind CSS</li>
                <li>JavaScript, TypeScript</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">
                Backend
              </h3>
              <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-200">
                <li>Node.js, Express.js</li>
                <li>Apollo GraphQL</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">
                Tools & Methods
              </h3>
              <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-200">
                <li>Git, GitHub</li>
                <li>Cypress</li>
                <li>Agile Development</li>
                <li>CI/CD</li>
                <li>Visual Studio Code</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white">
                Additional Skills
              </h3>
              <ul className="mt-2 space-y-1 text-gray-600 dark:text-gray-200">
                <li>Problem Solving</li>
                <li>Team Collaboration</li>
                <li>Attention to Detail</li>
                <li>Time Management</li>
                <li>Adaptability</li>
                <li>Medical Fluency</li>
              </ul>
            </div>
          </div>
        </Article>

        {/* Contact Section */}
        <Article id="contact" date="2025-04-20">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
            I'm currently open to new opportunities. Whether you have a question
            or just want to say hello, feel free to reach out.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <a
              href="mailto:ginadrcoder@gmail.com"
              className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm transition hover:bg-gray-50 dark:bg-white/[0.07] dark:hover:bg-white/[0.1]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400">
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
                  ginadrcoder@gmail.com
                </p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/dr-gina-tsanaktsidis-072020b8"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg bg-white p-4 shadow-sm transition hover:bg-gray-50 dark:bg-white/[0.07] dark:hover:bg-white/[0.1]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400">
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
