import React from "react";
import {
  AppRegistry,
  View,
  StatusBar,
  Image,
  ListView,
  ScrollView,
  Animated
} from "react-native";
import MainStore from "./Store/MainStore.js";
import {
  Container,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Input,
  Item,
  Label,
  Button,
  Text,
  Card,
  CardItem,
  Thumbnail
} from "native-base";

export default class EventsPage extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      events: ds.cloneWithRows([
        {
          name: "RNMeetup #13",
          image: "https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAfTAAAAJGUzYWU5MjNlLWUyYmItNGEyYi05OWM4LWNkYzI0NGU2YWZmNQ.jpg"
        },
        {
          name: "Quicken Meetup",
          image: "http://www.salesfish.com/wp-content/uploads/2011/11/Experiential-Event-Marketing.jpg"
        },
        {
          name: "Some Party",
          image: "http://www.corningcountryclub.com/Websites/countryclub/images/IMG_1266Porche-event.jpg"
        },
        {
          name: "Some more",
          image: "https://blogmedia.evbstatic.com/wp-content/uploads/bloguk/shutterstock_193539209-1.jpg"
        }
      ])
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ListView
          dataSource={this.state.events}
          renderRow={this.renderRow.bind(this)}
          renderScrollComponent={this.renderScroll.bind(this)}
        />
      </View>
    );
  }
  _handleScroll(e) {
    // console.log(e.nativeEvent.contentOffset.y);
    MainStore.modifyScroll(e.nativeEvent.contentOffset.y);
  }
  renderScroll(props) {
    return (
      <Animated.ScrollView
        {...props}
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingTop: 20,
          paddingBottom: 20,
          paddingHorizontal: 10
        }}
        // Declarative API for animations ->
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { y: MainStore.scrollPos } }
            }
          ],
          { listener: this._handleScroll.bind(this) },
          {
            useNativeDriver: true // <- Native Driver used for animated events
          }
        )}
      />
    );
  }
  renderRow(rowData, i) {
    return (
      <Card key={i}>
        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri: "http://angular.github.io/react-native-renderer/assets/react.png"
              }}
            />
            <Body>
              <Text>{rowData.name}</Text>
              <Text note>GeekyAnts</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{
              uri: rowData.image
            }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>12 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>4 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>11 hrz ago</Text>
          </Right>
        </CardItem>
      </Card>
    );
  }
}
