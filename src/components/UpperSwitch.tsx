interface Props {
    theme: number;
    setTheme: React.Dispatch<React.SetStateAction<number>>;
}

function UpperSwitch({ theme, setTheme }: Props) {
  return (
    <div className="d-flex justify-content-between align-items-center w-100 mb-3">
      <h1 className='fs-3 fw-bold m-0'>calc</h1>

      <div className='d-flex justify-content-between align-items-center'>
        <div className="d-flex align-items-end" style={{height: "44px"}}>
          <h2 className='text-uppercase m-0 me-2' style={{fontSize: "12px", paddingBottom: "4px"}}>Theme</h2>
        </div>

        <div>
          <div className="d-flex" style={{paddingLeft: "8px", gap: "15px"}}>
            <p className="p-0 m-0">1</p>
            <p className="p-0 m-0">2</p>
            <p className="p-0 m-0">3</p>
          </div>

          <div onClick={() => setTheme(prev => (prev === 2 ? 0 : prev + 1))} className="div-theme rounded-3 position-relative">
            <div className="div-circle rounded-circle position-absolute" style={{transform: `translate(${theme * 23}px, -50%)`}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpperSwitch;
