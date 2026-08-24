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
  { type: 'video', src: IMG('Making of New Bricks from scracth.mp4'), title: 'Making of new bricks from scratch', category: 'Production' },
  { type: 'video', src: IMG('our boys arranging and tranporting bricks to safehouse.mp4'), title: 'Our boys arranging & transporting bricks to safehouse', category: 'Production' },
  { type: 'video', src: IMG('Bricks taken to sfehouse for later burning.mp4'), title: 'Bricks taken to safehouse for later burning', category: 'Production' },
  { type: 'video', src: IMG('Women helping in brick arrangemnt.mp4'), title: 'Women helping in brick arrangement', category: 'Team' },
  { type: 'video', src: IMG('Bricks being arranged for drying.mp4'), title: 'Bricks being arranged for drying', category: 'Production' },
  { type: 'video', src: IMG('Transporting Bricks to safehouse using wheelbarrows.mp4'), title: 'Transporting bricks to safehouse using wheelbarrows', category: 'Production' },
  { type: 'video', src: IMG('Preparing Soil to Produce Bricks.mp4'), title: 'Preparing soil to produce bricks', category: 'Production' },
  { type: 'video', src: IMG('Workers Making new bricks s.mp4'), title: 'Workers making new bricks', category: 'Production' },
  { type: 'video', src: IMG('workers eating lunch after hardwork making bricks.mp4'), title: 'Workers eating lunch after hard work making bricks', category: 'Team' },
  { type: 'video', src: IMG('WORKERS IN OUR WORKING FIELD.mp4'), title: 'Workers in our working field', category: 'Team' },
  { type: 'video', src: IMG('bricks being counted and arranged before burning.mp4'), title: 'Bricks counted & arranged before burning', category: 'Production' },
  { type: 'video', src: IMG('bricks being covered to dry and prevent rain from damaging.mp4'), title: 'Covering bricks to dry & protect from rain', category: 'Production' },
  { type: 'video', src: IMG('our warehouse where we store our bricks before and after burning.mp4'), title: 'Our brick storage warehouse', category: 'Production' },
  { type: 'video', src: IMG('our work station where we make bricks and lay them for drying.mp4'), title: 'Our workstation – making & drying bricks', category: 'Production' },
  { type: 'video', src: IMG('our workers using water to make bricks.mp4'), title: 'Workers using water to make bricks', category: 'Production' },
  { type: 'video', src: IMG('preparing hips where we will burn our birkcs.mp4'), title: 'Preparing hips for brick burning', category: 'Production' },
  // New additions
  { type: 'video', src: IMG('WATER BEING USED TO MAKE BRICKS FROM SCRATCH.mov'), title: 'Water being used to make bricks from scratch', category: 'Production' },
  { type: 'video', src: IMG('WATER AND SOIL MIXED TO MAD AND READY TO MAKE BRICKS.mov'), title: 'Water and soil mixed to mud and ready to make bricks', category: 'Production' },
  { type: 'video', src: IMG('OUR WORK FIELD AND PROGRESS WE ARE MAKING EVERYDAY.mov'), title: 'Our work field and progress we are making everyday', category: 'Team' },
  { type: 'video', src: IMG('MAD FOOR MANUFACTURING BRICKS BEING MADE BY OUR WORKERS.mov'), title: 'Mud for manufacturing bricks being made by our workers', category: 'Production' },
  { type: 'image', src: IMG('IMAGE SHOWING OUR WORK FIELD BEING BRICKS BEING DRIED.jpeg'), title: 'Our work field showing bricks being dried', category: 'Production' },
  // New additions – Aug 24
  { type: 'video', src: IMG('Bricks being arranged to dry in the sun.mov'), title: 'Bricks being arranged to dry in the sun', category: 'Production' },
  { type: 'video', src: IMG('A sunny morning in our bricks field works.mov'), title: 'A sunny morning in our brick fields', category: 'Production' },
  { type: 'video', src: IMG('Bricks drying in the sun days after being manufactured.mov'), title: 'Bricks drying in the sun days after manufacture', category: 'Production' },
  { type: 'video', src: IMG('Covering bricks at the end of the day to prevent rain damage.mov'), title: 'Covering bricks at the end of the day', category: 'Production' },
];

// Backwards compatibility: images-only list for grids that only show images
export const GALLERY_IMAGES = GALLERY_MEDIA.filter((m) => m.type === 'image');
