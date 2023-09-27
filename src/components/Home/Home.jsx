import { useEffect, useState } from "react";
import DonationCard from "../DonationCard/DonationCard";

const Home = () => {
  const [donationData, setDonationData] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

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
        setFilteredData(data); // Initialize filteredData with all data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleShowMore = () => {
    setShowAll(true);
  };

  const handleSearch = () => {
    // Filter data based on the search query
    const filtered = donationData.filter((item) =>
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const backgroundImageUrl = 'https://uploads-ssl.webflow.com/62d539593504f1e73d2c19b6/644568d067b7ef100a3c1eaf_decide%20a%20method%20of%20communication.png';

  return (
    <div>
     {/*  */}
     <div
    className="relative h-[70vh]"
    style={{
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
     borderRadius:'10px' 
    }}
  >
    <div className="absolute inset-0 bg-white opacity-90"></div>
    <div className="absolute inset-0 flex flex-col justify-center items-center">
   
      <h1 className="lg:text-4xl md:text-2xl text-xl text-black font-bold my-8">I Grow By Helping People In Need</h1>

      <div className="lg:w-1/3">
        <div className="relative">
          <div className="flex bg-gray-200 rounded">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 pl-3 pr-4 rounded bg-gray-200 text-black placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-400"
              value={searchQuery}
              onChange={handleInputChange}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
            <button
              className="btn rounded-0 btn-error text-white"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
     {/*  */}
     
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-6">
        {filteredData.slice(0, showAll ? filteredData.length : 4).map((donationCard) => (
          <DonationCard key={donationCard?.id} donationCard={donationCard} />
        ))}
      </div>
      {!showAll && (
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md"
          onClick={handleShowMore}
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default Home;
