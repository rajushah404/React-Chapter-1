import React from "react";
import ReactDOM from "react-dom/client";

/*
 *Header:- -Logo -NavItem -Cart
 *Body:-  -Search_Bar -Food_Cards_Container :- RestroCard
 *Footer :- -CopyRight -Links - address -contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn-icons-png.flaticon.com/512/706/706164.png"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestroCard = (props) => {
  const { resData } = props;
  const { image, name, aggregateRating, address } = resData?.item;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" src={image} alt="logo" />
      <h3>{name}</h3>
      <h4>Rating: {aggregateRating.ratingValue} ⭐</h4>
      <h4>Reviews: {aggregateRating.reviewCount}</h4>
      <h4>Address: {address.streetAddress}</h4>
    </div>
  );
};

const resList = [
  {
    "@type": "ListItem",
    position: 1,
    item: {
      "@type": "Restaurant",
      name: "Yummy Foods",
      image:
        "https://b.zmtcdn.com/data/pictures/2/19212482/5378ac76f96d77823576c775c2375a96_o2_featured_v2.jpg?output-format=webp",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "3.6",
        reviewCount: "11.4K",
      },
      url: "/motihari/yummy-foods-motihari-locality/order",
      address: {
        "@type": "PostalAddress",
        addressCountry: "",
        addressLocality: "",
        addressRegion: "",
        postalCode: "",
        streetAddress:
          "3rd floor, Above Bazar India, Main Road, Motihari Sadar, Purba Champaran(Bihar), Motihari Locality, Motihari",
      },
      servesCuisine: "Biryani, Chinese, Fast Food",
    },
  },
  {
    "@type": "ListItem",
    position: 2,
    item: {
      "@type": "Restaurant",
      name: "Craft Momo",
      image:
        "https://b.zmtcdn.com/data/pictures/8/20778288/4951f967eef5e8fef9d94532e7552807_o2_featured_v2.jpg?output-format=webp",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.2",
        reviewCount: "1,626",
      },
      url: "/motihari/craft-momo-motihari-locality/order",
      address: {
        "@type": "PostalAddress",
        addressCountry: "",
        addressLocality: "",
        addressRegion: "",
        postalCode: "",
        streetAddress: "Madhuban Chawni Chowk, Motihari Locality, Motihari",
      },
      servesCuisine: "Momos",
    },
  },
  {
    "@type": "ListItem",
    position: 3,
    item: {
      "@type": "Restaurant",
      name: "KFC",
      image:
        "https://b.zmtcdn.com/data/pictures/8/19924368/a32f5869b6d9b47c9fda4af9745fd3c9_o2_featured_v2.jpg?output-format=webp",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.6",
        reviewCount: "3,758",
      },
      url: "/motihari/kfc-motihari-locality/order",
      address: {
        "@type": "PostalAddress",
        addressCountry: "",
        addressLocality: "",
        addressRegion: "",
        postalCode: "",
        streetAddress:
          "Ground Floor, Khata 2, Ward 20, Bhawanipur Zirat, Arya Samaj Road, Motihari Locality, Motihari",
      },
      servesCuisine: "Burger, Fast Food, Rolls",
    },
  },
  {
    "@type": "ListItem",
    position: 4,
    item: {
      "@type": "Restaurant",
      name: "Suman Hotel",
      image:
        "https://b.zmtcdn.com/data/pictures/2/19093482/8dafcf32ae6e9013068581a59d04e287_o2_featured_v2.jpg?output-format=webp",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "3.4",
        reviewCount: "1,169",
      },
      url: "/motihari/suman-hotel-motihari-locality/order",
      address: {
        "@type": "PostalAddress",
        addressCountry: "",
        addressLocality: "",
        addressRegion: "",
        postalCode: "",
        streetAddress: "Chatauni Chowk Motihari, Motihari Locality, Motihari",
      },
      servesCuisine: "North Indian",
    },
  },
  {
    "@type": "ListItem",
    position: 5,
    item: {
      "@type": "Restaurant",
      name: "Chef Vishal Hotel And Restaurant",
      image:
        "https://b.zmtcdn.com/data/pictures/9/20411669/37750871991fc4a1dfb8c9013cab2498_o2_featured_v2.jpg?output-format=webp",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "3.6",
        reviewCount: "1,598",
      },
      url: "/motihari/chef-vishal-hotel-and-restaurant-motihari-locality/order",
      address: {
        "@type": "PostalAddress",
        addressCountry: "",
        addressLocality: "",
        addressRegion: "",
        postalCode: "",
        streetAddress:
          "Jhanpull Chowk, Arya Nagar, Station Road, Motihari Locality, Motihari",
      },
      servesCuisine: "North Indian, South Indian, Chinese",
    },
  },
  {
    "@type": "ListItem",
    position: 6,
    item: {
      "@type": "Restaurant",
      name: "JVW Arena",
      image:
        "https://b.zmtcdn.com/data/pictures/9/21037529/24c9c0c6752421848311c26de932f65f_o2_featured_v2.jpg?output-format=webp",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.1",
        reviewCount: "275",
      },
      url: "/motihari/jvw-arena-motihari-locality/order",
      address: {
        "@type": "PostalAddress",
        addressCountry: "",
        addressLocality: "",
        addressRegion: "",
        postalCode: "",
        streetAddress:
          "NH 28A, Mathiya Zirat, Near JJ Kanak Hospital, Motihari Locality, Motihari",
      },
      servesCuisine: "North Indian, Biryani, Chinese",
    },
  },
  {
    "@type": "ListItem",
    position: 7,
    item: {
      "@type": "Restaurant",
      name: "11th Avenue",
      image:
        "https://b.zmtcdn.com/data/pictures/1/20312171/3dfba4890e6d5f3709e14e6eed07f337_o2_featured_v2.jpg?output-format=webp",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.1",
        reviewCount: "430",
      },
      url: "/motihari/11th-avenue-motihari-locality/order",
      address: {
        "@type": "PostalAddress",
        addressCountry: "",
        addressLocality: "",
        addressRegion: "",
        postalCode: "",
        streetAddress:
          "Chandmari, Near Ms Collage, Motihari Locality, Motihari",
      },
      servesCuisine: "Chinese, North Indian, Mughlai",
    },
  },
  {
    "@type": "ListItem",
    position: 8,
    item: {
      "@type": "Restaurant",
      name: "Moti Mahal Tandoori Trail",
      image:
        "https://b.zmtcdn.com/data/pictures/2/21506142/2b40353c49b4afdb7d22bb72de9794a6_o2_featured_v2.jpg?output-format=webp",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "3.9",
        reviewCount: "69",
      },
      url: "/motihari/moti-mahal-tandoori-trail-motihari-locality/order",
      address: {
        "@type": "PostalAddress",
        addressCountry: "",
        addressLocality: "",
        addressRegion: "",
        postalCode: "",
        streetAddress:
          "Second Floor, RJ Plaza, Janpul Chowk, East Champaran, Motihari Locality, Motihari",
      },
      servesCuisine: "North Indian, Chinese, Biryani",
    },
  },
  {
    "@type": "ListItem",
    position: 9,
    item: {
      "@type": "Restaurant",
      name: "Foodie Moodie",
      image:
        "https://b.zmtcdn.com/data/pictures/7/21603417/c16b5325673d9fab822e7717d1746857_o2_featured_v2.jpg?output-format=webp",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.2",
        reviewCount: "50",
      },
      url: "/motihari/foodie-moodie-3-motihari-locality/order",
      address: {
        "@type": "PostalAddress",
        addressCountry: "",
        addressLocality: "",
        addressRegion: "",
        postalCode: "",
        streetAddress: "Bangali Colony, Gali 5, Motihari Locality, Motihari",
      },
      servesCuisine: "North Indian, Sandwich, Burger",
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((res) => (
          <RestroCard key={res.position} resData={res} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
