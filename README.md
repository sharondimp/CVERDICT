# CVerdict 🔥

> Honest. Brutal. Useful.

A CV roasting web app powered by Claude AI. Upload your CV and get a brutally honest roast + actionable fixes to actually get hired.

## Project Structure

```
cverdict/
├── public/
│   └── _redirects         # Netlify SPA routing
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Top nav bar
│   │   ├── UploadCard.jsx   # PDF upload + paste input
│   │   ├── LoadingScreen.jsx # Loading state
│   │   └── RoastResult.jsx  # Results with stamp + fixes
│   ├── utils/
│   │   └── roast.js         # Anthropic API call logic
│   ├── App.jsx              # Main app + state management
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles + animations
├── index.html               # HTML entry point
├── vite.config.js           # Vite + PWA config
├── package.json
└── .gitignore
```

## Setup

1. Clone the repo
2. Run `npm install`
3. Run `npm run dev` to start locally
4. Run `npm run build` to build for production

## Deploy to Netlify

1. Push to GitHub
2. Connect repo on Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

## PWA

This app is PWA-ready. After deploying, users on Android Chrome will see an "Add to Home Screen" prompt automatically.

Built with React + Vite + Anthropic API.
