import Card from './Card'
import { useState, useEffect } from 'react'

import Scores from './Scores'
const countries = [
  { id: 'us', name: 'United States' },
  { id: 'gb', name: 'United Kingdom' },
  { id: 'pl', name: 'Poland' },
  { id: 'de', name: 'Germany' },
  { id: 'fr', name: 'France' },
  { id: 'nl', name: 'Netherlands' },
  { id: 'ru', name: 'Russia' },
  { id: 'jp', name: 'Japan' },
  { id: 'it', name: 'Italy' },
  { id: 'es', name: 'Spain' },
  { id: 'ca', name: 'Canada' },
  { id: 'br', name: 'Brazil' },
]

const Main = () => {
  const [rendered, setRendered] = useState([])
  const [clicked, setClicked] = useState([])
  const [maxScore, setMaxScore] = useState(0)

  //render effect
  useEffect(() => {
    if (rendered.length < 8) {
      rendererEightFlags(rendered)
    }
  })

  //smelling bad here
  const addToClicked = (id) => {
    const check = clicked.filter(item => item === id)
    if (check.length > 0) {
      setClicked([])
      alert('you lose')
      if (clicked.length > maxScore) {
        setMaxScore(clicked.length)
      }
    } else {
      setClicked([...clicked, id])
    }
  }

  const chceckForDuplicates = (renderedArr, num) => {
    const duplicates = renderedArr.filter(item => item.id === num)
    return duplicates.length > 0 ? true : false
  }

  const randomizeUniqueNum = (renderedArr) => {
    let randomNum = Math.floor(Math.random() * (countries.length - 0)) + 0
    while (chceckForDuplicates(renderedArr, randomNum)) {
      randomNum = Math.floor(Math.random() * (countries.length - 0)) + 0
    }
    return randomNum
  }
  //function to run game on easy mode
  const addOneToRendered = (renderedArr) => {
    const num = randomizeUniqueNum(renderedArr);
    setRendered([...renderedArr, { id: num, content: countries[num] }])
  }
  //function to run game on hard mode
  const rendererEightFlags = (renderedArr) => {
    let arr = []
    for (let i = 0; i < 8; i++) {
      const num = randomizeUniqueNum(arr)
      arr.push({ id: num, content: countries[num] })
    }
    setRendered([...arr])
  }

  const deleteFromRendered = (index, arrToDeleteFrom) => {
    const arr = [...arrToDeleteFrom]
    setRendered(arr.filter(item => arrToDeleteFrom.indexOf(item) !== index))
  }
  return (
    <main className='container'>
      <Scores
        current={clicked.length}
        maxScore={maxScore} />
      <div className='row'>
        {rendered.map((item, index) =>
          <Card
            addToClicked={addToClicked}
            index={index}
            rendered={rendered}
            remove={deleteFromRendered}
            key={index}
            id={item.content.id}
            name={item.content.name} />)}
      </div>
    </main>
  )
}

export default Main