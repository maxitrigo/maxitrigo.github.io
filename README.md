Hola! mi nombre es Maximiliano Trigo
Tambien conocido como maxitrigo en github.
Mi email: maxitrigo@gmail.com

¿Quién soy?
Soy un programador full stack orientado al diseño y desarrollo front-end. Desde que tengo 15 años me interese en la programación y el desarrollo de aplicaciones web, mi primer acercamiento con la programación fue en la escuela técnica, mi primer lenguaje en aprender fue HTML. Siempre he tenido una gran fascinación por el diseño y la informática. Esta pasión me llevó a explorar diferentes áreas tecnológicas hasta que descubrí el desarrollo Full Stack, donde encontré mi verdadera vocación.


¿Qué hago?
Actualmente me dedico a realizar proyectos y mejorar mis conocimientos en las tecnologias mas avanzadas. Me encanta aprender cosas nuevas y encontrar diferentes caminos para resolver los problemas.


¿A dónde me dirijo?
Actualmente me dedico a realizar proyectos y mejorar mis conocimientos en las tecnologías más avanzadas. Me encanta aprender cosas nuevas y encontrar diferentes caminos para resolver los problemas.


Tecnologias favoritas
Frontend
NextJS React CSS3 HTML5 JavaScript TypeScript Redux Bootstrap Tailwind CSS Material UI Figma
Backend
JavaScript TypeScript MongoDB Node.js Linux Express.js Git Bash PostgreSQL

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
