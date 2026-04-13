# joytrip_website

## Analytics

This site ships with a Google Analytics 4 gtag.js snippet in `public/index.html`. The measurement ID is injected at build time from the `REACT_APP_GA4_ID` environment variable.

Before building for production, export the variable:

```bash
export REACT_APP_GA4_ID=G-XXXXXXXXXX
npm run build
```

If `REACT_APP_GA4_ID` is not set, the snippet will contain the literal placeholder `%REACT_APP_GA4_ID%` and analytics will silently fail. Local dev (`npm start`) does not require the variable — analytics is effectively disabled there.