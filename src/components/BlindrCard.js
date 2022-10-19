import React from "react";
import { View, Text, StyleSheet, Image, Animated } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";

const SWIPE_THRESHOLD = 120;

const BlindrCard = ({ name, age, image, bio, onSwipe }) => {
  const position = new Animated.ValueXY();
  const rotate = position.x.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: ["-30deg", "0deg", "30deg"],
    extrapolate: "clamp",
  });
  const likeOpacity = position.x.interpolate({
    inputRange: [0, 150],
    outputRange: [0, 1],
  });
  const nopeOpacity = position.x.interpolate({
    inputRange: [-150, 0],
    outputRange: [1, 0],
  });

  const handlePanGestureEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationX: position.x,
          translationY: position.y,
        },
      },
    ],
    { useNativeDriver: true }
  );

  const handlePanStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const { translationX } = event.nativeEvent;
      if (translationX > SWIPE_THRESHOLD) {
        Animated.spring(position, {
          toValue: { x: 500, y: 0 },
          useNativeDriver: true,
        }).start(() => onSwipe("right"));
      } else if (translationX < -SWIPE_THRESHOLD) {
        Animated.spring(position, {
          toValue: { x: -500, y: 0 },
          useNativeDriver: true,
        }).start(() => onSwipe("left"));
      } else {
        Animated.spring(position, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
        }).start();
      }
    }
  };

  return (
    <PanGestureHandler
      onGestureEvent={handlePanGestureEvent}
      onHandlerStateChange={handlePanStateChange}
    >
      <Animated.View
        style={[
          styles.card,
          {
            transform: [{ translateX: position.x }, { rotate }],
          },
        ]}
      >
        <Animated.View
          style={[
            styles.like,
            {
              opacity: likeOpacity,
            },
          ]}
        >
          <Text style={styles.likeText}>LIKE</Text>
        </Animated.View>
        <Animated.View
          style={[
            styles.nope,
            {
              opacity: nopeOpacity,
            },
          ]}
        >
          <Text style={styles.nopeText}>NOPE </Text>
        </Animated.View>
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.age}>{age}</Text>
        </View>
        <Text style={styles.bio}>{bio}</Text>
      </Animated.View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 500,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    position: "absolute",
    top: 50,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: "60%",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
  },
  age: {
    fontSize: 20,
    color: "#ccc",
  },
  bio: {
    fontSize: 16,
    padding: 10,
  },
  like: {
    position: "absolute",
    top: 50,
    left: 50,
    zIndex: 1000,
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  likeText: {
    fontSize: 32,
    color: "#fff",
  },
  nope: {
    position: "absolute",
    top: 50,
    right: 50,
    zIndex: 1000,
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  nopeText: {
    fontSize: 32,
    color: "#fff",
  },
});

export default BlindrCard;
