"use client"

import { useState } from "react"
import { Button } from "../compoments/ui/button"
import { Card, CardContent } from "../compoments/ui/card"
import { RadioGroup, RadioGroupItem } from "../compoments/ui/radio-group"
import { Label } from "../compoments/ui/label"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: string
}

interface QuizProps {
  questions: Question[]
  onComplete: (score: number, total: number, incorrectAnswers: Question[]) => void
}

export default function Quiz({ questions, onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [score, setScore] = useState(0)
  const [incorrectAnswers, setIncorrectAnswers] = useState<Question[]>([])

  const handleAnswer = () => {
    const currentQ = questions[currentQuestion]
    if (selectedAnswer === currentQ.correctAnswer) {
      setScore(score + 1)
    } else {
      setIncorrectAnswers([...incorrectAnswers, currentQ])
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer("")
    } else {
      onComplete(
        score + (selectedAnswer === currentQ.correctAnswer ? 1 : 0),
        questions.length,
        selectedAnswer === currentQ.correctAnswer ? incorrectAnswers : [...incorrectAnswers, currentQ],
      )
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto mt-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4">Question {currentQuestion + 1}</h2>
        <p className="text-lg mb-4">{questions[currentQuestion].question}</p>
        <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer} className="space-y-2">
          {questions[currentQuestion].options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={option} id={`option-${index}`} />
              <Label htmlFor={`option-${index}`}>{option}</Label>
            </div>
          ))}
        </RadioGroup>
        <Button
          onClick={handleAnswer}
          disabled={!selectedAnswer}
          className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded text-lg"
        >
          {currentQuestion + 1 === questions.length ? "Finish" : "Next"}
        </Button>
      </CardContent>
    </Card>
  )
}

