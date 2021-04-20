import React from "react";
import styled from 'styled-components/native';
import {Text, View } from "react-native";

export default function Header() {
  return (
    <Container>
      <View>
        <StopwatchText>Stopwatch</StopwatchText>
      </View>
    </Container>
  );
}
  
const Container = styled.View`
align-items : center ;
justify-content : center;
background-color : #a9a9a9 ;
height : 100px;
`;

const StopwatchText = styled.Text`
color : white ;
font-size : 40px ;
font-weight : bold ;
letter-spacing : 12px; 
`;
