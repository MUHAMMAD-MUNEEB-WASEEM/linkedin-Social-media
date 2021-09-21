import React from 'react';
import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
  const newsArticle = (heading, subtitle) => (

    <div className="widgets__article">

      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
      
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Leadastaire", "Top news - Banging hard on Upwork")}
      {newsArticle("Elon Musk", "Top News - Spacx took civilians to space")}
      {newsArticle("Covid-19", "Top News - Majority of world population gets vacinated")}
      {newsArticle("Cryptocurrency", "Top News - Market crash as $250 billion dollars got missing")}
      {newsArticle("Cricket", "Top News - T20 world cup 2021 starting from oct 24")}
    </div>
  )
}

export default Widgets