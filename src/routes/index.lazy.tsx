import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return <h1>React + TypeScript + Tailwind + Tanstack Router Starter</h1>;
}
