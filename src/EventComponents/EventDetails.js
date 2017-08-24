import React from "react";
import { View, Dimensions, Image, WebView } from "react-native";
import {
  Container,
  Title,
  Body,
  Content,
  Header,
  Left,
  Right,
  Spinner,
  Text
} from "native-base";
import * as firebase from "firebase";
const { width, height } = Dimensions.get("window");

export default class EventDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventBlog: undefined
    };
  }
  componentDidMount() {
    // Firebase
    firebase
      .database()
      .ref("Events/Event1/description")
      .on("value", snapshot => {
        const response = snapshot.val();
        console.log(response, "Event description");
        this.setState({ eventBlog: response });
      });
  }
  renderText(text, index) {
    console.log("renderText", text);
    return (
      <View
        key={index}
        style={{
          padding: 10,
          marginVertical: 10
        }}
      >
        <Text>{text}</Text>
      </View>
    );
  }
  renderImage(image, index) {
    console.log("Image", image);
    return (
      <View
        key={index}
        style={{ height: 200, width: width, marginVertical: 10 }}
      >
        <Image
          source={{
            uri: image
          }}
          style={{ height: 200, width: width, flex: 1 }}
        />
      </View>
    );
  }
  renderVideo(video, index) {
    console.log("renderVideo", video);
    return (
      <View
        key={index}
        style={{
          marginVertical: 10,
          height: 220
        }}
      >
        <WebView
          source={{
            uri: "https://www.youtube.com/watch?v=5rJN9UtN_Tw"
          }}
          scrollEnabled={false}
          style={{
            height: 220
          }}
        />
      </View>
    );
  }
  render() {
    if (this.state.eventBlog === undefined) {
      return <Spinner />;
    } else {
      return (
        <Container>
          <Header>
            <Body>
              <Title>Event Details</Title>
            </Body>
          </Header>
          <Content>
            <View style={{ flex: 1 }}>
              {Object.keys(this.state.eventBlog).map((item, index) => {
                if (this.state.eventBlog[item].type === "text") {
                  return this.renderText(
                    this.state.eventBlog[item].value,
                    index
                  );
                }
                if (this.state.eventBlog[item].type === "image") {
                  return this.renderImage(
                    this.state.eventBlog[item].value,
                    index
                  );
                }
                if (this.state.eventBlog[item].type === "video") {
                  return this.renderVideo(
                    this.state.eventBlog[item].value,
                    index
                  );
                }
              })}
            </View>
          </Content>
        </Container>
      );
    }
  }
}
