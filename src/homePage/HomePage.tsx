import styles from "./pages.module.css";
import { useAppSelector } from "../app/hooks";

function HomePage() {

  const {nightMode} = useAppSelector(state => state.nightMode)

  return (
    <div className={styles.container}>
      <h1 id = 'DriftMotorsport'>Drift motorsport</h1>

      <img className={styles.picture} src="/src/public/homePage/mainPic.jpg" alt="mainPhoto" />

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

      <h1>What is drifting? </h1>

      <img className={styles.picture} src="/src/public/homePage/whatisDriftingPic.jpg" />

      <p className={styles.text}>
        The basic premise of drifting is initiating controlled oversteer,
        then delicately balancing the amount of countersteering with throttle control
        to ensure the car stays appropriately sideways throughout a corner. The discipline
        shot to international fame through cult classic manga and anime series like "Initial D,"
        and later through the "Fast and Furious" movie franchise. In particular,
        "The Fast and The Furious: Tokyo Drift" was instrumental in introducing the art of drifting to
        a mainstream audience, as (spoiler alert) the film's hero character, Sean, uses his drift skills to
        defeat his mafia boss nemesis Takashi in a tight race down a winding mountain road.
      </p>

      <img className={styles.gifSeparator} src="/src/public/homePage/separatorJapanRoad.gif" alt="separator gif" />

      <div className={styles.thinLine}></div>

      <p className={styles.text}>
        Back in the real world, drifting has become a fiercely contested motorsport, with major competition series
        being run everywhere from New Zealand to Ireland. Competitions add extra layers of difficulty to the art of
        going sideways by scoring how well drivers drift in close proximity to each other, and how well the driver can
        link multiple drifts together, among other things. The more precise a driver can be in controlling their car's movements,
        the higher the score. Of course, for every meticulously measured pro-level competition, there are plenty more grassroots events
        that exist simply for attendees to have as much fun as possible, regardless of their skill level. The cars listed here are among the community's
        favorites and can be seen everywhere from grassroots events right up to national competitions.
        You can find more information on <a className={`${styles.link} ${nightMode && styles.night}`}  href={'https://en.wikipedia.org/wiki/Drifting_(motorsport)'} target={'_blank'}> Wikipedia</a>.
       </p>

      <a > here </a>
    </div>
  );

};

export default HomePage;