# Frontend setup

1. Initialise a react app

```
npm create vite@latest
```

2. Initialise tailwind

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. Update tailwind.config.js

```
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

4. Update index.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Empty up App.css

6. Install your package

```
npm i @niteshshetye/medium-common
```

7. Run the project locally

```
npm run dev
```
