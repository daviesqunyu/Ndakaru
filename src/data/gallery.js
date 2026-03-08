// All gallery media: place your images and videos in public/img/
// Paths are relative to site root: /img/filename
const IMG = (name) => `/img/${name}`;

export function encodedMediaSrc(path) {
  if (!path) return path;
  return path.split('/').map((part) => encodeURIComponent(part)).join('/');
}

export const GALLERY_MEDIA = [
  // Images
  { type: 'image', src: IMG('ndakaruphoto.jpg'), title: 'Our team at work producing quality bricks', category: 'Team Production' },
  { type: 'image', src: IMG('WhatsApp Image 2025-12-08 at 15.00.08_b7318d3b.jpg'), title: 'Freshly pressed bricks lined up for drying', category: 'Production' },
  { type: 'image', src: IMG('WhatsApp Image 2025-12-08 at 15.05.25_92941e9c.jpg'), title: 'Team members coordinating production', category: 'Team Production' },
  { type: 'image', src: IMG('WhatsApp Image 2025-12-08 at 15.05.47_9df2ec2a.jpg'), title: 'Brick press in action – training new youth', category: 'Production' },
  { type: 'image', src: IMG('WhatsApp Image 2025-12-08 at 15.06.18_3ad2a484.jpg'), title: 'Women leaders supervising quality and safety', category: 'Team' },
  { type: 'image', src: IMG('WhatsApp Image 2025-12-08 at 15.09.06_fa0d6f0b.jpg'), title: 'Stacks of cured bricks ready for delivery', category: 'Production' },
  { type: 'image', src: IMG('WhatsApp Image 2025-12-07 at 17.24.35_1e35bdd1.jpg'), title: 'Women and youth employed by the initiative', category: 'Team' },
  { type: 'image', src: IMG('founderinblack helping.jpg'), title: 'Founder guiding workers at the brick site', category: 'Founder' },
  { type: 'image', src: IMG('funderwithemployees.jpg'), title: 'Founder with women and youth employees', category: 'Founder' },
  { type: 'image', src: IMG('pic1 preparing to burn using wood and mud.jpeg'), title: 'Preparing the kiln with wood and mud for brick burning', category: 'Production' },
  { type: 'image', src: IMG('pic2 preparing to burn using wood and mud.jpeg'), title: 'Setting up the brick arrangement for burning', category: 'Production' },
  { type: 'image', src: IMG('pic3 wood burning bricks overnight.jpeg'), title: 'Traditional brick firing using wood fuel', category: 'Production' },
  { type: 'image', src: IMG('pic4 ready burned bricks being checked.jpeg'), title: 'Quality inspection after the burning process', category: 'Production' },
  { type: 'image', src: IMG('image of founder with members aranging ready masde bricks.jpeg'), title: 'Founder and team arranging finished bricks', category: 'Founder' },
  { type: 'image', src: IMG('WhatsApp Image 2025-12-08 at 15.17.21_01449506.jpg'), title: 'Production and teamwork at Ndakaru', category: 'Team' },
  // Videos
  { type: 'video', src: IMG('bricks arrangements after burning.mp4'), title: 'Brick arrangements after burning', category: 'Production' },
  { type: 'video', src: IMG('founder helping in arrangements after ready made bricks from bruning process.mp4'), title: 'Founder helping arrange ready-made bricks', category: 'Founder' },
  { type: 'video', src: IMG('foundertalking.mp4'), title: 'Founder talking', category: 'Founder' },
  { type: 'video', src: IMG('funder present and helping in the process.mp4'), title: 'Founder present and helping in the process', category: 'Founder' },
  { type: 'video', src: IMG('ndakaruvid2.mp4'), title: 'Ndakaru bricks and construction', category: 'Team' },
  { type: 'video', src: IMG('raw bricks before burning.mp4'), title: 'Raw bricks before burning', category: 'Production' },
  { type: 'video', src: IMG('vid1 worker preparing to burn using wood and mud.mp4'), title: 'Worker preparing to burn using wood and mud', category: 'Production' },
  { type: 'video', src: IMG('vid2 burning bricks in progress.mp4'), title: 'Burning bricks in progress', category: 'Production' },
  { type: 'video', src: IMG('vidoffounderwithmembers planing to burn bricks.mp4'), title: 'Founder with members planning to burn bricks', category: 'Founder' },
  { type: 'video', src: IMG('vidprepatiotion to burn bricks.mp4'), title: 'Preparation to burn bricks', category: 'Production' },
  { type: 'video', src: IMG('WhatsApp Video 2025-12-07 at 17.23.50_a0b164aa.mp4'), title: 'Production at Ndakaru', category: 'Team' },
  { type: 'video', src: IMG('WhatsApp Video 2025-12-08 at 15.25.01_7824e5e6.mp4'), title: 'Brick production process', category: 'Production' },
  { type: 'video', src: IMG('WhatsApp Video 2025-12-08 at 15.54.31_83c35f74.mp4'), title: 'Team at work', category: 'Team' },
];

// Backwards compatibility: images-only list for grids that only show images
export const GALLERY_IMAGES = GALLERY_MEDIA.filter((m) => m.type === 'image');
