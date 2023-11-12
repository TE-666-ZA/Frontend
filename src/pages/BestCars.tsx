import styles from "./style/pages.module.css";
import { useAppSelector } from "../app/hooks";


function BestCars() {

  const { nightMode } = useAppSelector(state => state.nightMode);

  return (
    <div className={styles.container}>

      <h1>10 Best Drift Cars Ever Made</h1>

      <p className={styles.text}>
        An excellent drift car will usually have a low center of gravity,
        be rear-wheel drive, and be easy to modify and upgrade. Plus, it'll usually be affordable,
        as drifters aren't too keen on paying huge sums for a car that's likely to end up clipping a lot
        of concrete barriers throughout its sporting life. It might be relatively new as a discipline,
        but drifting already has a huge enthusiast community across the globe, and it shows no sign of stopping.
        In fact, according to Red Bull, it's the fastest-growing motorsport in the world right now.
      </p>

      < div className={styles.thinLine} />

      <h1> Nissan Silvia/240SX (S14) </h1>


      <img className={styles.picture} src="https://drive.google.com/uc?export=view&id=1nOsBipQfwWZehKl6xmOGUUpbzTl7eJXi" alt="240sx" />


      <p className={styles.text}>
        Although it was the S13 that first thrust the Silvia/240SX range into the spotlight as
        a drifter, the S14 has now become the most popular generation with buyers looking for a drift-ready S-chassis.
        Data from Hagerty insurance shows that 64% of insurance quotes for the S14 were flagged as modified, as opposed
        to 52% for the S13. So, it's safe to say that at least half the S14s remaining on the road in the US are
        modified in some way, with many of those likely to be set up as drift cars. The S14 was lowered, widened, and
        featured better weight distribution than the previous-gen car, according to Hagerty. The other big selling point
        of the car is its engine bay, which is roomy enough to fit a number of engine swaps, with LS swaps being common
        in the US.
              </p>

      <img className={styles.picture} src="https://drive.google.com/uc?export=view&id=1k4uJYw-OfHOJyeVCJKHiI4XPzQLXAv6Y" alt="240sx" />

      <p className={styles.text}>
        S14s were once very affordable, but their popularity among drifters has made them
        subject to what's often
        called, "the drift tax." As more examples get modified, raced, and often crashed, it gets harder to find stock
        examples in good condition. This pushes prices up, to the point where enthusiasts on a tight budget are now
        often priced out of the market altogether. Hagerty reports that an unmodified, well-preserved S14 can now
        command a premium of $20,000, a far cry from the four-digit price tags that the same cars would have sold for
        just a few years ago. <br/>
        <span>
          More information on <a className={`${styles.link} ${nightMode && styles.night}`}
                                              href={"https://en.wikipedia.org/wiki/Nissan_240SX"}
                                              target={"_blank"}> Wikipedia</a>.
        </span>
      </p>

      <div className={styles.thinLine} />

      <h1>BMW M3 (E36)</h1>

      <img className={styles.picture} src="https://drive.google.com/uc?export=view&id=1I-q1whi2N8fc5IrY9AScw5SrbJuZYZJn" alt="M3 E36" />

      <p className={styles.text}>
        The E36 is currently the cheapest generation of the BMW M3 on the used market, and its affordability has made it
        an increasingly popular option for drifters in recent years. With enough technical know-how, the car's stock
        3.0L straight-six engine can be turbocharged, saving the need for an engine swap. However, those in search of
        maximum horsepower can swap in an LS engine without too much hassle. The M3's well-balanced chassis and handling
        prowess make it a great driver's car, and as a result, a great base from which to build a pro-spec drift car.
              </p>

      <img className={styles.picture} src="https://drive.google.com/uc?export=view&id=1_UmNffEFWDCu82CbQ7nL8vJB2WTIsbOQ" alt="M3 E36" />

      <p className={styles.text}>
        Like many of the cars here, the E36 is supported by a large aftermarket, which makes finding upgrades as easy as
        clicking "Buy It Now" on a webstore and waiting for said upgrade to be delivered straight to the door. Its
        rising popularity with the modding community is one factor contributing to the E36's rising price, although for
        now, examples can still be found for comfortably under the $20,000 mark. How much longer it will stay that way
        remains to be seen.<br/>
        <span>
          More information on <a className={`${styles.link} ${nightMode && styles.night}`}
                                              href={"https://en.wikipedia.org/wiki/BMW_3_Series_(E36)"}
                                              target={"_blank"}> Wikipedia</a>.
        </span>
      </p>

      <div className={styles.thinLine} />

      <h1>Toyota Supra MkIV </h1>

      <img className={styles.picture} src="https://drive.google.com/uc?export=view&id=1ltvoASBydxnNFaoeWp4qLWYzgytm2qH0" alt="Supra" />

      <p className={styles.text}>On the subject of rising prices, few cars have seen their value skyrocket quite as much
        as the MkIV Toyota Supra over the past decade. Low-mileage examples of the car can now sell for a quarter of a
        million dollars, making them practically unobtainable for anyone looking to modify one. However, there are
        plenty of examples out there that were already converted to drift cars long before the Supra became a
        collector's item. One such example is pro drifter Dan Burkett's Formula Drift car, which racked up over 230,000
        miles of regular road use before being converted for competition. The Supra's 2JZ straight-six engine is famed
        for its ability to crank out huge horsepower figures with minimal modification, and Burkett's car makes 957
        horsepower to the wheels.
      </p>

      <img  className={styles.picture} src="https://drive.google.com/uc?export=view&id=179GAjvXHcWOrUY9-ybr8hBuh8SEoNe_M" alt="Supra" />

      <p className={styles.text}>
        Despite their reputation as one of the most well-known JDM cars, Supras aren't actually that common in Japan,
        and the ones that are modified there are mostly street builds. Their reputation as drift cars was earned mainly
        in the US and Europe, as Western drifters saw bags of potential in the car's highly-tunable 2JZ, creating builds
        that could make well over 1,000 horsepower. Ever since it was immortalized in the "Fast and Furious" movie
        franchise, the A80 Supra has remained one of the most sought-after JDM cars, and its popularity doesn't seem
        likely to wane anytime soon.<br/>
        <span>
          More information on <a className={`${styles.link} ${nightMode && styles.night}`}
                                              href={"https://en.wikipedia.org/wiki/Toyota_Supra"}
                                              target={"_blank"}> Wikipedia</a>.
        </span>
      </p>

      <div className={styles.thinLine} />

      <h1>Mazda RX-7 FD3S</h1>

      <img className={styles.picture} src="https://drive.google.com/uc?export=view&id=172V5UhSVDKiO7YkAA-hE7JZj115Z9OjP" alt="RX-7" />

      <p className={styles.text}>
        The Mazda RX-7 is the best-selling rotary car of all time by a considerable margin, with over 800,000 units sold
        between 1978 and 2002. The FD generation was the ultimate iteration of the car, with a suite of technology,
        powertrain, and styling improvements over its predecessor. The RX-7 was immortalized as a drift car in "The Fast
        and The Furious: Tokyo Drift," with the movie car featuring a distinctive Veilside body kit. The kit has
        remained Veilside's most iconic product to date, and is still available to purchase, according to Motor
        Authority. However, it's far from the only kit available for the RX-7, as nearly every major parts maker has
        designed one, from local Japanese legends like Re Amemiya to new-school brands like Rocket Bunny.
      </p>

      <img className={styles.picture} src="https://drive.google.com/uc?export=view&id=1hDbFqOJzA_67J-kQLQn-vtFe6XdKoaIU" alt="RX-7" />

      <p className={styles.text}>
        The RX-7's potent 13B rotary engine makes it a natural candidate for a drifter, and its visceral soundtrack at
        high revs adds to its appeal. However, used prices for the car are starting to become out of reach of grassroots
        drifters, in part due to the "drift tax," and in part due to the car's high maintenance costs, which sent many
        examples to the scrapyard before they became collector's items.<br/>
        <span>
          More information on <a className={`${styles.link} ${nightMode && styles.night}`}
                                              href={"https://en.wikipedia.org/wiki/Mazda_RX-7#Third_generation_(FD3S)"}
                                              target={"_blank"}> Wikipedia</a>.
        </span>
      </p>

      <div className={styles.thinLine} />

      <h1>Nissan 350Z/Fairlady z33</h1>

      <img className={styles.picture} src="https://drive.google.com/uc?export=view&id=1kayqU38LhVrZnbyXxJAbqt0_iX7eVNlA" alt="Z350" />

      <p className={styles.text}>
        Launched in 2002, the Nissan 350Z heralded the return of the Z line of sports cars after several years on
        hiatus. The car went back to the Z line's roots, ditching the cutting-edge tech and complicated systems of its
        predecessor, the 300ZX, for a simple front-engined V6, rear-wheel-drive layout. It was a formula that resonated
        well with enthusiasts, and the car sold over 165,000 units in the US in the seven years it was on sale. That
        popularity has meant that there are lots of examples for sale on the used market, which has kept prices low and
        meant that the 350Z is one of the best-value Japanese sports cars out there at the moment.
      </p>

      <img className={styles.picture} src="https://drive.google.com/uc?export=view&id=14Umu5kO6PlB88jCnvbliJ6iQVfOF9lma" alt="Z350" />

      <p className={styles.text}>
        It might be cheap, but the 350Z has the potential to compete at the top level of drifting and is one of the most
        common cars in Formula Drift. The aftermarket for the car is huge, giving owners plenty of options during the
        build process. The car's stock V6 is ripe for upgrading, but a 2JZ can also be easily swapped in for maximum
        horsepower figures.<br/>
        <span>
          More information on <a className={`${styles.link} ${nightMode && styles.night}`}
                                              href={"https://en.wikipedia.org/wiki/Nissan_350Z"}
                                              target={"_blank"}> Wikipedia</a>.
        </span>
      </p>


      <div className={styles.thinLine} />

      <h1>Subaru BRZ/Toyota GT86/Scion FR-S</h1>

      <img className={styles.picture} src="https://drive.google.com/uc?export=view&id=1IV2XYUusjvoSIeywacOnMeEStL6k_pDE" alt="BRZ" />

      <p className={styles.text}>
        The Subaru BRZ and its twin, the Toyota GT86, have now been on sale for 10 years, and in that time they've
        established themselves as two of the best cheap sports cars on the market. The second generation of the BRZ went
        on sale in 2022, with a number of improvements over its predecessor, including a revised chassis and a new, more
        powerful engine. It now makes 228 horsepower in stock form, but with such a huge aftermarket for the car, it can
        easily be modified to make significantly more. One of the biggest selling points of the BRZ is its price: It
        comes in at a fraction under $30,000 in base-spec form.
      </p>

      <img className={styles.picture} src="https://drive.google.com/uc?export=view&id=15dTI6UHxDe0vSN2nFMrzSsFyBez--lO2" alt="BRZ" />

      <p className={styles.text}>
        The car's top-tier handling, sizable aftermarket, and affordable starting price all combine to make a very
        attractive package for drifters looking for a new project car. It's common to see BRZs at grassroots
        competitions or as drift-ready street builds, but they can also be found at the highest levels of the sport.<br/>
        <span>
          More information on <a className={`${styles.link} ${nightMode && styles.night}`}
                                              href={"https://en.wikipedia.org/wiki/Toyota_86"}
                                              target={"_blank"}> Wikipedia</a>.
        </span>
      </p>

      <div className={styles.thinLine} />

      <h1>Lexus is300/Toyota Altezza</h1>

      <img className={styles.picture} src="https://drive.google.com/uc?export=view&id=1LTRV7iKMOox_6eeu2DisPFFggPS7OfAL" alt="Altezza" />

      <p className={styles.text}>
        It might seem like an unusual choice for a drift car, but the Lexus IS300 ticks all the right boxes for
        shredding tires on the track. The rear-wheel-drive sedan hides a naturally-aspirated 2JZ-GE engine under the
        hood, the same engine that's found in the MkIV Toyota Supra. It's also very affordable, with examples in good
        condition selling for as little as $10,000. Anyone who wants to upgrade their car's performance and looks can do
        so through the car's extensive aftermarket, and there are plenty of engine swap options, with 1JZs and 1UZs
        being common swaps.
      </p>

      <img className={styles.picture} src="https://drive.google.com/uc?export=view&id=1AYmosUX-JTfwlGhvBGN8R9Dw3g_ObQAs" alt="Altezza" />

      <p className={styles.text}>
        The IS300 was originally designed to compete with German rivals like the BMW 3 Series, but its class-leading
        reliability and tuning potential gave it a unique appeal that sets it apart from its competition. It's also now
        one of the cheapest ways for buyers to get their hands on a 2JZ engine, as prices for the Supra have shot
        through the roof in recent years, putting them out of reach for many drivers. With the IS300, buyers get the
        performance potential of the 2JZ, albeit in non-turbo form, but in the shell of a car that can comfortably seat
        four adults. A unique combination for sure, and one that's very well suited to drivers on a tighter budget.<br/>
        <span>
          More information on <a className={`${styles.link} ${nightMode && styles.night}`}
                                              href={"https://en.wikipedia.org/wiki/Lexus_IS"}
                                              target={"_blank"}> Wikipedia</a>.
        </span>
      </p>

      <div className={styles.thinLine} />

      <h1>BMW M3 (E46)</h1>

      <img className={styles.picture} src="https://drive.google.com/uc?export=view&id=1UFSVvNRjJjrPbwBeZCX67-OVuWK_NRAh" alt="M3 E46" />

      <p className={styles.text}>
        Much like the previous generation E36, the E46 M3 has now depreciated to the point of being affordable for
        grassroots enthusiasts. And, as it has become cheaper, the number of drift E46 builds has steadily increased.
        The car's S54 engine is powerful even in stock form, but it's capable of handling horsepower increases that can
        reach triple its original output. One competition car developed by Essa Motorsports for Formula Drift made 1,015
        wheel horsepower with surprisingly few modifications.
      </p>

      <img className={styles.picture} src="https://drive.google.com/uc?export=view&id=19z-s7e1MgN4GGIUNwQT3FsgNnAFNGTN_" alt="M3 E46" />

      <p className={styles.text}>
        However, it's not uncommon for builders to engine swap their E46s, with 2JZ swaps and LS swaps being the top
        choices. One drift build even features the S85 V10 engine from the M5 and M6, which seems like an odd choice
        considering that the engine was famed for unreliability. Even so, it just demonstrates the number of options
        available to E46 owners. As used examples keep getting cheaper, it's likely that even more unusual builds will
        be shown off soon.<br/>
        <span>
          More information on <a className={`${styles.link} ${nightMode && styles.night}`}
                                              href={"https://en.wikipedia.org/wiki/BMW_3_Series_(E46)"}
                                              target={"_blank"}> Wikipedia</a>.
        </span>
      </p>

      <div className={styles.thinLine} />

      <h1>Nissan Silvia S15</h1>

      <img className={styles.picture} src="https://drive.google.com/uc?export=view&id=1jZTrMx7KRHU4Vb0Ztjd2uraqGOHb8NIt" alt="S15" />

      <p className={styles.text}>
        The last car to bear the distinguished Silvia nameplate was the S15, which came in two flavors: Spec-S and
        Spec-R. The Spec-R was the more powerful of the two, featuring a turbocharged SR20DET engine that made 247
        horsepower as opposed to the Spec-S' naturally-aspirated 163 horsepower SR20DE. So, the Spec-R became the
        version to get for drifters. The success of the S13 and S14 Silvia as drift cars ensured that the S15 was highly
        sought after even from the factory. This popularity has continued on to today, and the S15 is now one of several
        JDM cars succumbing to the "drift tax."
      </p>

      <img className={styles.picture} src="https://drive.google.com/uc?export=view&id=1yxYxKup9iGbEbvi1PL7NvGwQMTYVQyyG" alt="S15" />

      <p className={styles.text}>
        Prices will no doubt increase even further when the car is no longer subject to the US 25-year import rule,
        which currently prevents Americans from legally importing one. The first S15s rolled off the production line in
        1999, so will be available to import from 2024. The Silvia is currently the most popular car among pro drivers
        in the Japanese D1GP Championship, with 10 drivers running the car in the 2022 season.<br/>
        <span>
          More information on <a className={`${styles.link} ${nightMode && styles.night}`}
                                              href={"https://en.wikipedia.org/wiki/Nissan_Silvia#S15"}
                                              target={"_blank"}> Wikipedia</a>.
        </span>
      </p>

      <div className={styles.thinLine} />

      <h1>Mazda RX-8</h1>

      <img className={styles.picture} src="https://drive.google.com/uc?export=view&id=1q5fye4Be5fXyyB9sxAgfD7n0exXiH-nk" alt="RX 8" />

      <p className={styles.text}>
        Mazda's successor to the lauded RX-7 FD3S was the RX-8, and to say that the car had big shoes to fill is an
        understatement. The RX-7's twin-turbo rotary and sharp handling had made it into a rival to the likes of the
        Porsche 911, but there were concerns that the car was getting too complicated and costly. So, for the RX-8,
        Mazda decided to take things back to basics, giving it a naturally-aspirated version of the Wankel rotary
        engine. This meant the car felt slower in the real world than its predecessor, even though on paper it had
        similar horsepower figures, according to Top Gear. Nevertheless, RX-8 sales were strong for the first year but
        tailed off shortly after amid concerns about reliability issues.
      </p>

      <img className={styles.picture} src="https://drive.google.com/uc?export=view&id=1HkKMxEy0FQT_T7C0z2tkSzKdsjxQBzpm" alt="RX8" />

      <p className={styles.text}>
        These concerns have remained among JDM fans to the present day, keeping prices low and making it an excellent
        budget drift car. With a 9,000 rpm redline, a decent aftermarket and a number of high-profile drift builds to
        take inspiration from, the RX-8 makes a great choice despite its mixed reputation. Anyone who still needs
        convincing should take a look at Mad Mike Whiddett's "BADBUL" RX-8, which makes 800 horsepower from its original
        triple-rotor engine. It has competed in Formula Drift, the New Zealand Drift Series, Red Bull Drift Shifters,
        and a number of other high-profile events. The RX-8 might not be as popular as the RX-7, but it's just as
        capable as a drift car.<br/>
        <span>
          More information on <a className={`${styles.link} ${nightMode && styles.night}`}
                                              href={"https://en.wikipedia.org/wiki/Mazda_RX-8"}
                                              target={"_blank"}> Wikipedia</a>.
        </span>
      </p>

    </div>
  );

}

export default BestCars;


