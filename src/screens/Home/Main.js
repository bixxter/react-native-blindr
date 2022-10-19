import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import BlindrCard from "../../components/BlindrCard";

const CARDS_MOCK = [
  {
    id: 1,
    name: "John Doe",
    age: 25,
    image: "https://picsum.photos/200/300",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    id: 2,
    name: "Ahmed Ali",
    age: 30,
    image: "https://picsum.photos/200/300",
    bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
  },
  {
    id: 3,
    name: "Abu Bakr",
    age: 35,
    image: "https://picsum.photos/200/300",
    bio: "Lorem ipsum dolor sit amet, ",
  },
];

const Main = () => {
  const [cards, setCards] = React.useState(CARDS_MOCK);
  const [topCard, setTopCard] = React.useState(cards[0]);
  const [swipedCards, setSwipedCards] = React.useState([]);

  const handleSwipe = (direction) => {
    const newCards = cards.slice(1);
    setCards(newCards);
    setTopCard(newCards[0]);
    setSwipedCards([...swipedCards, { ...topCard, direction }]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        {topCard && (
          <BlindrCard
            name={topCard.name}
            age={topCard.age}
            image={topCard.image}
            bio={topCard.bio}
            onSwipe={handleSwipe}
          />
        )}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Nope" onPress={() => handleSwipe("left")} />
        <Button title="Like" onPress={() => handleSwipe("right")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    padding: 20,
  },
});

export default Main;
