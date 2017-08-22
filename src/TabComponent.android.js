import React from "react";
import {
  Animated,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image
} from "react-native";
import { observer } from "mobx-react";
import MainStore from "./Store/MainStore";
const { width, height } = Dimensions.get("window");

@observer
export default class LandingScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      scrollX: new Animated.Value(0),
      current: 0,
      selected: 0,
      scrollView: null
    };
  }
  dragEnd(e) {
    console.log(e.nativeEvent.contentOffset.x, "DRAG END ONLY");
    if (e.nativeEvent.contentOffset.x > 123 && this.state.selected === 0) {
      this.refs.scrollRef._component.scrollTo({
        x: 358,
        y: 0,
        animated: true
      });
      this.setState({
        selected: 1
      });
      this.props.navigation.navigate("IdeasPage");
    }
    if (e.nativeEvent.contentOffset.x < 123 && this.state.selected === 0) {
      this.refs.scrollRef._component.scrollTo({
        x: 0,
        y: 0,
        animated: true
      });
    }
    if (e.nativeEvent.contentOffset.x < 205 && this.state.selected === 1) {
      this.refs.scrollRef._component.scrollTo({
        x: 0,
        y: 0,
        animated: true
      });
      this.setState({
        selected: 0
      });
      this.props.navigation.navigate("EventsPage");
    }
    if (e.nativeEvent.contentOffset.x > 520 && this.state.selected === 1) {
      this.refs.scrollRef._component.scrollTo({
        x: 719,
        y: 0,
        animated: true
      });
      this.setState({
        selected: 2
      });
      this.props.navigation.navigate("ProfilePage");
    }
    if (
      e.nativeEvent.contentOffset.x > 205 &&
      this.state.selected === 1 &&
      e.nativeEvent.contentOffset.x < 520
    ) {
      this.refs.scrollRef._component.scrollTo({
        x: 358,
        y: 0,
        animated: true
      });
    }
    if (e.nativeEvent.contentOffset.x < 554 && this.state.selected === 2) {
      this.refs.scrollRef._component.scrollTo({
        x: 358,
        y: 0,
        animated: true
      });
      this.setState({
        selected: 1
      });
      this.props.navigation.navigate("IdeasPage");
    }
    if (e.nativeEvent.contentOffset.x > 554 && this.state.selected === 2) {
      this.refs.scrollRef._component.scrollTo({
        x: 719,
        y: 0,
        animated: true
      });
    }
  }
  handleScrollEndEvents(e) {
    console.log("Momentum scroll end", e.nativeEvent.contentOffset.x);
  }
  render() {
    var self = this;
    // console.log(MainStore.scrollPos, "Observer");
    const movY = MainStore.scrollPos.interpolate({
      inputRange: [0, 180],
      outputRange: [0, -180]
    });
    const zoomXFactor = this.state.scrollX.interpolate({
      inputRange: [0, 100, 200, 300, 375, 475, 575, 675, 750],
      outputRange: [1.12, 1.2, 1.3, 1.2, 1.12, 1.2, 1.3, 1.2, 1.12],
      extrapolate: "clamp"
    });
    const movXBar = this.state.scrollX.interpolate({
      inputRange: [0, 375, 750],
      outputRange: [0, 128, 248],
      extrapolate: "clamp"
    });
    const overScroll = this.state.scrollX.interpolate({
      inputRange: [-100, 0, 750, 850],
      outputRange: [-100, 0, 0, 100],
      extrapolate: "clamp"
    });
    const zoomYFactor = this.state.scrollX.interpolate({
      inputRange: [0, 100, 200, 300, 375, 475, 575, 675, 750],
      outputRange: [1.15, 1.25, 1.5, 1.25, 1.15, 1.25, 1.5, 1.25, 1.15],
      extrapolate: "clamp"
    });
    return (
      <Animated.View
        style={{
          height: 225,
          width: width,
          borderWidth: 2,
          borderColor: "green",
          transform: [{ translateY: movY }]
        }}
      >
        <Animated.View
          style={{
            height: 60,
            width: width,
            backgroundColor: "rgba(0,0,0,0.0)",
            position: "absolute",
            zIndex: 1,
            top: 160,
            flexDirection: "row",
            transform: [{ translateX: overScroll }]
          }}
        >
          <Animated.View
            style={{
              position: "absolute",
              top: 0,
              height: 4,
              width: 100,
              left: 10,
              backgroundColor: "yellow",
              transform: [{ translateX: movXBar }]
            }}
          />
          <TouchableOpacity
            onPress={() => {
              this.refs.scrollRef._component.scrollTo({
                x: 0,
                y: 0,
                animated: true
              });
              this.setState({
                selected: 0
              });
              this.props.navigation.navigate("EventsPage");
            }}
            style={{
              height: 60,
              width: width / 3,
              justifyContent: "center",
              alignItems: "center"
            }}
            disabled={this.state.selected === 0}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: this.state.selected === 0 ? "orange" : "white"
              }}
            >
              EVENTS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.refs.scrollRef._component.scrollTo({
                x: 358,
                y: 0,
                animated: true
              });
              this.setState({
                selected: 1
              });
              this.props.navigation.navigate("IdeasPage");
            }}
            style={{
              height: 60,
              width: width / 3,
              justifyContent: "center",
              alignItems: "center"
            }}
            disabled={this.state.selected === 1}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: this.state.selected === 1 ? "orange" : "white"
              }}
            >
              IDEAS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.refs.scrollRef._component.scrollTo({
                x: 719,
                y: 0,
                animated: true
              });
              this.setState({
                selected: 2
              });
              this.props.navigation.navigate("ProfilePage");
            }}
            style={{
              height: 60,
              width: width / 3,
              justifyContent: "center",
              alignItems: "center"
            }}
            disabled={this.state.selected === 2}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: this.state.selected === 2 ? "orange" : "white"
              }}
            >
              PROFILE
            </Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.ScrollView
          horizontal={true}
          scrollEventThrottle={16}
          ref="scrollRef"
          showsHorizontalScrollIndicator={false}
          style={{
            position: "absolute",
            top: 0,
            flexDirection: "row",
            height: 220,
            width: width,
            alignSelf: "flex-start",
            backgroundColor: "black"
          }}
          contentContainerStyle={{
            alignItems: "center"
          }}
          onMomentumScrollEnd={this.handleScrollEndEvents.bind(this)}
          onScrollEndDrag={this.dragEnd.bind(this)}
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { x: this.state.scrollX } }
              }
            ],
            {
              useNativeDriver: true
            }
          )}
        >
          <Animated.View
            style={{
              height: 200,
              width: width - 40,
              backgroundColor: "red",
              marginHorizontal: 20,
              transform: [{ scaleX: zoomXFactor }, { scaleY: zoomYFactor }]
            }}
          >
            <Image
              source={require("./assets/event.jpg")}
              style={{
                height: 200,
                width: width - 40
              }}
            />
          </Animated.View>
          <Animated.View
            style={{
              height: 200,
              width: width - 40,
              backgroundColor: "red",
              marginHorizontal: 20,
              transform: [{ scaleX: zoomXFactor }, { scaleY: zoomYFactor }]
            }}
          >
            <Image
              source={require("./assets/ideas.jpg")}
              style={{
                height: 200,
                width: width - 40
              }}
            />
          </Animated.View>
          <Animated.View
            style={{
              height: 200,
              width: width - 40,
              backgroundColor: "red",
              marginHorizontal: 20,
              transform: [{ scaleX: zoomXFactor }, { scaleY: zoomYFactor }]
            }}
          >
            <Image
              source={require("./assets/profile.jpg")}
              style={{
                height: 200,
                width: width - 40
              }}
            />
          </Animated.View>

        </Animated.ScrollView>
      </Animated.View>
    );
  }
}
