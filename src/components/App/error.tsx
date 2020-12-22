import React from 'react'
import useErrorBoundary from 'use-error-boundary';
const JustRenderMe = () => {
  throw new Error("Error Big Error");
};

const MyComponent = () => {
  const { ErrorBoundary, didCatch, error } = useErrorBoundary();

  return (
    <>
      {didCatch ? (
        <p>An error has been catched: {error.message}</p>
      ) : (
        <ErrorBoundary>
            <JustRenderMe />
            <p>dsdfsadfsdfsdafsdf</p>
        </ErrorBoundary>
      )}
    </>
  );
};
export default MyComponent