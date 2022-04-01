import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const InterScience = () => {
  return (
  <>
    <SafeAreaView style={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.btn} activeOpacity={1}>
              <Text style={{color: 'white', fontSize: 16, fontWeight: '600'}}>INTEGRATED SCIENCE</Text>
        </TouchableOpacity>
    </SafeAreaView>
    <ScrollView style={{marginLeft:'3%'}}>
         <TouchableOpacity style={styles.year}>
           <Text style={styles.txt}>2011</Text>
         </TouchableOpacity>
         <TouchableOpacity zstyle={styles.year}>
           <Text style={styles.txt}>2012</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.year}>
           <Text style={styles.txt}>2013</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.year}>
           <Text style={styles.txt}>2014</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.year}>
           <Text style={styles.txt}>2015</Text>
         </TouchableOpacity>
    </ScrollView>
  </>
  )
}

export default InterScience

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        borderWidth: 1,
        width: '95%',
        padding: 8,
        backgroundColor: 'black',
        borderRadius: 10,
        marginVertical: 20,
        marginTop: 50,
        marginBottom: 20,
    
      },
      txt: {
        fontSize: 18,
        fontWeight: '500'
      },
      year: {
        marginVertical: 5
      }
})