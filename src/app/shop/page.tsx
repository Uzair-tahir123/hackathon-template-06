import Image from "next/image"
import ShopImage from "@/Pictures/shophero.png"
import { IoIosArrowForward } from "react-icons/io";
import Products from "@/components/Products";
import BlowHero from "@/components/ShopBlowHero";


export default function ShopHero(){

    interface Card{
        name: string,
        age: number,
        description: string,
        image: string,
        price: string,
      }

    const data: Card[] = [
        {
          name: 'Syltherine',
          price: 'Rp 2.500.000',
          age: 30,
          description: 'Stylish cafe chair',
          image: '/Images.png', // Use relative path from public directory        },
        },{
          name: 'Jane Smith',
          price: "Rp 2.500.000",
          age: 25,
          image: '/Images (6).png',
          description: 'A creative designer who loves creating stunning visuals.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/Images (1).png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/img.png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/Images.png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/Images (6).png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/Images (1).png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/img.png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Syltherine',
          price: "Rp 2.500.000",
          age: 30,
          image: "/Images.png",
          description: 'Stylish cafe chair',
        },
        {
          name: 'Jane Smith',
          price: "Rp 2.500.000",
          age: 25,
          image: '/Images (6).png',
          description: 'A creative designer who loves creating stunning visuals.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/Images (1).png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/img.png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/Images.png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/Images (6).png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/Images (1).png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/img.png',
          description: 'A software engineer specializing in backend systems.',
        },
      ];



    return(
        <>
        <div className="shopsect">
        <Image src={ShopImage} alt="Picture of the author" />
            <h3 className="font-bold text-[1.5rem]">Shop</h3>
            <h5 className="shopPara"><span className=" font-bold"></span></h5>
        </div>
                <BlowHero/>
            <div className="cardsContainer">
            {data.map((card, index) => (

            <div className="card" key={index} style={{ width: "15rem" }}>
                <img
                  src={card.image}
                  style={{ width: "18rem", height: "18rem" }}
                  className="card-img-top"
                //   alt={card.title}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    {card.name}
                  </h5>
                  <p className="card-text">{card.description}</p>
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    {card.price}
                  </h5>
            </div>
            </div>
                    ))}
            </div>

        </>
    )
}