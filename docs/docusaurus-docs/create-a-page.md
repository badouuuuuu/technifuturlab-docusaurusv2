---
sidebar_position: 1
---

# Crée une page

Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` -> `localhost:3000/`
- `src/pages/foo.md` -> `localhost:3000/foo`
- `src/pages/foo/bar.js` -> `localhost:3000/foo/bar`

## Create your first React Page

Create a file at `src/pages/my-react-page.js`:

```jsx title="src/pages/my-react-page.js"
import React from "react";
import Layout from "@theme/Layout";

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

A new page is now available at `http://localhost:3000/my-react-page`.

## Crée votre premiere page Markdown

Crée un fichier dans `src/pages/my-markdown-page.md`:

```mdx title="src/pages/ma-premiere-page.md"
# Page premiere page 

Tadam !
```

La nouvelle page est disponible sur: 
 `http://localhost:3000/ma-premiere-page`.
