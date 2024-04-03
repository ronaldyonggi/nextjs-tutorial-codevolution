"use client"

interface ErrorBoundaryProps {
  error: Error;
  reset: () => void;
}

export default function ErrorBoundary({ error, reset } : ErrorBoundaryProps){
  return (
    <div>
      {error.message}
      <button onClick={reset}>Try again</button>
    </div>
  );
}