import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

class GroupExample extends React.Component {
        render () {
            // console.log(this.props.jack);
            return (
                <div>
                    {this.props.book.map((data)=>
                    <CardGroup>
                    <Card>
                        <Card.Img className='img' variant="top" src={data.bookImage} />
                        <Card.Body>
                        <Card.Title>{data.bookTitle}</Card.Title>
                        <Card.Text>
                            {data.description}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">{data.author}</small>
                        </Card.Footer>
                    </Card>
                    
                    </CardGroup>
                    )}
                </div>
            );
        }

}

export default GroupExample;