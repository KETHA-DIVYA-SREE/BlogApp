import React from 'react';
import './Technology.css';
// import './styles.css';
import info from './info.json';
import {Image, Row, Col} from 'react-bootstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const Technology = () => {
    return (
        <>
        <Row>
        <Col xs={12} md={4} className="Intro">
            <p className="title">5 Ways to animate a React app</p>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <YouTubeIcon />
            <div className="d-flex Intro">
                <img className="Avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="Img Avatar1" />
                <div>
                    <p>Ketha Divya Sree</p>
                    <p>April 24, 2021 10 min read</p>
                </div>
            </div>
            <div className="jambo d-flex">
                <img className="logo" src="https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png" alt="Img Logo" />
                <div className="Heading">
                    <div className="Title">React.js</div>
                    <p>Animation</p>
                </div>
            </div>
            <div>Animation in React.Js app is a popular ropic and there are many ways to create different types of animations. Many developers create animation exclusively using css and adding classes to HTML, tags. This is a greatway and you should use it. If you want to create complex animations you can pay attention to GreenSock. GreenSock is the most powerful animation platform. There are also a lot of libraries, components for creating animation in React.</div>
            <p className="title">Let's talk about them</p>
            <img className="codeimg" src="https://res.cloudinary.com/practicaldev/image/fetch/s--T0-i_VDf--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/j8mjy8c47yk4t0ukc566.png" alt="Img Post" />
            <div className="d-flex justify-content-around">
                <p className="random">React</p>
                <p className="random">JavaScript</p>
                <p className="random">Animation</p>
            </div>
            <div className="d-flex">
                <ThumbUpIcon />
                9.3K likes
            </div>
            <hr />
            <div className="d-flex Intro">
                <img className="Avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="Img Avatar2" />
                <div>
                    <p>WRITTEN BY</p>
                    <p>Ketha Divya Sree</p>
                    <p>April 24, 2021 10 min read</p>
                </div>
            </div>
            <hr />
        </Col>
        </Row>
        <div>
            <h2>More From The Siren</h2>
            <div className="d-flex">
            <Row>
            {info.map(BlogItem=>
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
        </div>
        </>
    )
}

export default Technology;
