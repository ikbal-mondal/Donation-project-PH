

const DonationCard = ({donationCard}) => {
   const  {id,picture,title,category,category_bg_color,card_bg_color,text_button_bg_color,}  =    donationCard;

    return (
        <div className="">
           <div className="card card-compact  shadow">
  <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
  <p>{category}</p>
    <h2 className="card-title">{title}</h2>
    
  </div>
</div>
        </div>
    );
};

export default DonationCard;