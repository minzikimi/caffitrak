import React from 'react';
import styled from 'styled-components';
import coffeeCat from "../../assets/coffeeCat.gif";
import { Heading, HeadingTitle } from '../Detail/Detail';

const AboutApp = () => {
  return (
    <ArticleWrapper aria-labelledby="about-app-title">
      <Heading>
        <HeadingTitle id="about-app-title">About This App</HeadingTitle>
      </Heading>

      <ImageWrapper>
        <img 
          src={coffeeCat} 
          width={"200px"}
          alt="Animated gif of a cat drinking coffee" 
          style={{ borderRadius: "50%" }}
        />
      </ImageWrapper>

      <Paragraph>
        This app is primarily created for personal use, as I am a self-proclaimed <StrongText>coffee and tea enthusiast</StrongText>. I consume a considerable amount of caffeine each day, and sometimes, I find it difficult to engage in conversation before my first cup of coffee. 😅
      </Paragraph>

      <Paragraph>
        But I recently recognized the need to <BoldText>reduce my caffeine intake</BoldText> for health reasons. It’s one of those adulting moments, right? This led me to the idea of creating an application to track my caffeine consumption. 🧐
      </Paragraph>

      <Paragraph>
        <BoldText>Fun fact:</BoldText> It’s generally recommended to limit caffeine intake to <HighlightText>400mg per day</HighlightText>—the upper limit for most individuals. So, if you’re someone who drinks a lot of caffeine like me, perhaps it’s time to start monitoring your intake as well. 
      </Paragraph>

      <Paragraph>
        Since moving to Scandinavia, I’ve adopted the local tradition of "<BoldText>fika</BoldText>", a delightful custom of taking a break with coffee and something sweet. As a result, my coffee consumption has only increased. If you're not familiar with it, fika is essentially a daily coffee ritual. Needless to say, I’m quite fond of it. 🥐☕
      </Paragraph>

      <Paragraph>
        In addition to my love for coffee, ever since I started training at the gym & coding, as part of my new routine, energy drinks have also become a regular part of my lifestyle. They give me that extra boost when I need it, but I’m trying to keep track and stay mindful of how much caffeine I’m consuming from all sources.
      </Paragraph>

      <Paragraph>
        So, here I am, building this app to help track my caffeine intake—hopefully help me. And, if you’re in a similar situation, perhaps this app could be of use to you as well!
      </Paragraph>
    </ArticleWrapper>
  );
};

const ArticleWrapper = styled.article`
  margin: 3rem auto;
  max-width: 1200px;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #333;
  padding: 1rem;
  padding-bottom: 80px;
  border-radius: 8px;
  
  @media (max-width: 768px) {
    max-width: 90%;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding-bottom: 50px;
  }
`;

const ImageWrapper = styled.figure`
  text-align: center;
  float: left;
  margin-right: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    text-align: center;
    float: none;
    margin-right: 0;
  }
`;

const Paragraph = styled.p`
  font-family: Arial, sans-serif;
  font-size: 1rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 1.05rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const StrongText = styled.strong`
  font-size: 1.2rem;
  color: #1a1a1a;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const BoldText = styled.span`
  font-size: 1.1rem;
  font-weight: bold;
  color: #0c0c0c;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HighlightText = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: #d00000;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export default AboutApp;
