import styles from './mainPage.module.css';
  function MainPage() {

    return (
        <div className={styles.container}>
            <h1> 18 Best Drift Cars Ever Made</h1>

            <img className={styles.picture} src="/src/public/mainPage/mainphoto.jpg" alt="mainPhoto" />

              <p className={styles.text}>
                Drifting as a motorsport discipline is a fairly new idea,
                originating in the mountain roads of Japan in the early 1990s.
                It has quickly become a very popular spectacle around the globe,
                with competitive series like the US-based Formula Drift and Japan-based
                D1GP providing outlets for drifters to show off their skills. Any car can
                technically be used for drifting, as long as the driver is able to initiate oversteer,
                but some cars are naturally more set up for the sport than others.
              </p>
                <div className={styles.thinLine}></div>
                <p className={styles.text}>
                An excellent drift car will usually have a low center of gravity,
                be rear-wheel drive, and be easy to modify and upgrade. Plus, it'll usually be affordable,
                as drifters aren't too keen on paying huge sums for a car that's likely to end up clipping a lot
                of concrete barriers throughout its sporting life. It might be relatively new as a discipline,
                but drifting already has a huge enthusiast community across the globe, and it shows no sign of stopping.
                In fact, according to Red Bull, it's the fastest-growing motorsport in the world right now.
                </p>
        </div>
    )

};

export default MainPage;