import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Pressable, Dimensions } from 'react-native';
import { router , useGlobalSearchParams} from "expo-router";

const { width, height } = Dimensions.get('window');

//Send the paws id,userId,String,Timestamp for report
const DogProfileScreen = () => {
  const { name, imageDetailed, gender, age, whereToFindMe, funFact } = useGlobalSearchParams();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.beigeBox}>
        <View style={styles.infoContainer}>
          <View style={styles.imageBackGroundContainer}> 
            <View style={styles.imageContainer}>
              <Image
                source={imageDetailed}  
                style={styles.dogImage}
              />
            </View>
          </View>
          <View>
            <Text style={styles.infoLabel}>NAME</Text>
            <Text style={[styles.infoValue, styles.beige]}>{name}</Text> 

            <Text style={styles.infoLabel}>GENDER</Text>
            <Text style={styles.infoValue}>{gender}</Text> 

            <Text style={styles.infoLabel}>AGE</Text>
            <Text style={styles.infoValue}>{age}</Text> 

            <Text style={styles.infoLabel}>HEALTH CONDITION</Text>
            <TouchableOpacity style={styles.reportButton}>
              <Text style={styles.reportButtonText}>REPORT</Text>
            </TouchableOpacity>

            <Text style={styles.infoLabel}>WHERE TO FIND ME</Text>
            <Text style={styles.infoValue}>{whereToFindMe}</Text> 

            <Text style={styles.infoLabel}>FUN FACT</Text>
            <Text style={styles.infoValue}>{funFact}</Text>
          </View>
        </View>
      </View>

      <View style={styles.footerBox}>
        <Pressable style={styles.circlebutton} onPress={() => {router.back()}}>
          <View style={styles.triangle}/>
        </Pressable>
        <View style={styles.HaydosLogo}>
          <Image source={require('../assets/images/paw resimleri/HaydosLogo.png')} style={styles.HaydosLogo}/>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flex: 1
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderLeftWidth: width * 0.015,
    borderRightWidth: width * 0.015,
    borderBottomWidth: width * 0.03,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "rgba(217, 217, 217, 1)",
    transform: [{rotate:"-90deg"}],
  },
  circlebutton: {
    backgroundColor: 'rgba(77, 159, 86, 1)',
    width: width * 0.07,
    height: width * 0.07,
    borderRadius: width * 0.035,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    left: 30,
  },
  imageContainer: {
    backgroundColor: '#D9D9D9',
    alignContent : "center",
    width: "60%",
    height: "70%",
    marginTop: height * 0.05,
    borderRadius: width * 0.1,
    alignSelf: 'center',
  },
  imageBackGroundContainer: {
    backgroundColor: 'rgba(64, 64, 64, 1)',
    width: '100%',
    height: "45%",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 8,
  },
  dogImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  infoContainer: {
    height: '99.5%',
    width: '100%',
    backgroundColor: 'rgba(107, 189, 116, 1)',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 3,
  },
  infoLabel: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: ' rgba(231, 234, 222, 1)',
    marginTop: 10,
    alignSelf: 'center',
  },
  infoValue: {
    fontSize: width * 0.03,
    color: 'rgba(64, 64, 64, 1)',
    marginTop: 5,
    alignSelf: 'center',
  },
  reportButton: {
    marginTop: 10,
    backgroundColor: 'rgba(198, 21, 44, 1)',
    paddingHorizontal: width * 0.07,
    borderRadius: 20,
    alignSelf: 'center',
  },
  reportButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: width * 0.045,
  },
  footerBox: {
    backgroundColor: 'rgba(231, 234, 222, 1)',
    width: '100%',
    height: height * 0.12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  beige: {
    color: ' rgba(231, 234, 222, 1)',
  },
  beigeBox: {
    flex: 1,
    height: height * 0.88,
    width: '100%',
    backgroundColor: 'rgba(231, 234, 222, 1)',
  },
  HaydosLogo: {
    paddingHorizontal: 15,
  },
  labelValueContainer: {
    marginVertical: 10, // Space between each label-value pair
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Optional background color for better separation
    borderRadius: 10, // Rounded corners for the container
    padding: 10, // Padding around the label and value
    width: '90%', // Optional: Set a max width to center the items
    alignSelf: 'center', // Center align the container
  },
});

export default DogProfileScreen;
