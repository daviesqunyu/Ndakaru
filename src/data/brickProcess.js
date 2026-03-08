// Brick-making process: soil to burning. Media from public/img/
const IMG = (name) => `/img/${name}`;

export const BRICK_PROCESS_STEPS = [
  {
    step: 1,
    title: 'Soil & raw material',
    description: 'We source and prepare the right soil mix for durable bricks.',
    type: 'image',
    src: IMG('WhatsApp Image 2025-12-08 at 15.05.47_9df2ec2a.jpg'),
  },
  {
    step: 2,
    title: 'Pressing & molding',
    description: 'Soil is pressed into brick shapes using our brick press.',
    type: 'image',
    src: IMG('WhatsApp Image 2025-12-08 at 15.00.08_b7318d3b.jpg'),
  },
  {
    step: 3,
    title: 'Drying',
    description: 'Freshly pressed bricks are laid out to dry before burning.',
    type: 'video',
    src: IMG('raw bricks before burning.mp4'),
  },
  {
    step: 4,
    title: 'Preparing the kiln',
    description: 'We set up the kiln with wood and mud for the burning process.',
    type: 'image',
    src: IMG('pic1 preparing to burn using wood and mud.jpeg'),
  },
  {
    step: 5,
    title: 'Arranging for burning',
    description: 'Bricks are stacked and arranged ready for the fire.',
    type: 'image',
    src: IMG('pic2 preparing to burn using wood and mud.jpeg'),
  },
  {
    step: 6,
    title: 'Burning',
    description: 'Traditional wood-fired burning through the night for strength.',
    type: 'image',
    src: IMG('pic3 wood burning bricks overnight.jpeg'),
  },
  {
    step: 7,
    title: 'Burning in progress',
    description: 'Our team monitors the burning process.',
    type: 'video',
    src: IMG('vid2 burning bricks in progress.mp4'),
  },
  {
    step: 8,
    title: 'After burning',
    description: 'Bricks are arranged and left to cool after burning.',
    type: 'video',
    src: IMG('bricks arrangements after burning.mp4'),
  },
  {
    step: 9,
    title: 'Quality check',
    description: 'We inspect every batch before delivery.',
    type: 'image',
    src: IMG('pic4 ready burned bricks being checked.jpeg'),
  },
  {
    step: 10,
    title: 'Ready for delivery',
    description: 'Quality bricks ready for your project.',
    type: 'image',
    src: IMG('WhatsApp Image 2025-12-08 at 15.09.06_fa0d6f0b.jpg'),
  },
];
