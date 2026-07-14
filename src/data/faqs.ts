import type { ReactNode } from 'react'
import { createElement, Fragment } from 'react'

export interface Faq {
  question: string
  answer: ReactNode
}

export const faqs: Faq[] = [
  {
    question: 'What should my child (and I) wear to a session?',
    answer:
      "I highly recommend wearing old clothes that you don't mind getting paint or food colouring on. We do have sleeveless bib aprons on hand that your child can wear, but speaking from experience, they will always find a way to get it everywhere! 😁",
  },
  {
    question: 'Are the play materials safe if my child puts them in their mouth?',
    answer:
      "Yes, absolutely! The safety of your little ones is my top priority. All sensory bins, rainbow spaghetti, jellies, and play doughs are made with 100% non-toxic, edible-safe, and food-grade kitchen ingredients. While I don't encourage eating them as a snack, they are fully taste-safe!",
  },
  {
    question: 'What age groups are these classes suitable for?',
    answer: 
    "Honestly? If they can hold a paintbrush and love to explore, bring them! If your 14-year-old loves getting creative and messy, bring them! If your granny wants to come play with bicarb and vinegar, bring them! You get the picture 😁 ​A quick note on safety for our littlest explorers: Because we love all kinds of creating, in some  of our class activities include scissors or small objects (like beads). To keep curious tiny hands safe, we keep these specific supplies up on a slightly raised table. It’s not towering high, but it’s safely out of easy reach for babies and toddlers so you can relax and focus on the fun!"
  },
  {
    question: 'How does booking and payment work?',
    answer:
      'Booking is simple! You can fill out our static form below, which automatically goes to our inbox, or hit the floating WhatsApp button to chat directly with our Durbanville coordinator. Payments can be done via EFT or SnapScan before the session begins to secure your spot.',
  },
]
