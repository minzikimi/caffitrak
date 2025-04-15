import React from 'react';
import styled from 'styled-components';
import coffeeCat from "../../assets/coffeecat.gif";

const AboutApp = () => {
  return (
    <ArticleWrapper aria-labelledby="about-app-title">
      <Title id="about-app-title">About This App</Title>

      <ImageWrapper>
        <img 
          src={coffeeCat} 
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
  margin: 3rem;
  font-size: 1.1rem;
  line-height: 1.6;
  clear: both;
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: #47261f;
`;

const ImageWrapper = styled.figure`
  text-align: center;
  float: left;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-family: Arial, sans-serif;
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const StrongText = styled.strong`
  font-size: 1.5rem;
  color: #99753F;
`;

const BoldText = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
`;

const HighlightText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: tomato;
`;

export default AboutApp;
