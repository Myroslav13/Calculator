interface Props {
    theme: number;
    setTheme: React.Dispatch<React.SetStateAction<number>>;
}

function UpperSwitch({ theme, setTheme }: Props) {
  return (
    <div className="d-flex justify-content-between align-items-center w-100 mb-3">
      <h1 className='fs-3 fw-bold m-0'>calc</h1>

      <div className='d-flex justify-content-between align-items-end'>
        <h2 className='text-uppercase fs-6 m-0 me-2'>Theme</h2>

        <div>
          <div className="d-flex gap-3" style={{paddingLeft: "5px"}}>
            <p className="p-0 m-0">1</p>
            <p className="p-0 m-0">2</p>
            <p className="p-0 m-0">3</p>
          </div>

          <div onClick={() => setTheme(prev => (prev === 2 ? 0 : prev + 1))} className="div-theme rounded-3 position-relative">
            <div className="div-circle rounded-circle position-absolute" style={{transform: `translate(${theme * 20}px, -50%)`}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpperSwitch;
