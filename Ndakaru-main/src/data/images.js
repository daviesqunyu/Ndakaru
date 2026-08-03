// Use your images from public/img/ across the site (heroes, section backgrounds, showcase)
const IMG = (name) => `/img/${name}`;
const enc = (path) => path.split('/').map((p) => encodeURIComponent(p)).join('/');

export const BG_IMAGES = {
  hero: enc(IMG('ndakaruphoto.jpg')),
  construction: enc(IMG('WhatsApp Image 2025-12-08 at 15.05.47_9df2ec2a.jpg')),
  bricks: enc(IMG('pic4 ready burned bricks being checked.jpeg')),
  building: enc(IMG('funderwithemployees.jpg')),
  site: enc(IMG('pic3 wood burning bricks overnight.jpeg')),
  team: enc(IMG('founderinblack helping.jpg')),
  contact: enc(IMG('image of founder with members aranging ready masde bricks.jpeg')),
};
