interface Props {
  dataToDisplay: string;
}

function Display({dataToDisplay}:Props) {
  return (
    <div className="div-display rounded-3 w-100 d-flex align-items-center justify-content-end">
      <h2 className="pe-3 fw-bold fs-1">{dataToDisplay}</h2>
    </div>
  )
}

export default Display