


const Betting_Tips=()=>{
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
    ];

    return(
        <>
        <div className="container">
        <div className="blog-container">
        <h1 className="home-title">Betting Tips </h1>

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
    );
};
export default Betting_Tips;