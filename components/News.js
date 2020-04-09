import { Nav, Card } from 'react-bootstrap'
import CardNews from './CardNews'
export default function News({ country, data }) {
  let News = data.filter((el, index) => index < 8)
  return (
    <>
      <h2>{country}</h2>
      {News.map((el, id) => {
        return (
          <CardNews
            title={el.title}
            key={id}
            urlImage={el.urlToImage}
            description={el.description}
          ></CardNews>
        )
      })}
    </>
  )
}
