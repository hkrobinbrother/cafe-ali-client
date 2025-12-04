import SectionTitle from "../../Components/SectionTitle";
import cardImg from "../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white p-20">
      <SectionTitle subheading={"check it Out"} hading={"Featured Item"} />
      <div className="md:flex justify-center items-center py-8 px-16 pb-10 bg-black/20 ">
        <div>
          <img src={cardImg} alt="" />
        </div>
        <div className="md:ml-10 space-y-4">
            <p className="font-bold text-xl">Aug 20, 20029</p>
            <p className="uppercase font-bold text-xl">where can i get some?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, fugiat unde exercitationem similique distinctio nihil hic, minima repudiandae, nam inventore placeat temporibus atque ex. Reprehenderit veniam voluptas nobis at fuga?</p>
            <button class="btn btn-outline btn-primary border-0 border-b-4">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
