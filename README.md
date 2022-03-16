# Full Stack SvelteKit Todo App

There are two branches.

**<a href="https://github.com/robots4life/val/tree/local">`local`</a>** is the first part of the app where the Todos are stored in a SvelteKit store.

https://www.youtube.com/watch?v=YipaPr4Aex8

**<a href="https://github.com/robots4life/val/tree/supabase">`supabase`</a>** is the second part of the app where everything runs on Supabase including User Authentication via Magic Link.

Both apps are styled with Tailwind CSS.

https://www.youtube.com/watch?v=YqIyET7XKIQ
</br>
</br>

**2022-03-16 `npm ls`**

```shell
val@0.0.1 /shared/httpd/val
├── @sveltejs/adapter-auto@1.0.0-next.31
├── @sveltejs/kit@1.0.0-next.295
├── autoprefixer@10.4.2
├── env-cmd@10.1.0
├── eslint-config-prettier@8.5.0
├── eslint-plugin-svelte3@3.4.1
├── eslint@7.32.0
├── postcss@8.4.8
├── prettier-plugin-svelte@2.6.0
├── prettier@2.5.1
├── svelte@3.46.4
└── tailwindcss@3.0.23
```

</br>
</br>

## supabase

### 1.

Setup Supabase and model the data inside the database.

a)  
We need `text` as a `string` for the Todo.

b)  
We need the `completed` state as a `boolean` for the Todo.

c)  
We need a User ID for the user that created the Todo.
As we progress we will later add this part in the database.

### 2.

Add Supabase JavaScript Client Library.

https://github.com/supabase/supabase-js

`npm install @supabase/supabase-js`

After that we can see that the Supabase JavaScript Client Library has been added to the project.

`npm ls`

```shell
val@0.0.1 /shared/httpd/val
├── @supabase/supabase-js@1.31.1
├── @sveltejs/adapter-auto@1.0.0-next.31
├── @sveltejs/kit@1.0.0-next.295
├── autoprefixer@10.4.2
├── env-cmd@10.1.0
├── eslint-config-prettier@8.5.0
├── eslint-plugin-svelte3@3.4.1
├── eslint@7.32.0
├── postcss@8.4.8
├── prettier-plugin-svelte@2.6.0
├── prettier@2.5.1
├── svelte@3.46.4
└── tailwindcss@3.0.23
```

### 3.

Create a `supabase.js` file to import the Supabase JavaScript Client Library and create a connection with the database.

`src/lib/supabase.js`

```js
import { createClient } from '@supabase/supabase-js';

// https://kit.svelte.dev/faq#how-do-i-use-environment-variables
const supabaseURL = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseURL, supabaseAnonKey);
```

</br>
</br>

In `supabase.js` there are two environment variables being used, `VITE_PUBLIC_SUPABASE_URL` and `VITE_PUBLIC_SUPABASE_ANON_KEY`.
The values for these environment variables are created inside the Supabase app.

<img src="src/images/Screenshot_20220316_134300-Supabse-URL-and-Anon-Key.png">

</br>
</br>

To be able to use environment variables with SvelteKit we use an `.env` file in the root of the repository.
This file is excluded by `.gitignore`.

```shell
VITE_PUBLIC_SUPABASE_URL=https://example.supabase.co
```

Check this link to learn about about environment variables and SvelteKit.
https://kit.svelte.dev/faq#how-do-i-use-environment-variables

</br>
</br>

To check if the Supabase client is working we can do a simple log.

`src/routes/__layout.svelte`

```html
<script>
	import '../app.css';

	import { supabase } from '$lib/supabase.js';

	console.log(supabase);
</script>
```

The output of logging the Supabase client then looks something like this.

```shell
SupabaseClient {
  supabaseUrl: 'https://example.supabase.co',
  supabaseKey: '...',
  restUrl: 'https://example.supabase.co/rest/v1',
  realtimeUrl: 'wss://example.supabase.co/realtime/v1',
  authUrl: 'https://example.supabase.co/auth/v1',
  storageUrl: 'https://example.supabase.co/storage/v1',
  schema: 'public',
  multiTab: true,
  fetch: undefined,
  headers: { 'X-Client-Info': 'supabase-js/1.31.1' },
  shouldThrowOnError: false,
  auth: SupabaseAuthClient {
    stateChangeEmitters: Map(1) { 'example-uuid' => [Object] },
    currentUser: null,
    currentSession: null,
    autoRefreshToken: true,
    persistSession: true,
    multiTab: true,
    localStorage: undefined,
    api: GoTrueApi {
      url: 'https://example.supabase.co/auth/v1',
      headers: [Object],
      cookieOptions: [Object],
      fetch: [Function (anonymous)]
    }
  },
  realtime: RealtimeClient {
    accessToken: null,
    channels: [],
    endPoint: 'wss://example.supabase.co/realtime/v1/websocket',
    headers: { 'X-Client-Info': 'supabase-js/1.31.1' },
    params: {
      apikey: '...'
    },
    timeout: 10000,
    transport: [Function: W3CWebSocket],
    heartbeatIntervalMs: 30000,
    longpollerTimeout: 20000,
    heartbeatTimer: undefined,
    pendingHeartbeatRef: null,
    ref: 0,
    logger: [Function: noop],
    conn: null,
    sendBuffer: [],
    serializer: Serializer { HEADER_LENGTH: 1 },
    stateChangeCallbacks: { open: [], close: [], error: [], message: [] },
    reconnectAfterMs: [Function (anonymous)],
    encode: [Function (anonymous)],
    decode: [Function: bound decode],
    reconnectTimer: Timer {
      callback: [Function (anonymous)],
      timerCalc: [Function (anonymous)],
      timer: undefined,
      tries: 0
    }
  }
}
```
