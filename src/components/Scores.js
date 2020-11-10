

const Scores = ({ current, maxScore }) => {

  return (<>
    <div className='row'>
      <h2 className='col'>Scores</h2>
    </div>
    <h3 className='col'>Current socre: {current}</h3>
    <h3 className='col'>Max score: {maxScore}</h3>
  </>
  )
}

export default Scores