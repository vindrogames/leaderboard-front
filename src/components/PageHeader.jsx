import React from 'react';


const Header = () => {

  return (

    <header>
      <div id="navbar" class="top">
        <div className="vindro-logo">
          <a href="https://www.vindrogames.com/"><img src="img/vindro_logo_1.png" alt="vindrogames independant gaming studio in Madrid"></img></a>
          <div className="vindro-logo-text">
            <h4>vindro</h4>
            <h4 className="inline-light inline-teal">games</h4>
          </div>
        </div>
        <nav>
          <ul>
            <li><a href="https://www.vindrogames.com/">home</a></li>
            <li><a href="https://www.vindrogames.com/story.html">story</a></li>
            <li><a href="https://www.vindrogames.com/blog.html">blog</a></li>
            <li><a href="https://www.vindrogames.com/games.html">games</a></li>
            <li><a href="https://www.vindrogames.com/contact.html">contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;