import React, { useState } from "react"; 
import "./TinderCards.css"; 
import TinderCard from "react-tinder-card"; 

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Lomore wants a kiss", 
      url: "https://pictures.telegram-store.com/stickers/lihkg_lomore/lihkg_lomore_054c1b22ec60bc0808f63b6ef3bc3f0e.jpg"
    },
    {
      name: "Lomore brings you a beer", 
      url: "https://whatsticker.online/stickers_asset/ws-pack-39/0d00a882f35-l22.png"
    },
    {
      name: "Lomore thinks", 
      url: "https://pbs.twimg.com/profile_images/1185883975702601728/iHL8GY2n_400x400.jpg"
    },
    {
      name: "Lomore rocks", 
      url: "https://i.pinimg.com/280x280_RS/be/bf/0d/bebf0defad31a09e609b72fd09492e61.jpg"
    },
    {
      name: "Lomore angry", 
      url: "https://stickershop.line-scdn.net/stickershop/v1/sticker/15858354/android/sticker.png"
    },
    {
      name: "Lomore shy",
      url: "https://appstickers-cdn.appadvice.com/1185769247/820138110/b240635b18e3e794d0ca4ff4306dab30-10.png"
    },
    {
      name: "Lomore sad",
      url: "https://stickershop.line-scdn.net/stickershop/v1/sticker/3129990/android/sticker.png"
    }, 
    {
      name: "Lomore smiles",
      url: "https://stickershop.line-scdn.net/stickershop/v1/sticker/15858380/IOS/sticker.png"
    }

  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete); 
  }; 

  const outOfFrame = (name) => {
    console.log(name + " left"); 
  }; 

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard 
            className="swipe" 
            key={person.name} 
            preventSwipe={["up", "down"]} 
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{backgroundImage: `url(${person.url})`}}
              className="card"
            >
            <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
