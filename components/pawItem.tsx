import { View, Text, Image, FlatList, StyleSheet, ImageSourcePropType, Pressable } from 'react-native';
import { RootStackParamList } from '../app/index';
import { router } from 'expo-router';


interface PawItemProps {
  name: string;
  image: ImageSourcePropType;
  imageDetailed: ImageSourcePropType;
  gender: string;
  age: string;
  whereToFindMe: string;
  funFact: string;
}


const PawItem = ({ name, image,imageDetailed, gender, age, whereToFindMe, funFact }: PawItemProps) => {
    return(
        <View style = {styles.pawContainer}>
            <View style = {styles.firstcircle}>
                <View style = {styles.secondcircle}>
                <View style = {styles.thirthcircle}>
                    <View style = {styles.fourthcircle}>
                      <View style = {styles.fifthcircle}>
                        <Pressable style = {styles.pressable} 
                              onPress={() =>
                                router.push({
                                  pathname: '/pawInformationDetailed',  // Path of the detailed screen
                                  params: {
                                    name,                // Parameter
                                    imageDetailed,       // Parameter (detailed image)
                                    gender,
                                    age,
                                    whereToFindMe,
                                    funFact,
                                  },
                                })
                              }>
                            <Image source = {image} style = {styles.image} />
                        </Pressable>
                      </View>
                    </View>
                </View> 
                </View>
            </View>
            <Text style = {styles.name}>{name}</Text> 
        </View>
    );
};


const styles = StyleSheet.create({
    pawContainer: 
    {
      flex: 1,
      alignItems: 'center',
      marginBottom: 10,
    },
    firstcircle: 
    {
      width: 120,
      height: 120,
      borderRadius: 60,
      backgroundColor: 'rgba(107, 189, 116, 0.1)',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
    secondcircle: 
    {
      width: 120,
      height: 120,
      borderRadius: 60,
      backgroundColor: 'rgba(107, 189, 116, 0.2)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    thirthcircle: 
    {
      width: 105,
      height: 105,
      borderRadius: 52.5,
      backgroundColor: 'rgba(107, 189, 116, 0.4)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    fourthcircle: 
    {
      width: 90,
      height: 90,
      borderRadius: 45,
      backgroundColor: 'rgba(107, 189, 116, 0.7)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    fifthcircle:
    {
      width: 75,
      height: 75,
      borderRadius: 37.5,
      backgroundColor: 'rgba(107, 189, 116, 1)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    pressable:
    {
      width: 30,
      height: 30,
      borderRadius: 15,
      backgroundColor: 'rgba(107, 189, 116, 0.2)',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
    image: 
    {
      width: 180,
      height: 180,
      borderRadius: 90,
    },
    name: 
    {
      fontSize: 16,
      fontWeight: 'bold',
    },
});


export default PawItem;
  