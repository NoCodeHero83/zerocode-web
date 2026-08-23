import sharp from 'sharp';

const files = [
  'public/images/alianza-mock-1.png',
  'public/images/ilirox-mock-1.png',
  'public/images/ilirox-portada.png',
  'public/images/dailysparkle-mock-1.png',
  'public/images/llt-mock-1.png',
  'public/images/hulp-mock-1.png',
  'public/images/hulp-providers-mock-1.png',
  'public/images/racingkx-mock-1.png',
  'public/images/racingkx-mock-3.png',
  'public/images/decisionboard-mock-1.png',
  'public/images/supra-mock-1.png',
  'public/images/tokgo-mock-1.png',
  'public/images/trueenglish-mock-1.png',
  'public/images/beautyconnect-mock-1.png',
  'public/images/increciendo-mock-1.png',
  'public/images/ecumerca-mock-1.png',
  'public/images/gmparts-mock-1.png',
  'public/images/mentor-mock-1.png',
  'public/images/hero/27a83f0ea60 (1).png',
  'public/images/hero/27a83f0ea60 (4).png',
  'public/images/hero/f3ff1d5b7be (40).png',
  'public/images/hero/f3ff1d5b7be (48).png',
];

for (const f of files) {
  try {
    const meta = await sharp(f).metadata();
    const ar = (meta.width / meta.height).toFixed(2);
    console.log(f + ' => ' + meta.width + 'x' + meta.height + ' (AR: ' + ar + ')');
  } catch(e) {
    console.log(f + ' => ERROR: ' + e.message);
  }
}