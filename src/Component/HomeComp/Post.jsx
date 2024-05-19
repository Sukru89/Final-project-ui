import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PostMessage from './PostMessage';


function Post() {
  return (
    <>
      {[
        'Primary',
        'Secondary',
        
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>sükrü</Card.Header>
          <Card.Body>
           
          
            <Row>
             <Col md={3}><img src="https://th.bing.com/th?q=Free+Clip+Art+of+Speaking&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=de-CH&cc=CH&setlang=en&adlt=moderate&t=1&mw=247" alt="" style={{ width: '70%', maxWidth: '800px', height: 'auto'}} /></Col>
            <Col md={9}>
            <Card.Text>
             German
            </Card.Text>
            <Card.Text>
             34
            </Card.Text>
            <Card.Text>
             Male
            </Card.Text>
            <Card.Text>
             IN PERSON
            </Card.Text>
            </Col>
            </Row>
        
          </Card.Body>

          <PostMessage/>
        </Card>
      ))}
    </>
  );
}

export default Post;