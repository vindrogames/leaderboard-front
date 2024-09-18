import React from 'react';

const LeaderBoard = () => {

  const data = async () => {

    const apiCall = await fetch('https://highscoredev.fly.dev/highscore/return_all_json');
    const data = apiCall.json();

    console.log(data);
  }

  data();

  return (

    <main>
      <section id="searchBar">
        
      </section>

      <section id="leaderBoard">

      </section>
    </main>
  );
};

export default LeaderBoard;