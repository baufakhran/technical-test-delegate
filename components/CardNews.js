import { Card } from 'react-bootstrap'

export default function CardNews(props) {
  return (
    <Card className="mt-2">
      <Card.Body className="my-card-body">
        <div>
          <img
            style={{ height: '150px', width: '250px' }}
            src={props.urlImage}
            className="my-card-img"
          />
        </div>
        <div className="ml-4">
          <Card.Title>{props.title}</Card.Title>
          <small className="text-muted">{props.description}</small>
        </div>
      </Card.Body>
    </Card>
  )
}
