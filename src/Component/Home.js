import "../Styles/Home.css";
import Slider from 'react-slick';

import ss1 from "../Image/up1.jpg";
import s2 from "../Image/up2.avif";
import s3 from "../Image/b8.avif";
import s4 from "../Image/b1.jpg";
import s5 from "../Image/b6.jpg";

import home_img from "../Image/homeImg.png";
import logoImg from "../Image/reddy-anna-logo.png";
import refer_img from "../Image/refer.png";
import apk_img from "../Image/reddy-anna-apk.png";
import so_img from "../Image/s0.png";


const Home =()=>{
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
  
    return(
        <>
        
      <div className="container">
      
      <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={ss1} alt="Slide 1" className="slider-image" />
        </div>
        <div>
          <img src={s2} alt="Slide 2" className="slider-image" />
        </div>
        <div>
          <img src={s3} alt="Slide 3" className="slider-image" />
        </div>
        <div>
          <img src={s4} alt="Slide 4" className="slider-image" />
        </div>

        <div>
          <img src={s5} alt="Slide 5" className="slider-image" />
        </div>
      </Slider>
    </div>

     
        {/* ---------------------- welcome section --------------------------- */}
        <div className="welcome-container">
            <div className="welcome-img">
                <img src={home_img} alt="Cricket players" className="hero-image" />
            </div>
            <div className="welcome-content">
            <h1 className="home-title">
              Welcome to Reddy Anna Book – Trusted by Over <span className="highlight">555,000+ Users</span>
            </h1>
            <h2 className="subtitle">Why Choose Reddy Anna Book?</h2>
            <p className="description">
              Reddy Anna Book is India’s most trusted platform for online cricket betting. Over 
              <span className="bold"> 55K+ users </span> have already joined us and are enjoying a secure, 
              seamless betting experience. With features like 
              <span className="bold"> 24-hour withdrawals</span>, 
              <span className="bold"> instant Cricket IDs</span>, and 
              a commitment to <span className="bold">100% data security</span>, 
              Reddy Anna Book is the ultimate destination for all your betting needs.
            </p>
            <p className="description">
              Our platform offers unmatched reliability, unlimited transaction opportunities, 
              and round-the-clock customer service, ensuring you have a hassle-free experience at every step.
            </p>

            { /* Buttons */}
            <div className="button-container">
              <button className="btn">Reddy Anna Login</button>
              <button className="btn">Reddy Anna App</button>
              <button className="btn">Reddy Anna Join</button>
            </div>
        </div>
      </div>

      {/* ---------------------------- second section ------------------------------------- */}
      <div className="reddy-anna-section">
        <h1 className="home-title">
          How to Obtain Your Cricket ID Instantly with Reddy Anna?        
        </h1>
        <img src={logoImg} alt="Reddy Anna Book" className="reddy-anna-img" />
        <div className="second-sec-container">

        <p className="sec-description">
          Getting started with <span className="highlight">Reddy Anna</span> is fast and easy:
        </p>
        <ol className="steps">
          <li>
            <span className="bold">Visit:</span> Head to{" "}
            <a href="#" className="link">Reddy Anna Book</a>.
          </li>
          <li>
            <span className="bold">Register:</span> Fill out the simple sign-up form and create your Cricket ID within minutes.
          </li>
          <li>
            <span className="bold">Verify:</span> Ensure your details are accurate to enjoy uninterrupted betting.
          </li>
        </ol>
        <p className="sec-description">With Reddy Anna, you can start betting right away!</p>
        <button className="btn">Download</button>
      </div>
    </div>
    {/* ------------------------------ third section ------------------------- */}
      
    <div className="Third-sec-container">
      <div className="refer-img">
        <center> <img src={refer_img} alt="Cricket players" className="hero-image" /></center>
      </div>
      <div className="cart-container">
      <div className="card">
        <h2>How to Add Funds to Your Reddy Anna Account for Betting Purposes?</h2>
        <p className="sec-description">Adding funds to your Reddy Anna account is safe and straightforward:</p>
        <ul>
          <li>
            Choose from multiple secure payment methods, including <strong>UPI, net banking, and wallets.</strong>
          </li>
          <li>
            Follow the on-screen instructions, and funds will reflect instantly in your account.
          </li>
        </ul>
        <button className="btn">Reddy Anna Book</button>
      </div>
      <div className="card">
        <h2>How to Withdraw Cash From Reddy Anna?</h2>
        <p className="sec-description">Withdrawing your earnings is quick and simple:</p>
        <ol>
          <li><a href="#">Log in</a> to your account.</li>
          <li>Enter the amount you want to withdraw.</li>
          <li>Confirm the transaction.</li>
        </ol>
        <p className="sec-description"><strong>24-hour withdrawals</strong> ensure you always have access to your winnings—unlimited and on your terms!</p>
        <button className="btn">Reddy Anna Download</button>
      </div>
      </div>
    </div>
 {/* ------------------------forth section -------------------------------- */}

      <div className="forth-sec-container">
        <div className="apk-img">
          <center> <img src={apk_img} alt="Reddy Anna " className="hero-image" /></center>
        </div>
        <center>
        <h1 className="home-title">
          What Makes Reddy Anna Book Unique?
        </h1>
        </center>
        <p className="forth-description">
          At Reddy Anna Book, we understand the importance of trust and reliability in the betting world. That’s why we’ve built a platform that prioritizes user satisfaction and security above everything else. Our <strong> 24/7 customer service </strong> ensures that you never face an issue alone.
        </p>
        <p className="forth-description">
          We are proud to be the <strong> most genuine and transparent </strong> betting platform in the market. With no hidden fees, unlimited transactions, and user-friendly features, Reddy Anna Book is your go-to destination for all your cricket betting needs.  
        </p>
      </div>

      {/* -------------------------------- fifth section -------------------------------------------------- */}
      <div className="fifth-sec-container">
      <div className="so_img">
          <img src={so_img} alt="Illustration" />
      </div>
      
       <div className="fifth-sec-content">   
       <h1 className="fifth-title">How to Get Started with Reddy Anna?</h1> 
        <div className="text-section">
          <ol>
            <li>
              <strong>Obtain Your Cricket ID Instantly:</strong>
              <p className="sec-description">Signing up on Reddy Anna is quick and straightforward. Just follow these steps:</p>
              <ul>
                <li>Visit our homepage at <a href="#">Reddy Anna Book</a>.</li>
                <li>Click on the <strong>“Join Now”</strong> button.</li>
                <li>Fill in your details and create your Cricket ID within minutes.</li>
              </ul>
            </li>
            <li>
              <strong>Add Funds to Your Account:</strong>
              <p className="sec-description">
                Adding funds to your account is secure and instant. Choose from multiple payment methods, including UPI,
                credit cards, and net banking, and get started with just a few clicks.
              </p>
            </li>
            <li>
              <strong>Place Your Bets:</strong>
              <p className="sec-description">With your Cricket ID, you can start placing bets on your favorite matches and tournaments instantly.</p>
            </li>
            <li>
              <strong>Withdraw Your Winnings Anytime:</strong>
              <p className="sec-description">
                Reddy Anna Book ensures instant withdrawal of your earnings. No waiting, no delays—just quick and secure
                transactions, 24/7.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
    {/* --------------------------- six section -------------------------------------------- */}
      <div className=" six-sec-container">
        <center>
          <h1 className="home-title">
          Top Features of Reddy Anna Book        
        </h1>
        <ul>
            <li className="feature_li"><strong>Already Trusted by 55,000+ Users: </strong> Our growing community is proof of our reliability.</li>
            <li className="feature_li"><strong>Secure Transactions: </strong> We ensure your information is protected with top-notch security protocols.</li>
            <li className="feature_li"> <strong>Unlimited Withdrawals Anytime, Anywhere: </strong>No restrictions—your money, your rules!</li>
            <li className="feature_li"><strong>24×7 Customer Support:  </strong>Our dedicated team is here to assist you whenever you need it.</li>
            <li className="feature_li"><strong>Fast Cricket IDs: </strong>Sign up in minutes and start betting instantly.</li>
            <li className="feature_li"><strong>100% Genuine Platform:  </strong>Experience transparency and fairness in every transaction.</li> 
        </ul>
        </center>
      </div>

{/* ----------------------------- seven section ------------------------------------------ */}
      <div className="seven-sec-container">
      <h1 className="home-title">Get in Touch with Reddy Anna Book</h1>
      <p className="sec-description">
        Need help or have questions? Reddy Anna Book provides multiple ways to
        connect with us:
      </p>
      <ul>
        <li className="feature_li">
          <strong>WhatsApp Support:</strong> Instant assistance at your fingertips.
        </li>
        <li className="feature_li">
          <strong>Live Chat:</strong> Available directly on our website.
        </li>
        <li className="feature_li">
          <strong>Email Support:</strong> Send us a query, and our team will respond promptly.
        </li>
      </ul>
      <p className="sec-description">
        We are here to ensure your betting journey is smooth, safe, and enjoyable.
      </p>
      <button className="btn">Download</button>
      </div>
{/* ---------------------------- testimonial part ----------------------------------- */}
      <div className="testimonials-container">
      <h1 className="home-title">User Testimonials</h1>
      <span className="trophy">🏆</span>
      <div className="testimonial">
        <strong>Aman, Hyderabad</strong>
        <p>
          "I've been using Reddy Anna Book for months now, and I love how secure and easy it is to place bets. The 24-hour withdrawal feature is a game-changer!"
        </p>
      </div>
      <div className="testimonial">
        <strong>Nancy, Bangalore</strong>
        <p>
          "Their customer support is always available and super helpful. Reddy Anna Book is the most genuine platform I've ever used!"
        </p>
      </div>
      <div className="testimonial">
        <strong>Shiv, Pune</strong>
        <p>
          " Reddy Anna Book is the most genuine platform I've ever used!"
        </p>
      </div>
      <div className="testimonial">
        <strong>Priyansh, Noida</strong>
        <p>
        "I love how secure and easy it is to place bets. The 24-hour withdrawal feature is a game-changer!"        </p>
      </div>
      <div className="testimonial">
        <strong>Suraj, Jharkhand</strong>
        <p>
        "Their customer support is always available and super helpful."
        </p>
      </div>
    </div>

   {/* ---------------------------------------- nine section ---------------------------------  */}
   <div className="seven-sec-container">
      <h1 className="home-title">Join Reddy Anna Book Today!</h1>
      <p className="sec-description">
      Ready to experience the best cricket betting platform?
      </p>
      <ul>
        <li className="feature_li">
          <strong>Visit:</strong> www.redddyanna.com
        </li>
        <li className="feature_li">
          Sign up now and enjoy instant Cricket IDs, 24-hour withdrawals, and unmatched support
        </li>       
      </ul>      
    </div>
{/* -------------------------------- FAQ section ----------------------------------------------- */}
    <div className="faq-container">
      <center><h1 className="home-title">FAQs About Reddy Anna Book</h1></center>
      
      <div className="faq-item">
        <h3>1. What is Reddy Anna Book?</h3>
        <p className="faq-paragraph">Reddy Anna Book is a premier online platform for cricket betting, offering instant IDs, secure transactions, and 24/7 support.</p>
      </div>
      
      <div className="faq-item">
        <h3>2. How do I contact Reddy Anna Book?</h3>
        <p className="faq-paragraph">You can reach out to us via:</p>
        <ul>
          <li><strong>WhatsApp:</strong> Direct support from our team.</li>
          <li><strong>Live Chat:</strong> Available on our website.</li>
          <li><strong>Email:</strong> Get quick responses to your queries.</li>
        </ul>
      </div>
      
      <div className="faq-item">
        <h3>3. Is my information secure with Reddy Anna Book?</h3>
        <p className="faq-paragraph">Absolutely. We use advanced encryption to ensure your personal and financial data is protected at all times.</p>
      </div>
      
      <div className="faq-item">
        <h3>4. Is My Information Secure with Reddy Anna Book?</h3>
        <p className="faq-paragraph">Absolutely! Reddy Anna Book prioritizes user privacy and data security. We use advanced encryption technologies to ensure your personal and financial information remains confidential and protected.</p>
      </div>

      <div className="faq-item">
        <h3>5. How Can I Add Funds to My Reddy Anna Account?</h3>
        <p className="faq-paragraph">Adding funds is quick and secure:</p>
        <ul>
          <li>Log in to your account.</li>
          <li>Navigate to the “Add Funds” section.</li>
          <li>Select your preferred payment method (UPI, wallet, or bank transfer) and complete the transaction.
          Funds will be credited instantly to your account.</li>
        </ul>
      </div>

      <div className="faq-item">
        <h3>6. How Can I Withdraw My Winnings?</h3>
        <p className="faq-paragraph">Withdrawing money is simple and fast:</p>
        <ul>
          <li>Go to the “Withdrawal” section of your account.</li>
          <li>Enter the amount you wish to withdraw and confirm the request.</li>
          <li>Enjoy 24-hour withdrawal access with no limits on transaction amounts.</li>
        </ul>
      </div> 

      <h2>FAQs About Reddy Anna Book</h2>
     
      <div className="faq-item">
        <h3>1. What Makes Reddy Anna Book Stand Out from Other Betting Platforms?</h3>
        <p className="faq-paragraph">Reddy Anna Book is trusted by over 55,000+ users for its instant Cricket IDs, secure transactions, and 24×7 support. Unlike other platforms, we guarantee 100% genuine service with unlimited withdrawal options and a user-friendly interface.</p>             
      </div> 

      <div className="faq-item">
        <h3>2. How Do I Start Betting on Reddy Anna Book?</h3>
        <p className="faq-paragraph">Starting with Reddy Anna Book is as easy as 1-2-3:</p>
        <ul>
          <li>Sign Up: Visit Reddy Anna Book and create your account in minutes.</li>
          <li>Add Funds: Use secure payment methods like UPI or net banking to fund your account.</li>
          <li>Place Bets: Use your Cricket ID to start betting on live matches instantly.</li>
        </ul>
      </div> 

      <div className="faq-item">
        <h3>3. Is My Information Secure with Reddy Anna Book?</h3>
        <p className="faq-paragraph">Absolutely! Reddy Anna Book prioritizes user privacy and data security. We use advanced encryption technologies to ensure your personal and financial information remains confidential and protected.</p>             
      </div> 

      <div className="faq-item">
        <h3>4. How Can I Add Funds to My Reddy Anna Account?</h3>
        <p className="faq-paragraph">Adding funds is quick and secure:</p>
        <ul>
          <li>Log in to your account.</li>
          <li>Navigate to the “Add Funds” section.</li>
          <li>Select your preferred payment method (UPI, wallet, or bank transfer) and complete the transaction.
          Funds will be credited instantly to your account.</li>
        </ul>
      </div> 

      <div className="faq-item">
        <h3>5. How Can I Withdraw My Winnings?</h3>
        <p className="faq-paragraph">Withdrawing money is simple and fast:</p>
        <ul>
          <li>Go to the “Withdrawal” section of your account.</li>
          <li>Enter the amount you wish to withdraw and confirm the request.</li>
          <li>Enjoy 24-hour withdrawal access with no limits on transaction amounts.</li>
        </ul>
      </div> 

      <div className="faq-item">
        <h3>6. What Should I Do If I Face Issues While Using the Platform?</h3>
        <p className="faq-paragraph">We’re here to help! If you encounter any issues, you can reach our 24/7 customer support team via:</p>
        <ul>
          <li>WhatsApp: Instant messaging for quick solutions.</li>
          <li>Live Chat: Available directly on our website.</li>
          <li>Email: Send us your query, and we’ll get back to you promptly.</li>
        </ul>
      </div> 

      <div className="faq-item">
        <h3>7. Can I Bet on International Matches Using Reddy Anna Book?</h3>
        <p className="faq-paragraph">Yes, Reddy Anna Book provides access to a wide range of betting opportunities, including international cricket matches, domestic tournaments, and more. Check out the schedule to place your bets on live events.</p>        
      </div> 

      
      <div className="faq-item">
        <h3>9. How Quickly Can I Start Betting After Signing Up? </h3>
        <p className="faq-paragraph">Once you sign up and create your Cricket ID, you can start betting immediately. The process is quick, taking only a few minutes from registration to your first bet.</p>        
      </div> 

      <div className="faq-item">
        <h3>10. Do I Need to Worry About Hidden Charges? </h3>
        <p className="faq-paragraph">Not at all! Reddy Anna Book operates with complete transparency. There are no hidden fees or extra charges—what you see is what you get.</p>        
      </div> 


    </div>
  </div> 
        </>
    );
};
export default Home;