import React,{useEffect,useState} from 'react';
import ReactAudioPlayer from 'react-audio-player';

import './Home.css';
import House1 from '../images/img-1.jpg';
import House2 from '../images/img-2.jpg';
import House3 from '../images/img-3.jpg';
import House4 from '../images/img-4.jpg';
import House5 from '../images/img-5.jpg';
import House6 from '../images/img-6.jpg';
import service1 from '../images/s-1.png';
import service2 from '../images/s-2.png';
import service3 from '../images/s-3.png';
import Agent1 from '../images/pic-1.png';
import Agent2 from '../images/pic-2.png';
import Agent3 from '../images/pic-3.png';
import Agent4 from '../images/pic-4.png';
import { convertToAudio } from '../Service';






function Home() {
    const [url, setUrl] = useState('');
    const [play, setPlay] = useState('false')
    useEffect(()=>{
        (async() => {
       const url = await convertToAudio("welcome to my real estate page")
       const audiosrc= url ?? ''
       setUrl(audiosrc)
       setPlay(true)
      })()  
      })



    return (  
          
        <div>
            <ReactAudioPlayer
  src={url}
  autoPlay={play}
  
/>

            
<section className="services" id="services">

<h1 className="heading"> our <span>services</span> </h1>

<div className="box-container">

    <div className="box">
        <img src={service1} alt=""/>
        <h3>buying home</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam distinctio ipsa ab cum error quas fuga ad? Perspiciatis, autem officiis?</p>
        <a href="#" className="btn">learn more</a>
    </div>

    <div className="box">
        <img src={service2} alt=""/>
        <h3>renting home</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam distinctio ipsa ab cum error quas fuga ad? Perspiciatis, autem officiis?</p>
        <a href="#" className="btn">learn more</a>
    </div>

    <div className="box">
        <img src={service3} alt=""/>
        <h3>selling home</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam distinctio ipsa ab cum error quas fuga ad? Perspiciatis, autem officiis?</p>
        <a href="#" className="btn">learn more</a>
    </div>

</div>

</section>

        <section className="featured" id="featured">

      <h1 className="heading"> <span>featured</span> properties </h1>

     <div className="box-container">

    <div className="box">
        <div className="image-container">
            <img src={House1} alt="image"/>
            <div className="info">
                <h3>3 days ago</h3>
                <h3>for rent</h3>
            </div>
            <div className="icons">
                <a href="#" className="fas fa-film"><h3>1</h3></a>
                <a href="#" className="fas fa-camera"><h3>4</h3></a>
            </div>
        </div>
        <div className="content">
            <div className="price">
                <h3>$25,000/mo</h3>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-envelope"></a>
                <a href="#" className="fas fa-phone"></a>
            </div>
            <div className="location">
                <h3>modern apartments</h3>
                <p>jogeshwari west, mumbai, india - 400104</p>
            </div>
            <div className="details">
                <h3> <i className="fas fa-expand"></i> 3500 sqft </h3>
                <h3> <i className="fas fa-bed"></i> 3 beds </h3>
                <h3> <i className="fas fa-bath"></i> 2 baths </h3>
            </div>
            <div class="buttons">
                <a href="#" className="btn">request info</a>
                <a href="#" className="btn">view details</a>
            </div>
        </div>
    </div>

    <div className="box">
        <div className="image-container">
            <img src={House2} alt=""/>
            <div className="info">
                <h3>6 days ago</h3>
                <h3>for sell</h3>
            </div>
            <div className="icons">
                <a href="#" className="fas fa-film"><h3>2</h3></a>
                <a href="#" className="fas fa-camera"><h3>7</h3></a>
            </div>
        </div>
        <div className="content">
            <div className="price">
                <h3>$25,000/mo</h3>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-envelope"></a>
                <a href="#" className="fas fa-phone"></a>
            </div>
            <div className="location">
                <h3>modern apartments</h3>
                <p>jogeshwari west, mumbai, india - 400104</p>
            </div>
            <div className="details">
                <h3> <i className="fas fa-expand"></i> 3500 sqft </h3>
                <h3> <i className="fas fa-bed"></i> 3 beds </h3>
                <h3> <i className="fas fa-bath"></i> 2 baths </h3>
            </div>
            <div className="buttons">
                <a href="#" className="btn">request info</a>
                <a href="#" className="btn">view details</a>
            </div>
        </div>
    </div>

    <div class="box">
        <div className="image-container">
            <img src={House3} alt=""/>
            <div className="info">
                <h3>1 days ago</h3>
                <h3>for rent</h3>
            </div>
            <div className="icons">
                <a href="#" className="fas fa-film"><h3>1</h3></a>
                <a href="#" className="fas fa-camera"><h3>6</h3></a>
            </div>
        </div>
        <div className="content">
            <div className="price">
                <h3>$25,000/mo</h3>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-envelope"></a>
                <a href="#" className="fas fa-phone"></a>
            </div>
            <div className="location">
                <h3>modern apartments</h3>
                <p>jogeshwari west, mumbai, india - 400104</p>
            </div>
            <div className="details">
                <h3> <i className="fas fa-expand"></i> 3500 sqft </h3>
                <h3> <i className="fas fa-bed"></i> 3 beds </h3>
                <h3> <i className="fas fa-bath"></i> 2 baths </h3>
            </div>
            <div className="buttons">
                <a href="#" className="btn">request info</a>
                <a href="#" className="btn">view details</a>
            </div>
        </div>
    </div>

    <div className="box">
        <div className="image-container">
            <img src={House4} alt=""/>
            <div className="info">
                <h3>9 days ago</h3>
                <h3>for rent</h3>
            </div>
            <div className="icons">
                <a href="#" className="fas fa-film"><h3>2</h3></a>
                <a href="#" className="fas fa-camera"><h3>6</h3></a>
            </div>
        </div>
        <div className="content">
            <div className="price">
                <h3>$25,000/mo</h3>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-envelope"></a>
                <a href="#" className="fas fa-phone"></a>
            </div>
            <div className="location">
                <h3>modern apartments</h3>
                <p>jogeshwari west, mumbai, india - 400104</p>
            </div>
            <div className="details">
                <h3> <i className="fas fa-expand"></i> 3500 sqft </h3>
                <h3> <i className="fas fa-bed"></i> 3 beds </h3>
                <h3> <i className="fas fa-bath"></i> 2 baths </h3>
            </div>
            <div className="buttons">
                <a href="#" className="btn">request info</a>
                <a href="#" className="btn">view details</a>
            </div>
        </div>
    </div>

    <div className="box">
        <div className="image-container">
            <img src={House5} alt=""/>
            <div className="info">
                <h3>10 days ago</h3>
                <h3>for sell</h3>
            </div>
            <div className="icons">
                <a href="#" className="fas fa-film"><h3>3</h3></a>
                <a href="#" className="fas fa-camera"><h3>8</h3></a>
            </div>
        </div>
        <div className="content">
            <div className="price">
                <h3>$25,000/mo</h3>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-envelope"></a>
                <a href="#" className="fas fa-phone"></a>
            </div>
            <div className="location">
                <h3>modern apartments</h3>
                <p>jogeshwari west, mumbai, india - 400104</p>
            </div>
            <div className="details">
                <h3> <i className="fas fa-expand"></i> 3500 sqft </h3>
                <h3> <i className="fas fa-bed"></i> 3 beds </h3>
                <h3> <i className="fas fa-bath"></i> 2 baths </h3>
            </div>
            <div className="buttons">
                <a href="#" className="btn">request info</a>
                <a href="#" className="btn">view details</a>
            </div>
        </div>
    </div>

    <div className="box">
        <div className="image-container">
            <img src={House6} alt=""/>
            <div className="info">
                <h3>3 days ago</h3>
                <h3>for sell</h3>
            </div>
            <div className="icons">
                <a href="#" className="fas fa-film"><h3>1</h3></a>
                <a href="#" className="fas fa-camera"><h3>4</h3></a>
            </div>
        </div>
        <div className="content">
            <div className="price">
                <h3>$25,000/mo</h3>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-envelope"></a>
                <a href="#" className="fas fa-phone"></a>
            </div>
            <div className="location">
                <h3>modern apartments</h3>
                <p>jogeshwari west, mumbai, india - 400104</p>
            </div>
            <div className="details">
                <h3> <i className="fas fa-expand"></i> 3500 sqft </h3>
                <h3> <i className="fas fa-bed"></i> 3 beds </h3>
                <h3> <i className="fas fa-bath"></i> 2 baths </h3>
            </div>
            <div className="buttons">
                <a href="#" className="btn">request info</a>
                <a href="#" className="btn">view details</a>
            </div>
        </div>
    </div>

</div>

</section>

<section className="agents" id="agents">

    <h1 className="heading"> professional <span>agents</span> </h1>

    <div className="box-container">

        <div class="box">
            <a href="#" className="fas fa-envelope"></a>
            <a href="#" className="fas fa-phone"></a>
            <img src={Agent1} alt=""/>
            <h3>john deo</h3>
            <span>agent</span>
            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
            </div>
        </div>

        <div className="box">
            <a href="#" className="fas fa-envelope"></a>
            <a href="#" className="fas fa-phone"></a>
            <img src={Agent2} alt=""/>
            <h3>john deo</h3>
            <span>agent</span>
            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
            </div>
        </div>

        <div className="box">
            <a href="#" className="fas fa-envelope"></a>
            <a href="#" className="fas fa-phone"></a>
            <img src={Agent3} alt=""/>
            <h3>john deo</h3>
            <span>agent</span>
            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
            </div>
        </div>

        <div className="box">
            <a href="#" className="fas fa-envelope"></a>
            <a href="#" className="fas fa-phone"></a>
            <img src={Agent4} alt=""/>
            <h3>john deo</h3>
            <span>agent</span>
            <div className="share">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
            </div>
        </div>

    </div>

</section>






        </div>
    )
}

export default Home;
