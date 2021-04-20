import { StatusBar } from 'expo-status-bar';
import styled from "styled-components/native";
import React from 'react';
import {View } from 'react-native';
import Header from './components/header';
import Timer from './components/timer';

export default function App() {
  return (
    <Styles>
      <View>
        <Header />
        <Timer />
      </View>
    </Styles>
  );
} 
const Styles = styled.View`
background-color : black;
`;

