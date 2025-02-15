import "./Destination.css";
import PARISH_IMG from "./IMG/paris.jpg";
import single from "./IMG/single.jpg";
import Ads_1 from "./IMG/ads_1.jpg";
import Ads_2 from "./IMG/ads_2.jpg";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tours give you the opportunity to see a lot within a time frame.</p>

        <DestinationData
          ClassName="first-des"
          heading=" Taal Volcano , Batangas"
          text="Embark on an extraordinary mountain adventure and let nature's
                majesty unfold before your eyes. As you ascend higher, leaving the
                hustle and bustle of everyday life behind, you enter a realm of
                awe-inspiring landscapes and breathtaking vistas.The air becomes
                crisper, and the scent of pine fills your nostrils as you find
                yourself surrounded by towering peaks. Snow-capped summits glisten
                in the sunlight, creating a stunning contrast against the vibrant
                green valleys below. The silence is profound, interrupted only by
                the occasional rustle of wildlife or the distant echo of a
                waterfall."
          photo1={PARISH_IMG}
          photo2={single}
        />
        <br />
        <DestinationData
          ClassName="first-des-revers"
          heading="Wanderlust: Your Ultimate Travel Companion"
          text="Embark on a journey of discovery with Wanderlust, the ultimate travel app. From planning to experiencing, we've got you covered.
                Wanderlust is your personal travel assistant, offering seamless booking options for flights, hotels, and activities, all in one place.
                Unlock a world of hidden gems and local experiences with Wanderlust's curated recommendations and insider tips.
                Stay organized with personalized itineraries, real-time updates, and interactive maps, ensuring you make the most of your adventures.
                Connect with a vibrant community of fellow travelers, share stories, and find travel buddies through Wanderlust's social features."
          photo1={Ads_1}
          photo2={Ads_2}
        />
      </div>
    </>
  );
};

export default Destination;
