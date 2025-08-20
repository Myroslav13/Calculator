interface Props {
    setTheme: React.Dispatch<React.SetStateAction<0 | 1 | 2>>;
}

function UpperSwitch({setTheme}: Props) {

  return (
    <>
      <div className="d-flex justify-content-space align-items-center">
        <h1 className='fs-3 fw-bold'>calc</h1>
        
        <div className='d-flex'>
          <h2 className='text-uppercase fs-6'>Theme</h2>
          
          <div>

          </div>
        </div>
      </div>
    </>
  )
}

export default UpperSwitch