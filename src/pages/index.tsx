import React from 'react';
import { PageProps } from 'gatsby';

import Node from '@/components/Node';

const Home: React.FC<PageProps> = () => (
  <main>
    <Node />
    <p>A TypeScript starter for Gatsby. Great for advanced users.</p>
  </main>
);

export default Home;
