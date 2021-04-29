import React from 'react';
import './../../App.css';
import './Home.css';
import Master from './Master';
import LatestArticle from './LatestArticle';
import TheLatest from './TheLatest';
import LatestStory from './LatestStory';
import { Component } from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

class Home extends Component{
  states = {
    theLatest: [
      {
        srcimg: "https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2015/06/gujarat-shiva-temples.png",
        title: "Catch waves with an adventure guide",
        text: "Gujarat is vastly underrated and its a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and places",
        subtext1: "Travel",
        subtext2: " / August 21 2017",
      },
      {
        srcimg: "https://blogs.revv.co.in/blogs/wp-content/uploads/2020/08/Gir-National-Park-e1598571541189.jpeg",
        title: "Catch waves with an adventure guide",
        text: "Gujarat is vastly underrated and its a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and places",
        subtext1: "Travel",
        subtext2: " / August 21 2017",
      },
      {
        srcimg: "https://touristplace.org/wp-content/uploads/2020/02/Laxmi-Vilas-Palace-Gujarat.jpg",
        title: "Catch waves with an adventure guide",
        text: "Gujarat is vastly underrated and its a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and places",
        subtext1: "Travel",
        subtext2: " / August 21 2017",
      }
    ],

    latestArticle: [
      {
        srcimg: "https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2015/04/Untitled-design.png",
        title: "Catch waves with an adventure guide",
        text: "Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-",
        subtext1: "Travel",
        subtext2: " / August 21 2017",
        num: "2"
      },
      {
        srcimg: "https://www.trawell.in/admin/images/upload/899428835Somnath_Main.jpg",
        title: "Catch waves with an adventure guide",
        text: "Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-",
        subtext1: "Travel",
        subtext2: " / August 21 2017",
        num: "3"
      },
      {
        srcimg: "https://ihplb.b-cdn.net/wp-content/uploads/2016/12/somnath-gujarat.jpg",
        title: "Catch waves with an adventure guide",
        text: "Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-",
        subtext1: "Travel",
        subtext2: " / August 21 2017",
        num: "4"
      },
      {
        srcimg: "https://www.nativeplanet.com/img/2017/01/06-1483705246-gandhinagar.jpg",
        title: "Catch waves with an adventure guide",
        text: "Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-",
        subtext1: "Travel",
        subtext2: " / August 21 2017",
        num: "5"
      }
    ],
    
    latestStory: [
      {
        title: "Catch waves with an adventure guid",
        text: "Gujarat is vastly underrated and it's a mystery to us with the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrate and it's mystery to us why the region isn't more well-known as a tourist destination. It has a pletora of temples and palaces",
        subtext1: "TECH",
        subtext2: " / TODAY AT 11:54"
      },
      {
        title: "Catch waves with an adventure guid",
        text: "Gujarat is vastly underrated and it's a mystery to us with the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrate and it's mystery to us why the region isn't more well-known as a tourist destination. It has a pletora of temples and palaces",
        subtext1: "TECH",
        subtext2: " / AUGUST 21 2017"
      },
      {
        title: "Catch waves with an adventure guid",
        text: "Gujarat is vastly underrated and it's a mystery to us with the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrate and it's mystery to us why the region isn't more well-known as a tourist destination. It has a pletora of temples and palaces",
        subtext1: "TECH",
        subtext2: " / AUGUST 21 2017"
      }
    ],
  }
  render() {
    return (
        <div>
            <Master />
            <TheLatest theLatest={this.states.theLatest} />
            <hr />
            <LatestArticle latestArticle={this.states.latestArticle} />
            <hr />
            <LatestStory latestStory={this.states.latestStory} />
            <hr />
            <p className="text">VIEW MORE<ArrowForwardIcon className="arrow" /></p>
        </div>
    )
}
}

export default Home;
