import "./TripStyles.css";
import TripData from "./Tripdata";
import Trip1 from "./IMG/8.jpg.jpg"
import Trip2 from "./IMG/malesiya1.jpg"
import Trip3 from "./IMG/Franc (2).jpg"

function Trip() {
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destination using Google Maps. </p>
            <div className="Tripcard">
                <TripData
                    image={Trip1}
                    heading="Trip In Indonesia"
                    Text="Indonesia,offcially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and pacific oceans. It consistans of over 17,000 islands,including Sumatra,Java,Sulawesi and parts of Borneo and New Guinea. "
                />
                <TripData
                    image={Trip2}
                    heading="Trip In Malesiya"
                    Text="France, known as the epitome of sophistication, entices travelers with its timeless charm. From the iconic Eiffel Tower in Paris to the picturesque vineyards of Bordeaux, this diverse country offers a wealth of experiences. Indulge in exquisite cuisine, explore historic castles and cathedrals, and stroll along the charming streets lined with boutiques and cafes."
                />
                <TripData
                    image={Trip3}
                    heading="Trip In France"
                    Text="Malaysia beckons travelers with its vibrant blend of cultures, stunning landscapes, and mouthwatering cuisine. From the gleaming skyscrapers of Kuala Lumpur to the idyllic beaches of Langkawi, this Southeast Asian gem offers an array of experiences. Immerse yourself in bustling markets, visit ancient temples, and embark on thrilling wildlife adventures in lush rainforests.  "
                />
            </div>
        </div >
    )
}
export default Trip;