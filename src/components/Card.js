
const Card = ({ id, name, index, remove, rendered, addToClicked }) => {
  return (
    <section
      className='btn btn-outline-primary m-2 col-md-auto'
      aria-label='card-item'
      onClick={() => {
        remove(index, rendered)
        addToClicked(id)
      }}
    >
      <img
        className='card-img-top '
        src={`https://flagcdn.com/256x192/${id}.png`}
        width='256'
        height='192'
        alt="Card cap" />
      <div className='card-body'>
        <h5 className='card-title text-center'>{name}</h5>
      </div>
    </section>)
}

export default Card