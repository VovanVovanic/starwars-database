import React from 'react'
import useErrorBoundary from 'use-error-boundary';
import ErrorIndicator from '../ErrorIndicator/error-indicator';

export interface RowType {
  left: React.ReactNode
  right: React.ReactNode
}
type NodeType = React.ReactNode

// const JustRenderMe = () => {
//   throw new Error("Error Big Error");
// };

const Row: React.FC<RowType> = ({ left, right }) => {
  const { ErrorBoundary, didCatch, error } = useErrorBoundary();
  const isError = (node: NodeType):NodeType => {
    return (
      <>
        {didCatch ? (
         <ErrorIndicator message={error.message} />
        ) : (
            <ErrorBoundary>
            {node}
          </ErrorBoundary>
        )}
      </>
    );
  }
  return (
    <div className="row mb2">
      <div className="col-md-6">{isError(left)}</div>
      <div className="col-md-6">{isError(right)}</div>
    </div>
  );
}
export default Row