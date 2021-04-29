import React from 'react'
import { Row, Col, Image } from 'react-bootstrap';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import info from './info.json';
import './../../App.css';
import './stylesBHFF.css';

const Bollywood = () => {
    return (
        <>
          <Row className="Articles">
            <Col xs={10} md={6}>
                <h2><u>Bolly</u>wood</h2>
                {info.Article.map( (ArticleData)=>{
                return (
                    <div className="Article">
                    <Row>
                    <Col xs={10} md={6}>
                    <Image src={ArticleData.srcimgB} className="ArticleImg" />
                    </Col>
                    <Col xs={10} md={6}>
                    <p className="ArticleTitle">{ ArticleData.title }</p>
                    <p>{ ArticleData.text }</p>
                    <div className="Subtext">
                    <p className="Subtext1">{ ArticleData.subtext1 }</p>
                    <p className="Subtext2">{ ArticleData.subtext2 }</p>
                    </div>
                    </Col>
                    </Row>
                    <hr />
                    </div>
                )
                })}
                <p><ArrowDownwardIcon className="arrow" /> Load more</p>
            </Col>
            <Col md={4} className="trile">
                <h2><u>Top P</u>ost</h2>
                <Image className="Post" src="https://www.bollywoodpresents.com/wp-content/uploads/gujarat-tourism.jpg" />
                <p className="ArticleTitle">Catch waves with an adventure guid</p>
                <div className="Subtext">
                <p className="Subtext1">TECH</p>
                <p className="Subtext2"> / AUGUST 21 2017</p>
                </div>
                <hr />
                {info.SubArticle.map( (SubArticleData)=>{
                return (
                    <div className="SubArticle">
                    
                    <div className="md-4 xs-10">
                    <Image src={SubArticleData.srcimgB} className="ArticleImg" />
                    </div>
                    <div className="md-8 xs-10">
                    <p><b>{ SubArticleData.title }</b></p>
                    <div className="Subtext">
                    <p className="Subtext1">{ SubArticleData.subtext1 }</p>
                    <p className="Subtext2">{ SubArticleData.subtext2 }</p>
                    </div>
                    </div>
                    <hr />
                    </div>
                )
                })}
                <div className="Advertisement position-relative">
                <p className="Advtext">Advertisement</p>
                </div>
            </Col>
            </Row>  
        </>
    )
}

export default Bollywood;