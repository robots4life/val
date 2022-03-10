# Full Stack SvelteKit Todo App

There are two branches.

**<a href="https://github.com/robots4life/val/tree/local">`local`</a>** is the first part of the app where the Todos are stored in a SvelteKit store.

https://www.youtube.com/watch?v=YipaPr4Aex8

**<a href="https://github.com/robots4life/val/tree/supabase">`supabase`</a>** is the second part of the app where everything runs on Supabase including User Authentication via Magic Link.

Both apps are styled with Tailwind CSS.

https://www.youtube.com/watch?v=YqIyET7XKIQ
</br>
</br>

**2022-03-10 `npm ls`**

```shell
val@0.0.1 /shared/httpd/val
├── @sveltejs/adapter-auto@1.0.0-next.31
├── @sveltejs/kit@1.0.0-next.295
├── env-cmd@10.1.0
├── eslint-config-prettier@8.5.0
├── eslint-plugin-svelte3@3.4.1
├── eslint@7.32.0
├── prettier-plugin-svelte@2.6.0
├── prettier@2.5.1
└── svelte@3.46.4
```

</br>
</br>

## local

### 1.

Install Tailwind CSS with SvelteKit

https://tailwindcss.com/docs/guides/sveltekit

`npm install -D tailwindcss postcss autoprefixer`

`npx tailwindcss init tailwind.config.cjs -p`

returns

```shell
Created Tailwind CSS config file: tailwind.config.cjs
Created PostCSS config file: postcss.config.js
```

`mv postcss.config.js postcss.config.cjs`

</br>

`tailwind.config.cjs`

```js
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: []
};
```

</br>

`src/app.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

</br>

`src/routes/index.svelte`

```html
<h1 class="text-3xl font-bold underline">Val - Full Stack SvelteKit Todo App</h1>
```

Done.

### 2.
