import logo from './res/airbnb.svg';
import imgs from './res/hero-imgs.png'
// import alto from './res/gay-albanian.jpeg'
// import jasko from './res/gaylord.jpeg'
// import panda from './res/dumbass.jpeg'
import 'normalize.css'
import './App.css';
import './styles/nav.css'
import './styles/hero.css'
import Card from './components/Card';
import cards from './res/newCards.json'


function NavBar() {
  return(
    <nav className='nav-bar'>
      <img src={logo} alt='airbnb logo'/>
    </nav>
  )
}

function Hero() {
  return(
    <section className='hero'>
      <img src={imgs} alt='hero images'/>
      <h1>Online Experiences</h1>
      <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  )
}


function getImgUrl(img) {
  //Make sure that all locally stored files
  // fix to take slice
  if (img.substring(0, 4) !== 'res/') {
    return img;
  }
  const image = require("./" + img);
  // console.log(`img: ${img}`)
  // console.log(`image: ${image}`)
  return image;
}

function Cards() {
  return(
    <section className='cards'>
      {cards.map(({
        imgSrc, 
        rating, 
        reviewCount, 
        country, 
        lesson, 
        price,
        spotsOpen
      }, index) => {
        return Card({
          key: index,
          imgSrc: getImgUrl(imgSrc),
          rating, 
          reviewCount, 
          country, 
          lesson, 
          price,
          spotsOpen
        })
      })}
    </section>
  )
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Cards />
      
    </div>
  );
}

export default App;
