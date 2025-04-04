import React from 'react'
import coffeeCat from "../../assets/coffeecat.gif"

const AboutApp = () => {
  return (
    <article style={{ fontSize: '1.1rem', lineHeight: '1.6', clear: 'both' }} aria-labelledby="about-app-title">
      <h1 id="about-app-title" style={{ fontSize: '2rem', textAlign: 'center', color: '#47261f' }}>
        About This App
      </h1>
      
      <figure style={{ textAlign: 'center', float: 'left', marginRight: '20px', marginBottom: '20px' }}>
        <img 
          src={coffeeCat} 
          alt="Animated gif of a cat drinking coffee" 
          style={{ 
            width: '300px', 
            borderRadius: '50%' 
          }} 
        />
      </figure>

      <p>
        This app is primarily created for personal use, as I am a self-proclaimed <strong style={{ fontSize: '1.5rem', color: '#99753F' }}>coffee and tea enthusiast</strong>. I consume a considerable amount of caffeine each day, and sometimes, I find it difficult to engage in conversation before my first cup of coffee. 😅
      </p>
      <p>
        But I recently recognized the need to <span style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>reduce my caffeine intake</span> for health reasons. It’s one of those adulting moments, right? This led me to the idea of creating an application to track my caffeine consumption. 🧐
      </p>
      <p>
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Fun fact:</span> It’s generally recommended to limit caffeine intake to <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'tomato' }}>400mg per day</span>—the upper limit for most individuals. So, if you’re someone who drinks a lot of caffeine like me, perhaps it’s time to start monitoring your intake as well. 
      </p>
      <p>
        Since moving to Scandinavia, I’ve adopted the local tradition of "<span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>fika</span>", a delightful custom of taking a break with coffee and something sweet. As a result, my coffee consumption has only increased. If you're not familiar with it, fika is essentially a daily coffee ritual. Needless to say, I’m quite fond of it. 🥐☕
      </p>
      <p>
        In addition to my love for coffee, ever since I started training at the gym & coding, as part of my new routine, energy drinks have also become a regular part of my lifestyle. They give me that extra boost when I need it, but I’m trying to keep track and stay mindful of how much caffeine I’m consuming from all sources.
      </p>
      <p>
        So, here I am, building this app to help track my caffeine intake—hopefully help me. And, if you’re in a similar situation, perhaps this app could be of use to you as well!
      </p>
    </article>
  )
}

export default AboutApp;
