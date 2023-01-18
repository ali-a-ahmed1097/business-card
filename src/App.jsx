import React from 'react';
import Content from './components/Content';
import Headings from './components/Headings';
import Buttons from './components/Button';
import Footer from './components/Footer';
import Anna from './assets/Anna.png';
import './App.css';

export default function App() {
  return (
    <div className='card'>
      <img src={Anna} className='anna' />
      <Headings />
      <Buttons />
      <Content />
      <Footer />
    </div>
  );
}