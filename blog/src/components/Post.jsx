import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Post = (props) => {
  const {id, title, subtitle, img, imgUrl} = props
  return(
  <>
  <div className='col'>
    <Card 
    // style={{ width: '15rem' }}
    >
    {/* TODO: colocar un condicional (ternario) para que si no tengo img, coloque una por defecto */}
    <Card.Img variant="top" src={imgUrl} height={120}/>
    <Card.Body>
      {title && 
      <Card.Title style={{height:"50px"}}>
        {title}
      </Card.Title>}
      {subtitle && 
      <Card.Text style={{height:"75px"}} key={`${id}-1`}> 
        {subtitle}
      </Card.Text>}
      {!subtitle && 
      <Card.Text style={{height:"75px"}} key={`${id}-2`}> 
        &nbsp;
      </Card.Text>}
      <Button variant="primary">Click</Button>
    </Card.Body>
    </Card>
  </div>
  </>
)}

export default Post;