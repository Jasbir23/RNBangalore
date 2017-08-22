import React from "react";
import { AppRegistry, View, Image, Dimensions } from "react-native";
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
  Text
} from "native-base";
const { width, height } = Dimensions.get("window");
export default class Events extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>PROFILE</Title>
          </Body>
          <Right style={{ paddingBottom: 7, paddingRight: 7 }}>
            <Button transparent>
              <Icon name="ionitron" style={{ fontSize: 30 }} />
            </Button>
          </Right>
        </Header>
        <Content
          padder
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={{ height: 200, width: width - 20, flexDirection: "row" }}
          >
            <View
              style={{
                height: 200,
                width: (width - 20) / 2,
                flexDirection: "column"
              }}
            >
              <View
                style={{
                  flex: 3,
                  width: (width - 20) / 2,
                  alignSelf: "stretch",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Image
                  source={{
                    uri: "https://www.trickscity.com/wp-content/uploads/2017/03/stylish-girl-dp.jpg"
                  }}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50
                  }}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text>12 Followers</Text>

              </View>
            </View>
            <View
              style={{
                height: 200,
                width: (width - 20) / 2,
                padding: 7,
                flexDirection: "column"
              }}
            >
              <View style={{ flex: 1, flexDirection: "column" }}>
                <Text style={{ fontWeight: "bold" }}>Name</Text>
                <Text>Smriti Irani</Text>
              </View>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <Text style={{ fontWeight: "bold" }}>Age</Text>
                <Text>29 </Text>
              </View>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <Text style={{ fontWeight: "bold" }}>Company</Text>
                <Text>Std Chartered </Text>
              </View>
              <View style={{ flex: 1, flexDirection: "column" }}>
                <Text style={{ fontWeight: "bold" }}>Experience</Text>
                <Text>4 </Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "column", marginTop: 20 }}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold" }}>Attended Events: </Text>
              <Text>20</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold" }}>Contributions: </Text>
              <Text>202</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold" }}>Questions asked: </Text>
              <Text>12</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Text style={{ fontWeight: "bold" }}>Questions answered: </Text>
              <Text>112</Text>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
