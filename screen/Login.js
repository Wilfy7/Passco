import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
         <View style={{marginTop: 40, alignItems: 'center'}}>
           <Image 
             source= {{uri: 'https://a.foxdcg.com/dpp-uploaded/images/credits/613267801b04f90020c6fabd/our_kind_of_people_lance_gross_2x.jpg?fit=inside%7C*:278'}}
             style= {styles.img}
             />
             <Text style= {styles.name}>Nana</Text>
             <Text>OYAREFA</Text>
         </View>
      </SafeAreaView>
    
          <TouchableOpacity style={styles.btn}>
              <Text style={{color: 'white', fontSize: 16, fontWeight: '600'}}>LOGIN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn1}>
              <Text style={{color: 'black', fontSize: 16, fontWeight: '600'}}>SIGNUP</Text>
          </TouchableOpacity>
          <Text style={{marginVertical: 15}}>or</Text>

          <TouchableOpacity style={styles.btn2}>
              <Text style={{color: 'white', fontSize: 16, fontWeight: '600'}}>CHECK OUT DEMO</Text>
          </TouchableOpacity>
      
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    height: 160,
    width: 160,
    borderRadius: 80,
  },
  name: {
    fontSize: 30,
    marginTop: 15,
    marginBottom: 5,
    letterSpacing: 2,
    fontWeight: '500'

  },
  btn: {
    alignItems: 'center',
    borderWidth: 1,
    width: '95%',
    padding: 8,
    backgroundColor: 'black',
    borderRadius: 10,
    marginVertical: 20

  },
  btn1: {
    alignItems: 'center',
    borderWidth: 1,
    width: '95%',
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 10,

  },
  btn2: {
    alignItems: 'center',
    borderWidth: 1,
    width: '95%',
    padding: 8,
    backgroundColor: 'green',
    borderRadius: 10,

  }
})