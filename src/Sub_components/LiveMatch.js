


const LiveMatch =()=>{
    const posts = [
        {
          title: "How to Place Bets on Reddy Anna Book: Bet on 1000+ Games and Live Cricket Matches",
          category: [
            { text: "Betting Tips", link: "bettingTips" },
            { text: "Betting Tips and Tricks", link: "Tips&Tricks" },
            { text: "Casino Games", link: "casinoGames" },
            { text: "Cricket Betting", link: "cricketBetting" },
            { text: "Online Betting", link: "online_betting" },
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
            { text: "Legal and Safety", link: "legal&safety" },
            { text: "Live Matches", link: "liveMatch" },
            { text: "Offers and Bonuses", link: "offer&bonus" },
            { text: "Online Platforms", link: "onlinePlatform" },
            { text: "Promotions", link: "promotions" },
            { text: "Reddy Anna Book", link: "reddyNews" },
            { text: "ReddyAnna", link: "reddyNews" },
            { text: "Sports", link: "sport" }
          ],
          author: "Reddy Anna",
          date: "November 30, 2024",
          description: "Cricket is not just a sport in India—it's a religion that brings millions of fans together. Over the years, online...",
        },
        {
          title: "Reddy Anna Online Book ID with 200% Welcome Bonus – Your Ultimate Cricket Betting Experience",
          category: [
            { text: "Betting Tips and Tricks", link: "Tips&Tricks" },
            { text: "Offers and Bonuses", link: "offer&bonus" },
            { text: "Online Platforms", link: "onlinePlatform" }
          ],
          author: "Reddy Anna",
          date: "November 30, 2024",
          description: "Cricket is more than just a sport in India—it's a passion that unites millions of fans. For those looking to...",
        },
    ]
    return(
        <>
        <div className="container">
        <div className="blog-container">
        <h1 className="home-title"> Live Matches </h1>

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
           
          </div>
          
        </div>
        </div>
        
        </>
    )
}
export default LiveMatch;