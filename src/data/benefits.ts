import { brand } from '../theme'

export interface Benefit {
  icon: string
  title: string
  desc: string
  image: string
  color: string
}

export const benefits: Benefit[] = [
  {
    icon: '💪',
    title: 'Fine & Gross Motor Skills',
    desc: "Learning is even more fun when you don't know you're doing it. Every station in the class helps your little one learn an important skill such as hand eye coordination and a stronger grip.",
    image: 'images/motor.jpg',
    color: brand.pink,
  },
  {
    icon: '🧠',
    title: 'Cognitive & Language Growth',
    desc: 'There are so many fun words in messy play and so many opportunities to teach new words to your little one. The colours and the shapes are only the beginning.',
    image: 'images/good.jpg',
    color: brand.turquoise,
  },
  {
    icon: '🤝',
    title: 'Social & Emotional Well-being',
    desc: "I strive to make this class a fun and relaxing place for parents and children to come and fill their social battery. With our products being homemade Ith can honestly say it's very relaxing to play, mix and get messy without any of the cleanup anxiety.",
    image:
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&h=300&q=80',
    color: brand.orange,
  },
]

export interface Commitment {
  icon: string
  color: string
  title: string
  desc: string
}

export const commitments: Commitment[] = [
  {
    icon: '✓',
    color: brand.green,
    title: 'Edible-Safe Materials',
    desc: 'Non-toxic, organic, and toddler-proof ingredients only.',
  },
  {
    icon: '✓',
    color: brand.purple,
    title: 'Aprons Provided',
    desc: 'We provide aprons for your little ones to keep their clothes as clean as possible.',
  },
  {
    icon: '✓',
    color: brand.pink,
    title: 'Stress-Free Cleanup',
    desc: 'We handle the big mess. Simply wash up and leave!',
  },
]
