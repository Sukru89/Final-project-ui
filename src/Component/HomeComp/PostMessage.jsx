import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { HandThumbsUp } from 'react-bootstrap-icons';

function PostMessage() {
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  return (
    <Row xs={1} md={2} className="g-4">
      <Col>
        <Card
          bg={"Primary".toLowerCase()}
          key={"Primary"}
          text={"Primary".toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>sükrü</Card.Header>
          <Card.Body>
            <Row>
              2 days ago
            </Row>
            <Row>
              hi iam sükrü i would like to learn german language. i can help you in türkish.
            </Row>
            <Row>
              <HandThumbsUp />
              <Button onClick={handleLikeClick}>contact</Button>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      
    </Row>
  );
}

export default PostMessage;
