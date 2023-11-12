import styles from "./style/pages.module.css";
import { useAppSelector } from "../app/hooks";

function HomePage() {


  const { nightMode } = useAppSelector(state => state.nightMode);


  return (
    <div className={styles.container}>



      <h1 id="DriftMotorsport">Drift motorsport</h1>

      <img className={styles.picture} src='https://drive.google.com/uc?export=view&id=1ayyql0ARVV-JcWqJnqMTjvzH7VdNHC0B' alt="main pic" />

      <p className={styles.text}>
        Drifting as a motorsport discipline is a fairly new idea,
        originating in the mountain roads of Japan in the early 1990s.
        It has quickly become a very popular spectacle around the globe,
        with competitive series like the US-based Formula Drift and Japan-based
        D1GP providing outlets for drifters to show off their skills. Any car can
        technically be used for drifting, as long as the driver is able to initiate oversteer,
        but some cars are naturally more set up for the sport than others.
      </p>

      <div className={styles.thinLine} />

      <h1>What is drifting? </h1>


      <img className={styles.picture} src="https://drive.google.com/uc?export=view&id=1G0AaKUYs-bXK9zBsbvMp1YBm2N1qk8sg" alt='what is drift pic' />

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

      <img className={styles.gifSeparator} src="https://drive.google.com/uc?export=view&id=1C2e_dJa82Jpbcz2DlG2A1FmbLRqSEkS_" alt="separator gif" />


      <p className={styles.text}>
        Back in the real world, drifting has become a fiercely contested motorsport, with major competition series
        being run everywhere from New Zealand to Ireland. Competitions add extra layers of difficulty to the art of
        going sideways by scoring how well drivers drift in close proximity to each other, and how well the driver can
        link multiple drifts together, among other things. The more precise a driver can be in controlling their car's
        movements,
        the higher the score. Of course, for every meticulously measured pro-level competition, there are plenty more
        grassroots events
        that exist simply for attendees to have as much fun as possible, regardless of their skill level. The cars
        listed here are among the community's
        favorites and can be seen everywhere from grassroots events right up to national competitions.
       <span>
         You can find more information on <a className={`${styles.link} ${nightMode && styles.night}`}
                                            href={"https://en.wikipedia.org/wiki/Drifting_(motorsport)"}
                                            target={"_blank"}> Wikipedia</a>.
       </span>
      </p>

    </div>
  );

};

export default HomePage;