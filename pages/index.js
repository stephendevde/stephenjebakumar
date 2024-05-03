import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';


export default function Home() {
  return (
   <>
    <section id="event-slides" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h1 className="section-title wow fadeInUp" data-wow-delay="0.2s">Piano Recital 2024</h1>
              <p className="wow fadeInDown" data-wow-delay="0.2s">Featuring the students of Stephen Jebakumar</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xs-12 wow fadeInRight" data-wow-delay="0.3s">
            <div className="video">
              <img className="img-fluid" src="/img/about/rec.jpg" alt=""/>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xs-12 wow fadeInLeft" data-wow-delay="0.3s">
            <p className="intro-desc">
            Experience an enchanting evening of musical brilliance at our Piano Recital on June 15th, held at the Erindale Studio Theatre in Mississauga! Prepare to be immersed in harmonious melodies and virtuoso performances by our talented pianists, ensuring an unforgettable experience for all.


            </p>
            <h2 className="intro-title">Here are the students participating in this extraordinary event:</h2>
            <ul className="list-specification">
              <li><i className="lni-check-mark-circle"></i> Mithun</li>
              <li><i className="lni-check-mark-circle"></i> Zana</li>
              <li><i className="lni-check-mark-circle"></i> Rishona</li>
              <li><i className="lni-check-mark-circle"></i> Prabhakar</li> 
              <li><i className="lni-check-mark-circle"></i> Ebenezer</li> 
              <li><i className="lni-check-mark-circle"></i> Riaan Joshua</li> 
              <li><i className="lni-check-mark-circle"></i> Mary</li> 
              <li><i className="lni-check-mark-circle"></i> Jovan</li>
              <li><i className="lni-check-mark-circle"></i> Joshua</li>
              <li><i className="lni-check-mark-circle"></i> Evan</li>
              <li><i className="lni-check-mark-circle"></i> Hannah</li> 
              <li><i className="lni-check-mark-circle"></i> Joanah</li> 
              <li><i className="lni-check-mark-circle"></i> Amanda</li> 
              <li><i className="lni-check-mark-circle"></i> Jonathan</li> 
              <li><i className="lni-check-mark-circle"></i> Lakshan</li> 
            </ul>
            <p className="intro-desc">
            Join us for a night of captivating piano artistry and celebrate the talent and dedication of these exceptional musicians.
</p>






          </div>
        </div>
      </div>
    </section>

   
   <section id="contact-map" className="section-padding">
      <div className="container">
        <div className="row justify-content-center">
<div class="text-center">
                  <h2>Please take note of the following important details :</h2>
                 
                  <p>- Arrival Time: All students are expected to arrive at the venue by 5:30 PM to ensure a smooth and timely start to the event.</p>
                  <p>- Event Timing: The recital will commence promptly at 6:30 PM and conclude at 7:30 PM sharp.</p>
                  <p>- Dress Code: Students are kindly requested to attire themselves in formal dress with proper shoes.</p>                  
                
              
                </div>
        </div>
      </div>
    </section>
   </>
   
    
  );
}
