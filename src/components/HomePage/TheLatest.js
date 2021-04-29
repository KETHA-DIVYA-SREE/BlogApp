import './../../App.css';
import {Image, Row, Col} from 'react-bootstrap';

function TheLatest(props){
    return (
        <>
        <h2><u>The L</u>atest</h2>
        <div className="LatestBlog">
        <Row>
        {props.theLatest.map(BlogItem=>
            <>
            <Col xs={12} md={4}>
                <Image className="img-fluid BlogImg" src={BlogItem.srcimg} alt="Blog Image" rounded />
                <p className="title">{BlogItem.title}</p>
                <p className="text">{BlogItem.text}</p>
                <p><b>{BlogItem.subtext1}</b><span className="text">{BlogItem.subtext2}</span></p>
                </Col>
                </>
        )}
        </Row>
        </div>
        </>
    )
}

export default TheLatest;