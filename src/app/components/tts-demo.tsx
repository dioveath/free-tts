'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { motion } from 'framer-motion'

export default function TtsDemo() {
  const [text, setText] = useState('')
  const [voice, setVoice] = useState('')
  const [isPaused, setIsPaused] = useState(false)
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null)

  const handleSpeak = () => {
    if (!text) return

    const newUtterance = new SpeechSynthesisUtterance(text)
    if (voice) {
      const selectedVoice = speechSynthesis.getVoices().find(v => v.name === voice)
      if (selectedVoice) newUtterance.voice = selectedVoice
    }

    setUtterance(newUtterance)
    speechSynthesis.speak(newUtterance)
    setIsPaused(false)
  }

  const handlePause = () => {
    speechSynthesis.pause()
    setIsPaused(true)
  }

  const handleResume = () => {
    speechSynthesis.resume()
    setIsPaused(false)
  }

  const handleStop = () => {
    speechSynthesis.cancel()
    setIsPaused(false)
  }

  return (
    <section id="demo" className="py-20">
      <div className="container">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Try FreeTTS Now
        </motion.h2>
        <motion.div
          className="max-w-2xl mx-auto space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Textarea
            placeholder="Enter your text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="min-h-[200px] md:min-w-[400px]"
          />
          <Select onValueChange={setVoice}>
            <SelectTrigger>
              <SelectValue placeholder="Select a voice" />
            </SelectTrigger>
            <SelectContent>
              {speechSynthesis.getVoices().map((voice) => (
                <SelectItem key={voice.name} value={voice.name}>
                  {voice.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex space-x-2">
            <Button onClick={handleSpeak}>Speak</Button>
            <Button onClick={isPaused ? handleResume : handlePause}>
              {isPaused ? 'Resume' : 'Pause'}
            </Button>
            <Button onClick={handleStop}>Stop</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

