export interface GalleryPhoto {
  src: string
  alt: string
  hover: string
}

export const gallery: GalleryPhoto[] = [
  {
    src: 'images/gallery-1.jpg',
    alt: 'Young boy squeezing blue foamy paint over a mug during outdoor messy play',
    hover: '🔍 View Splat',
  },
  {
    src: 'images/gallery-2.jpg',
    alt: 'Two children squeezing colourful paint into mugs at an outdoor sensory party',
    hover: '🔍 View Craft',
  },
  {
    src: 'images/gallery-3.jpg',
    alt: 'Toddler playing with rainbow sensory rice, funnels, and scooping toys',
    hover: '🔍 View Swirls',
  },
  {
    src: 'images/gallery-4.jpg',
    alt: 'Smiling boy in blue glasses squeezing green paint into a bowl at an outdoor messy play session',
    hover: '🔍 View Squeeze',
  },
]
