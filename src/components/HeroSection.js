import React from 'react';
import '../App.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
     
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Link to="/sign-up" > 
        <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
                GET STARTED
        </Button>
        </Link>

      
        
        <a href="https://youtu.be/OHAWwaYu2H0" target="_blank" rel="noopener noreferrer">
        <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            >
                WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
        </a>
        
      </div>
    </div>
  );
}

export default HeroSection
