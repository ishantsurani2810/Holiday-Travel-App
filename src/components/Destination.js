import "./Destination.css";
import IMG1 from "./IMG/3.jpg.jpg";
import IMG2 from "./IMG/4.jpg.jpg";
import IMG3 from "./IMG/5.jpg.jpg";
import IMG4 from "./IMG/10.jpg.jpg";
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
          photo1={IMG1}
          photo2={IMG2}
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
          photo1={IMG3}
          photo2={IMG4}
        />
      </div>
    </>
  );
};

export default Destination;
