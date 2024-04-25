import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {format, sub} from "date-fns";

import Header from '../../components/Header';
import fetchAPI from '../../utils/fetch';
import TodaysImage from '../../todaysImage/TodaysImage';
import { PostImage } from '../../types/index';

const Home = () => {
  const [todaysImage, setTodaysImage] = useState<PostImage>({});
 
  useEffect(() => {
    const loadActualImage = async () => {
      try {
        const actualImage = await fetchAPI();
        setTodaysImage(actualImage)

      } catch (error) {
        console.error(error);
        setTodaysImage({});
      }
    };

    const loadLast5DaysImage = async () => {
      try{
        const date = new Date();
        const todaysDate = format(date, "yyyy-MM-dd")
        const fiveDaysAgoDate = format(sub(date, {days: 5}), "yyyy-MM-dd")
      }catch(error){
        console.error(error);
      }
    }

    loadActualImage().catch(null);
    loadLast5DaysImage().catch(null);

  }, []);

console.log( todaysImage);
console.log("### IMAGE DATA END ###");


  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
export default Home;
