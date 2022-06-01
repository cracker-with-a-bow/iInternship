function cylindrVolumeAndArea (r, h) {
  console.log('r=', r, 'h=', h);
  let volume =  Math.PI * r * 2 * h; 
  let s = 2 * Math.PI * r * (r + h); 
  /* не знаю нужно округление или нет */
  volume = Math.round (volume);
  s = Math.round (s);
  console.log('volume=', volume);
  console.log('area=', s);
}
cylindrVolumeAndArea (2, 2);


