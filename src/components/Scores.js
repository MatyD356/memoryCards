

const Scores = ({ current, maxScore }) => {

  return (<>
    <div className='row'>
      <h2 className='col'>Scores</h2>
    </div>
    <div className='row'>
      <h3 className='col-12'>Current socre: {current}</h3>
      <h3 className='col-12'>Max score: {maxScore}</h3>
    </div></>
  )
}

export default Scores