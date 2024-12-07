'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const testimonials = [
  {
    name: 'Alice Johnson',
    role: 'Content Creator',
    content: 'FreeTTS has revolutionized my content creation process. The natural-sounding voices are perfect for my videos!',
    avatar: '/avatar1.jpg',
  },
  {
    name: 'Bob Smith',
    role: 'Educator',
    content: 'As a teacher, FreeTTS helps me create accessible materials for my students. It\'s an invaluable tool in my classroom.',
    avatar: '/avatar2.jpg',
  },
  {
    name: 'Carol Davis',
    role: 'Podcast Host',
    content: 'The multi-language support in FreeTTS allows me to reach a global audience. It\'s been a game-changer for my podcast.',
    avatar: '/avatar3.jpg',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-muted">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

