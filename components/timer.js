import styled from "styled-components/native";
import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Timer() {

    const [time, setTime] = useState(0);
    const [timeOn, setTimeOn] = useState(false);

    useEffect(() => {
        let interval = null ;

        if(timeOn) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        }
        else if(!timeOn){
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timeOn]);

  return (
    <Styles>
      <Counter style={style.whiteFont}>
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
        {("0" + ((time / 10) % 100)).slice(-2)}
      </Counter>
      <View style={{ flexDirection: "row" }}>
        {!timeOn && time === 0 && (
          <Button title="Start" onPress={() => setTimeOn(true)} />
        )}
        {timeOn && <Button title="Stop" onPress={() => setTimeOn(false)} />}
        {!timeOn && time > 0 && (
          <Button title="Resume" onPress={() => setTimeOn(true)} />
        )}
        {!timeOn && time > 0 && <Button title="Reset" onPress={() => setTime(0)} />}

      </View>
    </Styles>
  );
}
const Styles = styled.View`
  height : 720px ;
  justify-content : center ;
  align-items : center ;
  display : flex ;
`;

const Counter = styled.Text`
    font-weight : bold;
    font-size : 50px;
`;

const style = StyleSheet.create({
    whiteFont : {
        color : "white",
    },
});