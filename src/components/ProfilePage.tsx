export const ProfilePage = () => {
  return (
    <main className="main">
      <div className="main__cover"></div>
      <div className="main__photo"></div>
      <div className="main__bio">
        <div className="user-name">
          <h2 className="main__subtitle">Pop Cat</h2>
        </div>
        <div className="user-birthday">
          Date of birthday: <span className="birthda-date">2 january</span>
        </div>
        <div className="user-city">
          City: <span className="city">Minsk</span>
        </div>
        <div className="user-education">
          Education: <span className="institution">BNTU</span>
        </div>
        <div className="user-website">
          Website:{" "}
          <a href="#" className="website-adress">
            www.google.com
          </a>
        </div>
      </div>
      <div className="main__posts">
        <h2 className="main__subtitle">My posts</h2>
        <form className="main__form">
          <input type="text" className="main__input text" />
          <br />
          <input type="submit" value="Send" className="main__submit button" />
        </form>
        <div className="main__content published-posts">
          <div className="main__post">
            <div className="post-author"></div>
            <div className="post-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis doloremque ipsam deserunt reiciendis ab, debitis
              provident et quis cupiditate labore amet voluptatem dolor minima
              quae quisquam, voluptates animi. Quaerat, deleniti!
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
