import "../Styles/ReddyNews.css";
import DefaultImage from "../Image/reddy-anna-logo.png";
const Betting_Tips_Tricks = () => {
    const posts = [
        {
          title: "How to Place Bets on Reddy Anna Book: Bet on 1000+ Games and Live Cricket Matches",
          category: [
            { text: "Betting Tips", link: "bettingTips" },
            { text: "Betting Tips and Tricks", link: "Tips&Tricks" },
            { text: "Casino Games", link: "casinoGames" },
            { text: "Cricket Betting", link: "cricketBetting" },
            { text: "Online Betting", link: "bettingTips" },
            { text: "Reddy Anna Book", link: "reddyNews" }
          ],
          author: "Reddy Anna",
          date: "November 30, 2024",
          description: "Learn how to place bets on Reddy Anna Book with ease! Explore 1000+ games, 150+ live casino options, and cricket...",
        },
        {
          title: "ReddyAnna Book: The Ultimate Guide to Online Cricket Betting, Tips, and Bonuses",
          category: [
            { text: "Betting Tips and Tricks", link: "Tips&Tricks" },
            { text: "Legal and Safety", link: "" },
            { text: "Live Matches", link: "cricketLive" },
            { text: "Offers and Bonuses", link: "#" },
            { text: "Online Platforms", link: "#" },
            { text: "Promotions", link: "#" },
            { text: "Reddy Anna Book", link: "reddyNews" },
            { text: "ReddyAnna", link: "bettingTips" },
            { text: "Sports", link: "#" }
          ],
          author: "Reddy Anna",
          date: "November 30, 2024",
          description: "Cricket is not just a sport in India—it's a religion that brings millions of fans together. Over the years, online...",
        },
        {
          title: "Reddy Anna Online Book ID with 200% Welcome Bonus – Your Ultimate Cricket Betting Experience",
          category: [
            { text: "Betting Tips and Tricks", link: "Tips&Tricks" },
            { text: "Offers and Bonuses", link: "#" },
            { text: "Online Platforms", link: "#" }
          ],
          author: "Reddy Anna",
          date: "November 30, 2024",
          description: "Cricket is more than just a sport in India—it's a passion that unites millions of fans. For those looking to...",
        },
        {
            title: "Reddy Anna: The Best ID Service Provider in India – Get India’s Genuine Cricket ID",
            category: [
              { text: "Betting Tips and Tricks", link: "Tips&Tricks" },
              { text: "Legal and Safety", link: "#" },
              { text: " Live Matches", link: "cricketLive" },
              { text: " Offers and Bonuses", link: "#" },
              { text: " Online Platforms", link: "#" },
              { text: " Reddy Anna Book", link: "reddyNews" },
              { text: " Reddy Anna", link: "reddyNews" },
              { text: "Sports", link: "#" }
            ],
            author: "Reddy Anna",
            date: "November 30, 2024",
            description: "In the world of online cricket betting, trust and reliability are paramount. With numerous platforms available, finding a genuine and",
          },
          {
            title: "Reddy Anna Book Official: Get Your Cricket ID",
            category: [
              { text: "Betting Tips and Tricks", link: "Tips&Tricks" },
              { text: "Legal and Safety", link: "#" },
              { text: " Live Matches", link: "cricketLive" },
              { text: " Offers and Bonuses", link: "#" },
              { text: " Online Platforms", link: "#" },
              { text: " Reddy Anna Book", link: "reddyNews" },
              { text: " Promotions", link: "#" },
              { text: "Sports", link: "#" }
            ],
            author: "Reddy Anna",
            date: " October 9, 2024",
            description: "In the world of online cricket betting, the Reddy Anna Book Official platform stands as a trusted and popular name.",
          },
      ];
    
      return (
        <div className="container">
        <div className="blog-container">
        <h1 className="home-title">Betting Tips And Tricks </h1>
  
          <div className="blog-grid">
            {posts.map((post, index) => (
              <div key={index} className="blog-post">
                <p className="category">
                  {post.category.map((cat, i) => (
                    <a key={i} href={cat.link} className="category-link">{cat.text}</a>
                  )).reduce((prev, curr) => [prev, ", ", curr])}
                </p>
                <h2 className="title">{post.title}</h2>
                <p className="author-date">{post.author} / {post.date}</p>
                <p className="description">{post.description}</p>
              </div>
            ))}
            <div className="logo-container">
            <img src={DefaultImage} alt="Reddy Anna Logo" className="logo" />
            </div>
          </div>
          
        </div>
        </div>
  );
};

export default Betting_Tips_Tricks;
