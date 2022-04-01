import { SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Subjects = () => {
  return (
    <SafeAreaView style={{alignItems: 'center'}}>
         <TouchableOpacity style={styles.btn} activeOpacity={1}>
              <Text style={{color: 'white', fontSize: 16, fontWeight: '600'}}>SELECT SUBJECT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sub}>
              <Text style={styles.txt}>SOCIAL STUDIES</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sub}>
              <Text style={styles.txt}>INTEGRATED SCIENCE</Text>
          </TouchableOpacity>
      
    </SafeAreaView>
  )
}

export default Subjects

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
        marginBottom: 120,
    
      },
      txt: {
          fontWeight: '700',
          fontSize: 16,
      },
      sub: {
          marginVertical: 20,
      }
})