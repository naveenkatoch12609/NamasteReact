import React from "react";
import ReactDOM from "react-dom/client";

/* Episode 1
 const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello Naveen! from React."
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    heading,
    React.createElement("h1", {}, "I am a H1 Tag"),
    React.createElement("h2", {}, "I am a H2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am a H1 Tag"),
    React.createElement("h2", {}, "I am a H2 Tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// This above is example of using react without JSX
*/
/* Episode 3
//JSX in html like syntax
const Title = function () {
  return (
    <h1 id="head" className="head" tabIndex="1">
      Namaste React using JSX
    </h1>
  );
};

const number = 10000;

const title = <h1 className="title">Namaste Reast</h1>;

// we can omit return and {}
//Capital case to start a React component name
const JsxHeadingComponent = () => {
  return (
    <div id="container">
      <h2>{number}</h2>
      <Title />
      {Title()}
      {title}
      <h1 id="heading" className="heading" tabIndex="1">
        Namaste React in Functional Component
      </h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<JsxHeadingComponent />);
*/

/** Episode 4
 * Header
 *  Logo
 *  Nav Items
 *Body
 *  Search
 *  Restaurant Container
 *    Resturant Card
 *      img
 *      Name of Res,Star Rating,Cuisine,Delivery time
 * Footer
 *  Copyright
 *  Links
 *  Address
 */

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src="data:image/png;base64,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"
      ></img>
      <div className="logoContainer"></div>
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

const stylecard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    sla,
    cloudinaryImageId,
  } = resData?.info;
  return (
    <div className="res-card" style={stylecard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1702981885/" +
          cloudinaryImageId
        }
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRatingString}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

const resObjList = [
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "1003414",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/6c8a7784-0b42-419e-81f9-f2ab2319a479_1003414.JPG",
      locality: "Chhindwara",
      areaName: "Parasia Road",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.2,
      parentId: "721",
      avgRatingString: "4.2",
      totalRatingsString: "108",
      sla: {
        deliveryTime: 51,
        lastMileTravel: 14.3,
        serviceability: "SERVICEABLE",
        slaString: "50-55 mins",
        lastMileTravelString: "14.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-10 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-a65206b3-63bc-41a6-a582-a45fb70ed5df",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/pizza-hut-parasia-road-rest1003414",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "618037",
      name: "Jai Ganesh Bhojnalaya",
      cloudinaryImageId: "yzgqriufpzmloogcn2vl",
      locality: "Railway Colony",
      areaName: "Bus stand",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian", "South Indian", "Indian", "Chinese"],
      avgRating: 4.1,
      veg: true,
      parentId: "368432",
      avgRatingString: "4.1",
      totalRatingsString: "394",
      sla: {
        deliveryTime: 47,
        lastMileTravel: 13.7,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "13.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-09 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹66 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-a65206b3-63bc-41a6-a582-a45fb70ed5df",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/jai-ganesh-bhojnalaya-railway-colony-bus-stand-rest618037",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "151649",
      name: "Hotel Sai Nath & Sai Restaurant",
      cloudinaryImageId: "vkhcohhmqfczycw9vsar",
      locality: "railway station",
      areaName: "Chhindwara Locality",
      costForTwo: "₹200 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Chinese",
        "Beverages",
        "Fast Food",
        "Desserts",
      ],
      avgRating: 4.4,
      veg: true,
      parentId: "101802",
      avgRatingString: "4.4",
      totalRatingsString: "1.0K+",
      sla: {
        deliveryTime: 45,
        lastMileTravel: 11.3,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "11.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-09 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-a65206b3-63bc-41a6-a582-a45fb70ed5df",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/hotel-sai-nath-and-sai-restaurant-railway-station-chhindwara-locality-rest151649",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "151515",
      name: "Gupta Bhojnalay",
      cloudinaryImageId: "jo9pdipf4elcuch8g55q",
      locality: "fulwara chowk",
      areaName: "Chhindwara Locality",
      costForTwo: "₹200 for two",
      cuisines: ["Fast Food", "Indian", "Beverages"],
      avgRating: 4.8,
      veg: true,
      parentId: "91635",
      avgRatingString: "4.8",
      totalRatingsString: "449",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 11.8,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "11.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-09 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-a65206b3-63bc-41a6-a582-a45fb70ed5df",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/gupta-bhojnalay-fulwara-chowk-chhindwara-locality-rest151515",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "912754",
      name: "Urban Cafe",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/21/dbe91f1f-b400-4f4b-a78d-c6b99bdc61c5_912754.JPG",
      locality: "SOUTH CIVIL LINE",
      areaName: "Chhindwara City",
      costForTwo: "₹300 for two",
      cuisines: ["Snacks", "Pizzas", "Pastas", "Fast Food", "Burgers", "Cafe"],
      avgRating: 4,
      veg: true,
      parentId: "1330",
      avgRatingString: "4.0",
      totalRatingsString: "11",
      sla: {
        deliveryTime: 58,
        lastMileTravel: 12.6,
        serviceability: "SERVICEABLE",
        slaString: "55-60 mins",
        lastMileTravelString: "12.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-09 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-a65206b3-63bc-41a6-a582-a45fb70ed5df",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/urban-cafe-south-civil-line-chhindwara-city-rest912754",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "234875",
      name: "Adil Hotel",
      cloudinaryImageId: "gp1ityra6utvzqn6ghnv",
      locality: "Rautha Wada",
      areaName: "Chhindwara Locality",
      costForTwo: "₹150 for two",
      cuisines: ["North Indian", "Biryani", "Tandoor"],
      avgRating: 4.3,
      parentId: "27123",
      avgRatingString: "4.3",
      totalRatingsString: "1.3K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 11.5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "11.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-06-10 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹129",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-a65206b3-63bc-41a6-a582-a45fb70ed5df",
    },
    cta: {
      link: "https://www.swiggy.com/city/chhindwara/adil-hotel-rautha-wada-chhindwara-locality-rest234875",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

//Not using key unacceptable ,,,  Using index bad practice ,,, use unique id

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search </div>
      <div className="restContainer">
        {resObjList.map((restaurant, index) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

const AppLayoutComponent = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComponent />);
