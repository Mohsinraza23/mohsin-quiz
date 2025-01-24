"use client"

import { useState } from "react"
import Quiz from "../../compoments/Quiz"
import Link from "next/link"
import { Button } from "../../compoments/ui/button"

const basicQuestions = [
    {
        id: 1,
        question: "What is Next.js built on top of?",
        options: ["Angular", "React", "Vue", "Svelte"],
        correctAnswer: "React",
      },
      {
        id: 2,
        question: "Which command is used to create a new Next.js app?",
        options: ["npx create-next-app", "npm create next", "npx next-init", "npm start"],
        correctAnswer: "npx create-next-app",
      },
      {
        id: 3,
        question: "Where do you define the custom app structure in Next.js?",
        options: ["_app.js", "index.js", "custom.js", "_document.js"],
        correctAnswer: "_app.js",
      },
      {
        id: 4,
        question: "Which file is used for customizing the HTML and body tags?",
        options: ["_app.js", "_document.js", "index.js", "next.config.js"],
        correctAnswer: "_document.js",
      },
      {
        id: 5,
        question: "What directory contains page components in Next.js?",
        options: ["/src", "/components", "/pages", "/app"],
        correctAnswer: "/pages",
      },
      {
        id: 6,
        question: "What is the default routing mechanism in Next.js?",
        options: ["Dynamic routing", "File-based routing", "Hash routing", "Manual routing"],
        correctAnswer: "File-based routing",
      },
      {
        id: 7,
        question: "Which file is required for Next.js to work?",
        options: ["_app.js", "index.js", "_document.js", "next.config.js"],
        correctAnswer: "index.js",
      },
      {
        id: 8,
        question: "What command is used to start the Next.js development server?",
        options: ["npm run dev", "npm start", "next build", "next deploy"],
        correctAnswer: "npm run dev",
      },
      {
        id: 9,
        question: "Which method is used for client-side navigation in Next.js?",
        options: ["Router.navigate", "Link component", "useHistory", "useRouter"],
        correctAnswer: "Link component",
      },
      {
        id: 10,
        question: "How do you define an API route in Next.js?",
        options: ["In /api folder", "In /routes folder", "In /server folder", "In /app folder"],
        correctAnswer: "In /api folder",
      },
      {
        id: 11,
        question: "Which file can be used to set global CSS styles?",
        options: ["styles.css", "global.css", "_app.js", "index.js"],
        correctAnswer: "global.css",
      },
      {
        id: 12,
        question: "What is used to configure Next.js settings?",
        options: ["next.config.js", "config.json", "settings.json", "webpack.config.js"],
        correctAnswer: "next.config.js",
      },
      {
        id: 13,
        question: "How are static files served in Next.js?",
        options: ["From the /public folder", "From the /static folder", "From the /assets folder", "From the /files folder"],
        correctAnswer: "From the /public folder",
      },
      {
        id: 14,
        question: "What command is used to build a Next.js app for production?",
        options: ["next build", "npm run build", "npm build", "next start"],
        correctAnswer: "next build",
      },
      {
        id: 15,
        question: "What lifecycle function is replaced by getStaticProps?",
        options: ["componentDidMount", "getServerSideProps", "getInitialProps", "render"],
        correctAnswer: "getInitialProps",
      },
      {
        id: 16,
        question: "What is the default port for Next.js?",
        options: ["8000", "3000", "5000", "8080"],
        correctAnswer: "3000",
      },
      {
        id: 17,
        question: "How do you enable TypeScript in a Next.js app?",
        options: ["Add tsconfig.json", "Rename files to .ts", "Install TypeScript", "All of the above"],
        correctAnswer: "All of the above",
      },
      {
        id: 18,
        question: "What does getStaticProps do?",
        options: [
          "Fetch data at build time",
          "Fetch data at runtime",
          "Fetch data on every request",
          "Fetch data on the client",
        ],
        correctAnswer: "Fetch data at build time",
      },
      {
        id: 19,
        question: "What is the purpose of the useRouter hook?",
        options: ["To fetch data", "To manage routes", "To navigate between pages", "To configure routes"],
        correctAnswer: "To navigate between pages",
      },
      {
        id: 20,
        question: "How can you create a dynamic route in Next.js?",
        options: [
          "By using [param].js",
          "By using _param.js",
          "By using dynamicRoute.js",
          "By using routes.config.js",
        ],
        correctAnswer: "By using [param].js",
      },
      {
        id: 21,
        question: "Which folder is used for API routes in Next.js?",
        options: ["/pages", "/api", "/server", "/routes"],
        correctAnswer: "/api",
      },
      {
        id: 22,
        question: "What is the use of the <Head> component in Next.js?",
        options: [
          "To define the page structure",
          "To include metadata in the head tag",
          "To add global styles",
          "To manage routing",
        ],
        correctAnswer: "To include metadata in the head tag",
      },
      {
        id: 23,
        question: "What is Server-Side Rendering (SSR) in Next.js?",
        options: [
          "Rendering HTML on the client",
          "Rendering HTML on the server per request",
          "Rendering static files",
          "Rendering styles dynamically",
        ],
        correctAnswer: "Rendering HTML on the server per request",
      },
      {
        id: 24,
        question: "What is Static Site Generation (SSG) in Next.js?",
        options: [
          "Generating HTML on the client",
          "Generating static pages at build time",
          "Generating pages dynamically on request",
          "Generating pages using JavaScript",
        ],
        correctAnswer: "Generating static pages at build time",
      },
      {
        id: 25,
        question: "What is Incremental Static Regeneration (ISR)?",
        options: [
          "Updating static pages without rebuilding",
          "Rebuilding pages manually",
          "Using server components for rendering",
          "Refreshing the app dynamically",
        ],
        correctAnswer: "Updating static pages without rebuilding",
      },
      {
        id: 26,
        question: "Which function is used to fetch data for static pages?",
        options: ["getServerSideProps", "getStaticProps", "getInitialProps", "useStaticData"],
        correctAnswer: "getStaticProps",
      },
      {
        id: 27,
        question: "How do you handle metadata dynamically in Next.js?",
        options: ["By using <Head>", "By using meta tags", "By using dynamicProps", "By using metadata.config.js"],
        correctAnswer: "By using <Head>",
      },
      {
        id: 28,
        question: "What is the default output of a Next.js app?",
        options: ["Static HTML", "Dynamic HTML", "Hybrid (Static + Dynamic)", "Client-Side Rendering"],
        correctAnswer: "Hybrid (Static + Dynamic)",
      },
      {
        id: 29,
        question: "What is the purpose of the public folder in Next.js?",
        options: ["Serve API routes", "Store static assets", "Store components", "Handle server functions"],
        correctAnswer: "Store static assets",
      },
      {
        id: 30,
        question: "What is the default build tool for Next.js?",
        options: ["Webpack", "Parcel", "Rollup", "Vite"],
        correctAnswer: "Webpack",
      },
      {
        id: 31,
        question: "Which file defines environment variables for Next.js?",
        options: [".env.local", "next.config.js", "env.json", "env.config.js"],
        correctAnswer: ".env.local",
      },
      {
        id: 32,
        question: "What is the main benefit of Static Site Generation?",
        options: ["Improved SEO", "Faster development", "Easier debugging", "Dynamic routing"],
        correctAnswer: "Improved SEO",
      },
      {
        id: 33,
        question: "How are dynamic API routes defined in Next.js?",
        options: [
          "By using [param].js in the /api folder",
          "By using dynamic.config.js",
          "By using getServerSideProps",
          "By using api.config.js",
        ],
        correctAnswer: "By using [param].js in the /api folder",
      },
      {
        id: 34,
        question: "What does the next build command do?",
        options: [
          "Starts a development server",
          "Builds the app for production",
          "Deploys the app",
          "Runs serverless functions",
        ],
        correctAnswer: "Builds the app for production",
      },
      {
        id: 35,
        question: "Which Next.js component is used for lazy loading?",
        options: ["next/lazy", "React.lazy", "dynamic from next/dynamic", "useLazy"],
        correctAnswer: "dynamic from next/dynamic",
      },
      {
        id: 36,
        question: "What is the purpose of next/link?",
        options: ["To fetch API routes", "To navigate between pages", "To manage data", "To lazy load components"],
        correctAnswer: "To navigate between pages",
      },
      {
        id: 37,
        question: "How do you enable CSS modules in Next.js?",
        options: ["Using global.css", "By naming files *.module.css", "By using custom plugins", "By using styled-jsx"],
        correctAnswer: "By naming files *.module.css",
      },
      {
        id: 38,
        question: "What is the purpose of getServerSideProps?",
        options: [
          "Fetch data on the client",
          "Fetch data on the server per request",
          "Fetch data at build time",
          "Manage client-side state",
        ],
        correctAnswer: "Fetch data on the server per request",
      },
      {
        id: 39,
        question: "Which file can be used to define custom server configurations?",
        options: ["server.js", "next.config.js", "_app.js", "_document.js"],
        correctAnswer: "next.config.js",
      },
      {
        id: 40,
        question: "What is the main use of the pages directory?",
        options: ["Define components", "Define API routes", "Define page routes", "Define styles"],
        correctAnswer: "Define page routes",
      },
      {
        id: 41,
        question: "What does the next export command do?",
        options: ["Exports a static HTML app", "Deploys the app", "Runs serverless functions", "Exports components"],
        correctAnswer: "Exports a static HTML app",
      },
      {
        id: 42,
        question: "What is the purpose of middleware in Next.js?",
        options: ["Logging", "Request handling", "Custom request handling", "All of the above"],
        correctAnswer: "All of the above",
      },
      {
        id: 43,
        question: "What feature does Next.js provide for SEO?",
        options: ["Prefetching", "Server-side rendering", "Custom head tags", "Both B and C"],
        correctAnswer: "Both B and C",
      },
      {
        id: 44,
        question: "How do you import an image using next/image?",
        options: ["<img>", "<Image> from next/image", "<picture>", "<source>"],
        correctAnswer: "<Image> from next/image",
      },
      {
        id: 45,
        question: "How are assets cached in Next.js?",
        options: ["Through a CDN", "Manually", "Using the public folder", "Using asset.config.js"],
        correctAnswer: "Through a CDN",
      },
      {
        id: 46,
        question: "What is a fallback in getStaticPaths?",
        options: ["Handles non-predefined routes", "Manages 404 errors", "Generates static routes dynamically", "Both A and C"],
        correctAnswer: "Both A and C",
      },
      {
        id: 47,
        question: "What does next dev do?",
        options: ["Build the app", "Start the production server", "Start the development server", "Deploy the app"],
        correctAnswer: "Start the development server",
      },
      {
        id: 48,
        question: "Which function is used for API requests?",
        options: ["getServerSideProps", "useAPI", "fetch", "handleRequest"],
        correctAnswer: "fetch",
      },
      {
        id: 49,
        question: "What is required to use Incremental Static Regeneration?",
        options: ["A revalidate key", "Custom server", "Dynamic routes", "Dynamic import"],
        correctAnswer: "A revalidate key",
      },
      {
        id: 50,
        question: "What does the revalidate key specify?",
        options: ["Build time", "API call timeout", "ISR refresh interval", "Cache duration"],
        correctAnswer: "ISR refresh interval",
      },
]

export default function BasicQuiz() {
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [score, setScore] = useState(0)
  const [total, setTotal] = useState(0)
  const [incorrectAnswers, setIncorrectAnswers] = useState<typeof basicQuestions>([])

  const handleQuizComplete = (finalScore: number, totalQuestions: number, wrongAnswers: typeof basicQuestions) => {
    setQuizCompleted(true)
    setScore(finalScore)
    setTotal(totalQuestions)
    setIncorrectAnswers(wrongAnswers)
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Basic Quiz</h1>
        {!quizCompleted ? (
          <Quiz questions={basicQuestions} onComplete={handleQuizComplete} />
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
            <p className="text-xl mb-4">
              Your score: {score} out of {total}
            </p>
            <p className="text-lg mb-6">
              Correct: {score} | Incorrect: {total - score}
            </p>
            {incorrectAnswers.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-2">Incorrect Answers:</h3>
                <ul className="list-disc list-inside text-left">
                  {incorrectAnswers.map((q) => (
                    <li key={q.id} className="mb-2">
                      <strong>{q.question}</strong>
                      <br />
                      Your answer: (not selected)
                      <br />
                      Correct answer: {q.correctAnswer}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <Link href="/">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg mt-6 text-lg">
                Back to Home
              </Button>
            </Link>
          </div>
        )}
      </div>
      <p className="text-center text-white mt-8">Made by Mohsin</p>
    </div>
  )
}


