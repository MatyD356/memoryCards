

const Scores = ({ current, maxScore }) => {

  return (<>
    <div className='row'>
      <h2 className='col-12'>Scores</h2>
    </div>
    <div className='row'>
      <h3 className='col'>Current score: {current}</h3>
      <h3 className='col text-right'>Max score: {maxScore}</h3>
    </div></>
  )
}

export default Scores