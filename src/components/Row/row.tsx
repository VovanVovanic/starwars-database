import React from 'react'
export interface RowType {
  left: React.ReactNode
  right: React.ReactNode
}

const Row: React.FC<RowType> = ({ left, right }) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">{left}</div>
      <div className="col-md-6">{right}</div>
    </div>
  );
}
export default Row