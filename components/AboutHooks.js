import React, { useState } from "react";
import { Text, View, FlatList } from "react-native";
import { Card } from "react-native-elements";
import { LEADERS } from "../shared/leaders";
import { ListItem } from "react-native-elements";

const About = () => {
  const [leaders, setleaders] = useState(LEADERS);

  const navigationOptions = {
    title: "About",
  };

  const renderMenuItem = ({ item, index }) => {
    return (
      <ListItem
        key={index}
        title={item.name}
        subtitle={item.designation}
        hideChevron={true}
        //  onPress={() => navigate('Dishdetail',{dishId:item.id})}
        // leftAvatar={{ source: require('./images/uthappizza.png')}}
      />
    );
  };

  return (
    <View>
      <Card title="Our History">
        <Text>
          sssStarted in 2010, Ristorante con Fusion quickly established itself
          as a culinary icon par excellence in Hong Kong. With its unique brand
          of world fusion cuisine that can be found nowhere else, it enjoys
          patronage from the A-list clientele in Hong Kong. Featuring four of
          the best three-star Michelin chefs in the world, you never know what
          will arrive on your plate the next time you visit us.{"\n"}
        </Text>

        <Text>
          The restaurant traces its humble beginnings to The Frying Pan, a
          successful chain started by our CEO, Mr. Peter Pan, that featured for
          the first time the world's best cuisines in a pan.
        </Text>
      </Card>
      <Card title="Corporate Leadership">
        <FlatList
          data={leaders}
          renderItem={renderMenuItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </Card>
    </View>
  );
};
export default About;
