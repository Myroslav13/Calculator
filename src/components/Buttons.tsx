interface Props {
  setDataToDisplay: React.Dispatch<React.SetStateAction<string>>;
}

function Buttons({setDataToDisplay}:Props) {
  // Handle number input
  function handleClick(data: string) {
    setDataToDisplay(prev => (
      prev !== "0" ? prev + data : data
    ))
  }

  // Handle reset click
  function handleClickReset() {
    setDataToDisplay("0")
  }

  // Handle delete click
  function handleClickDelete() {
    setDataToDisplay(prev => (
      prev.length > 1 ? prev.slice(0, -1) : prev = "0"
    ))
  }

  // Handle problem solving
  function handleClickSolve() {
    setDataToDisplay(prev => {
      try{
        let tempStr = prev.replace(/x/g, "*")
        let result = Number(eval(tempStr).toFixed(5))
        return result.toString()
      } catch(ex){
        handleClickReset()
        console.error(ex)
        return ""
      }
    })
  }

  return (
    <div className="div-buttons rounded-3 mt-3 p-3">
      <div className="d-flex gap-3">
        <button className="fw-bold fs-4" onClick={() => handleClick("7")}>7</button>
        <button className="fw-bold fs-4" onClick={() => handleClick("8")}>8</button>
        <button className="fw-bold fs-4" onClick={() => handleClick("9")}>9</button>
        <button className="delete-btn fw-bold fs-4 text-uppercase" onClick={() => handleClickDelete()}>del</button>
      </div>

      <div className="d-flex gap-3 mt-3">
        <button className="fw-bold fs-4" onClick={() => handleClick("4")}>4</button>
        <button className="fw-bold fs-4" onClick={() => handleClick("5")}>5</button>
        <button className="fw-bold fs-4" onClick={() => handleClick("6")}>6</button>
        <button className="fw-bold fs-4" onClick={() => handleClick("+")}>+</button>
      </div>

      <div className="d-flex gap-3 mt-3">
        <button className="fw-bold fs-4" onClick={() => handleClick("1")}>1</button>
        <button className="fw-bold fs-4" onClick={() => handleClick("2")}>2</button>
        <button className="fw-bold fs-4" onClick={() => handleClick("3")}>3</button>
        <button className="fw-bold fs-4" onClick={() => handleClick("-")}>-</button>
      </div>

      <div className="d-flex gap-3 mt-3">
        <button className="fw-bold fs-4" onClick={() => handleClick(".")}>.</button>
        <button className="fw-bold fs-4" onClick={() => handleClick("0")}>0</button>
        <button className="fw-bold fs-4" onClick={() => handleClick("/")}>/</button>
        <button className="fw-bold fs-4" onClick={() => handleClick("x")}>x</button>
      </div>

      <div className="d-flex gap-3 mt-3">
        <button className="fw-bold fs-4 reset-btn text-uppercase" onClick={() => handleClickReset()}>reset</button>
        <button className="fw-bold fs-4 result-btn" onClick={() => handleClickSolve()}>=</button>
      </div>
    </div>
  )
}

export default Buttons