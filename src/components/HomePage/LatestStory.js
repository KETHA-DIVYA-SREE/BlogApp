import {Image, Row, Col} from 'react-bootstrap';
import './../../App.css';
import './Home.css';

export default function LatestStory(props) {
    return (
        <>
        <h2><u>Latest </u>Stories</h2>
        <div className="Stories">
        <Row>
        {props.latestStory.map(Data=>
            <>
              <Col xs={12} md={4}>
                <p className="title">{Data.title}</p>
                <p className="text">{Data.text}</p>
                <p><b>{Data.subtext1}</b> <span className="text">{Data.subtext2}</span></p>
              </Col>
            </>
        )}
        </Row>
        </div>

        </>
    )
}