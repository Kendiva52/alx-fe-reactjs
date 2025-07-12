import React from 'react';
import Header from './components/Header';
import WelcomeMessage from './components/WelcomeMessage'
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';



function App() {

  return (
    <div>
      <WelcomeMessage />
       <Header />
       <MainContent />
       <Footer />

       <UserProfile 
       name="Alice" 
       age="25" 
       bio="Loves hiking and photography" 
       />

    </div>    
  );
}

export default App;
