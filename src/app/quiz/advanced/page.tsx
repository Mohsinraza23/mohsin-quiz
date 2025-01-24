"use client"

import { useState } from "react"
import Quiz from "../../compoments/Quiz"
import Link from "next/link"
import { Button } from "../../compoments/ui/button"

const advancedQuestions = [
    {
        id: 1,
        question: "What is the default rendering method in Next.js?",
        options: ["Client-side rendering", "Hybrid rendering", "Server-side rendering", "Static site generation"],
        correctAnswer: "Hybrid rendering",
      },
      {
        id: 2,
        question: "What file defines custom server configurations in Next.js?",
        options: ["server.js", "app.js", "next.config.js", "custom-server.js"],
        correctAnswer: "next.config.js",
      },
      {
        id: 3,
        question: "Which hook is used to fetch data in server components?",
        options: ["useState", "useEffect", "getStaticProps", "fetch"],
        correctAnswer: "fetch",
      },
      {
        id: 4,
        question: "What function is used for static site generation in Next.js?",
        options: ["getInitialProps", "getStaticProps", "getServerSideProps", "useStaticProps"],
        correctAnswer: "getStaticProps",
      },
      {
        id: 5,
        question: "Which Next.js API method allows dynamic paths during SSG?",
        options: ["getPaths", "getStaticPaths", "usePaths", "getServerPaths"],
        correctAnswer: "getStaticPaths",
      },
      {
        id: 6,
        question: "What is the purpose of next/head in Next.js?",
        options: ["Modify the HTML <head> tag", "Render meta tags in body", "Improve page performance", "Handle routing"],
        correctAnswer: "Modify the HTML <head> tag",
      },
      {
        id: 7,
        question: "Which middleware library is compatible with Next.js API routes?",
        options: ["body-parser", "next-connect", "express-middleware", "koa"],
        correctAnswer: "next-connect",
      },
      {
        id: 8,
        question: "How do you enable incremental static regeneration (ISR)?",
        options: ["isr: true", "revalidate key in getStaticProps", "updatePaths", "useStaticRevalidate"],
        correctAnswer: "revalidate key in getStaticProps",
      },
      {
        id: 9,
        question: "What does next/image optimize?",
        options: ["Browser caching", "Image resolutions only", "Image loading and format conversion", "CDN configuration"],
        correctAnswer: "Image loading and format conversion",
      },
      {
        id: 10,
        question: "What does the getServerSideProps function return?",
        options: ["JSON only", "HTML", "Props object", "API response"],
        correctAnswer: "Props object",
      },
      {
        id: 11,
        question: "Which component is used for navigation in Next.js?",
        options: ["NavLink", "Link", "Router", "Navigation"],
        correctAnswer: "Link",
      },
      {
        id: 12,
        question: "What is the primary purpose of getInitialProps?",
        options: [
          "To fetch data at build time",
          "To fetch data at runtime on the server",
          "To manage state",
          "To handle routing",
        ],
        correctAnswer: "To fetch data at runtime on the server",
      },
      {
        id: 13,
        question: "How do you handle dynamic routing in Next.js?",
        options: ["With useRouter hook", "With dynamic paths", "Using [...slug] files", "Both B and C"],
        correctAnswer: "Both B and C",
      },
      {
        id: 14,
        question: "What is the default directory for static files in Next.js?",
        options: ["/static", "/assets", "/public", "/files"],
        correctAnswer: "/public",
      },
      {
        id: 15,
        question: "How can you enable TypeScript support in Next.js?",
        options: ["Rename files to .tsx", "Install typescript and ts-loader", "Add tsconfig.json", "All of the above"],
        correctAnswer: "All of the above",
      },
      {
        id: 16,
        question: "Which file is responsible for custom error pages?",
        options: ["404.js", "_error.js", "_app.js", "_document.js"],
        correctAnswer: "_error.js",
      },
      {
        id: 17,
        question: "What is the purpose of getStaticPaths?",
        options: [
          "To fetch static data",
          "To define dynamic paths at build time",
          "To manage client-side navigation",
          "To pre-render dynamic pages",
        ],
        correctAnswer: "To define dynamic paths at build time",
      },
      {
        id: 18,
        question: "What environment variables are exposed to the client in Next.js?",
        options: ["All variables", "Only public variables", "No variables", "Only secure variables"],
        correctAnswer: "Only public variables",
      },
      {
        id: 19,
        question: "What does next.config.js allow you to configure?",
        options: ["API routes", "Page routing", "Build settings", "Middleware"],
        correctAnswer: "Build settings",
      },
      {
        id: 20,
        question: "What is the purpose of the _app.js file?",
        options: [
          "Customizing the HTML <head>",
          "Customizing global layout and functionality",
          "Handling API requests",
          "Managing server-side rendering",
        ],
        correctAnswer: "Customizing global layout and functionality",
      },
      {
        id: 21,
        question: "Which lifecycle method is replaced in Next.js?",
        options: ["componentDidMount", "shouldComponentUpdate", "getDerivedStateFromProps", "getServerSideProps"],
        correctAnswer: "getServerSideProps",
      },
      {
        id: 22,
        question: "How do you add global CSS in Next.js?",
        options: ["Import in pages", "Use <style> tags", "Import in _app.js", "Use CSS-in-JS"],
        correctAnswer: "Import in _app.js",
      },
      {
        id: 23,
        question: "What does API Route in Next.js allow you to create?",
        options: ["Database migrations", "RESTful APIs", "GraphQL endpoints", "All of the above"],
        correctAnswer: "RESTful APIs",
      },
      {
        id: 24,
        question: "How do you prefetch data for links in Next.js?",
        options: ["Add prefetch attribute", "Enable useRouter hook", "No prefetching", "Automatic by Link"],
        correctAnswer: "Automatic by Link",
      },
      {
        id: 25,
        question: "Which file is mandatory in the pages directory?",
        options: ["index.js", "app.js", "_document.js", "_app.js"],
        correctAnswer: "index.js",
      },
      {
        id: 26,
        question: "What Next.js function is used to redirect users?",
        options: ["useRouter", "Router.push", "redirect in getServerSideProps", "All of the above"],
        correctAnswer: "All of the above",
      },
      {
        id: 27,
        question: "How can you serve a custom document structure in Next.js?",
        options: ["Modify _app.js", "Create _document.js", "Override index.js", "Use a custom plugin"],
        correctAnswer: "Create _document.js",
      },
      {
        id: 28,
        question: "What is the main benefit of Static Site Generation?",
        options: [
          "Faster server responses",
          "Improved dynamic rendering",
          "Performance and SEO benefits",
          "Easier to handle state",
        ],
        correctAnswer: "Performance and SEO benefits",
      },
      {
        id: 29,
        question: "What Next.js configuration option enables experimental features?",
        options: ["testFeatures", "betaFeatures", "experimental", "nextBeta"],
        correctAnswer: "experimental",
      },
      {
        id: 30,
        question: "What is Middleware in Next.js used for?",
        options: [
          "Logging requests",
          "Authenticating users",
          "Customizing server responses",
          "All of the above",
        ],
        correctAnswer: "All of the above",
      },
      {
        id: 31,
        question: "Which Next.js feature is used to improve build performance?",
        options: ["webpack optimizations", "Incremental static regeneration", "Route splitting", "Prefetching"],
        correctAnswer: "Incremental static regeneration",
      },
      {
        id: 32,
        question: "What function is used to fetch data for dynamic API routes?",
        options: ["getInitialProps", "useDynamicAPI", "useFetch", "API route handler"],
        correctAnswer: "API route handler",
      },
      {
        id: 33,
        question: "Which of the following is required to use dynamic imports in Next.js?",
        options: ["Import statements", "Dynamic() from next/dynamic", "getServerSideProps", "Router.push"],
        correctAnswer: "Dynamic() from next/dynamic",
      },
      {
        id: 34,
        question: "What does the fallback key in getStaticPaths enable?",
        options: [
          "Fallback UI rendering",
          "Rendering missing paths dynamically",
          "Improved build times",
          "API endpoint generation",
        ],
        correctAnswer: "Rendering missing paths dynamically",
      },
      {
        id: 35,
        question: "What is the default timeout for API routes in Next.js?",
        options: ["2 seconds", "5 seconds", "10 seconds", "No default timeout"],
        correctAnswer: "10 seconds",
      },
      {
        id: 36,
        question: "How does Next.js handle internationalized routing?",
        options: [
          "Through custom middleware",
          "Using the i18n config",
          "Manually creating locale files",
          "With the useLocale hook",
        ],
        correctAnswer: "Using the i18n config",
      },
      {
        id: 37,
        question: "What is the purpose of static optimization in Next.js?",
        options: [
          "To remove unnecessary CSS",
          "To serve static HTML for faster loads",
          "To minify JavaScript",
          "To lazy-load resources",
        ],
        correctAnswer: "To serve static HTML for faster loads",
      },
      {
        id: 38,
        question: "Which feature allows you to serve an API within a Next.js app?",
        options: ["API Routes", "getServerSideProps", "Middleware", "Custom Server"],
        correctAnswer: "API Routes",
      },
      {
        id: 39,
        question: "Which HTTP method is commonly used for writing data via API Routes?",
        options: ["GET", "POST", "PUT", "PATCH"],
        correctAnswer: "POST",
      },
      {
        id: 40,
        question: "What is the purpose of revalidate in ISR?",
        options: [
          "To trigger rebuilds",
          "To invalidate server responses",
          "To specify regeneration interval",
          "To create backup content",
        ],
        correctAnswer: "To specify regeneration interval",
      },
      {
        id: 41,
        question: "What type of files can be used in the public directory?",
        options: ["HTML only", "JS only", "Static assets", "Stylesheets only"],
        correctAnswer: "Static assets",
      },
      {
        id: 42,
        question: "What feature of Next.js improves page transition speeds?",
        options: ["Prefetching", "Caching", "Dynamic imports", "Bundling"],
        correctAnswer: "Prefetching",
      },
      {
        id: 43,
        question: "What is the role of the useRouter hook?",
        options: ["Manage state", "Fetch data", "Access routing info", "Configure API endpoints"],
        correctAnswer: "Access routing info",
      },
      {
        id: 44,
        question: "How do you customize the build directory in Next.js?",
        options: ["Change in next.config.js", "Use custom middleware", "Modify package.json", "Run custom CLI command"],
        correctAnswer: "Change in next.config.js",
      },
      {
        id: 45,
        question: "What is the default port for a Next.js development server?",
        options: ["8000", "8080", "3000", "5000"],
        correctAnswer: "3000",
      },
      {
        id: 46,
        question: "What configuration in Next.js can enable strict mode?",
        options: ["StrictMode.js", "next.config.js", "StrictModeWrapper", "StrictMode from react"],
        correctAnswer: "StrictMode from react",
      },
      {
        id: 47,
        question: "What is the advantage of Middleware in Next.js?",
        options: [
          "Improved rendering",
          "Dynamic request processing",
          "Enhanced API routes",
          "Reduced server-side costs",
        ],
        correctAnswer: "Dynamic request processing",
      },
      {
        id: 48,
        question: "Which file allows custom <html> and <body> tags?",
        options: ["_document.js", "_app.js", "index.js", "server.js"],
        correctAnswer: "_document.js",
      },
      {
        id: 49,
        question: "What does SSR stand for in Next.js?",
        options: [
          "Static Site Rendering",
          "Server-Side Routing",
          "Server-Side Rendering",
          "Static Server Rendering",
        ],
        correctAnswer: "Server-Side Rendering",
      },
      {
        id: 50,
        question: "How do you use environment variables in Next.js?",
        options: ["Define in next.config.js", "Define in .env.local", "Add in public folder", "Use static config files"],
        correctAnswer: "Define in .env.local",
      },
]

export default function AdvancedQuiz() {
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [score, setScore] = useState(0)
  const [total, setTotal] = useState(0)
  const [incorrectAnswers, setIncorrectAnswers] = useState<typeof advancedQuestions>([])

  const handleQuizComplete = (finalScore: number, totalQuestions: number, wrongAnswers: typeof advancedQuestions) => {
    setQuizCompleted(true)
    setScore(finalScore)
    setTotal(totalQuestions)
    setIncorrectAnswers(wrongAnswers)
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Advanced Quiz</h1>
        {!quizCompleted ? (
          <Quiz questions={advancedQuestions} onComplete={handleQuizComplete} />
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
              <Button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg mt-6 text-lg">
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

