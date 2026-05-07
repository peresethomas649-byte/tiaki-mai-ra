# Tiaki Mai Rā — cleaned production site

This cleaned version keeps GitHub/Netlify focused on source code and lightweight static assets. Heavy media has been removed from the repo and should be delivered from Cloudinary or another CDN/object-storage provider.

## What changed

- Removed committed Git history and development-only folders from the deploy package.
- Removed duplicate/local `.mp4` files.
- Restored the root bridge/separator animation using a Cloudinary-hosted video URL, avoiding Netlify video bandwidth.
- Converted the Guardians page from browser Babel/dev React to production React UMD + precompiled JavaScript.
- Extracted Guardians CSS and JS into `guardians-of-matariki/css/` and `guardians-of-matariki/js/`.
- Added lazy loading for off-screen Spline scenes.
- Added Netlify config, cache headers, cleaner sitemap, robots.txt, and stronger `.gitignore`.

## Deploy model

- Netlify: HTML/CSS/JS and lightweight images only.
- Cloudinary: video delivery.
- Cloudflare R2 or Cloudinary: future large 3D assets such as `.glb`, `.gltf`, textures, HDRIs, and videos.

## Important

Do not commit large local videos or 3D assets back into this repo. Store them externally and reference them by URL in the code.


## External video URLs currently used

- Homepage bridge separator: `https://res.cloudinary.com/dsqhj32yo/video/upload/q_auto/f_auto/v1778173238/AnimantedBridge_p5ctt2.mov`
- Guardians Apple Vision headset animation: `https://res.cloudinary.com/dsqhj32yo/video/upload/q_auto/f_auto/v1778165428/Apple_Vision_Pro_Animation_Black_bmfojk.mp4`
