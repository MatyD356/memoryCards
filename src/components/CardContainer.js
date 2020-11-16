import Card from './Card'

const CardContainer = ({ addToClicked, rendered, deleteFromRendered }) => {

  return (<div className='d-flex flex-wrap justify-content-center' aria-label='card-container' >
    { rendered
      ? rendered.map((item, index) =>
        <Card
          addToClicked={addToClicked}
          index={index}
          rendered={rendered}
          remove={deleteFromRendered}
          key={index}
          id={item.content.id}
          name={item.content.name} />)
      : null}
  </div>
  )
}

export default CardContainer