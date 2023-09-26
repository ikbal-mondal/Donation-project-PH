import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import DonationCard from "../DonationCard/DonationCard";


const Home = () => {
  const [donationData, setDonationData] = useState([]);

  useEffect(() => {
    const apiUrl = 'donation.json';
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setDonationData(data);
        // console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <Banner></Banner>
   
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-6">
        {donationData?.map((donationCard) => (
         <DonationCard key={donationCard?.id} donationCard={donationCard} />
        ))}
      </div>
     
     
    </div>
  );
};

export default Home;
