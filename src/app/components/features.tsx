'use client'

import { motion } from 'framer-motion'
import { Mic, Globe, Zap } from 'lucide-react'

const features = [
  {
    icon: <Mic className="h-6 w-6" />,
    title: 'Natural-sounding voices',
    description: 'Our AI-powered TTS engine produces lifelike speech in multiple languages.',
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: 'Multi-language support',
    description: 'Generate speech in over 50 languages and accents.',
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: 'Lightning-fast conversion',
    description: 'Convert your text to speech in seconds, not minutes.',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-muted">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose FreeTTS?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="mb-4 text-primary">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

