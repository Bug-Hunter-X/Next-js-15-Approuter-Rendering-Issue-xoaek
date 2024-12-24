```javascript
// pages/index.js
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1>Next.js 15 App</h1>
    </Layout>
  );
}
```
```javascript
// components/Layout.js

export default function Layout({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}
```