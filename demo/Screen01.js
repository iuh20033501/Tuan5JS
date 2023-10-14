import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { Entypo} from '@expo/vector-icons';
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
const img = { uri:"https://cdn2.cellphones.com.vn/x/media/catalog/product/d/e/den-1_1.png"}
export default function Screen01({navigation}) {

    const [rating, setRating] = useState(null)
    const dau   ='>'
  return (
    <View style={styles.container}>
        <View style= {styles.header}>
        <ImageBackground
         source={img} style={styles.imgg}></ImageBackground>
        </View>
        <Text style={{fontSize: '18px', textAlign: 'left',paddingLeft:'15px', paddingTop: '7px'}}>Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View style={styles.center}>
        <View style={styles.start}>                     
                        {[...Array(5)].map((star, index) => {
                            return(
                                <Entypo name="star" size={30} color={'yellow'}/>
                               
                            )})}
                    </View>
                    <Text style={{fontSize: '16px', textAlign: 'center' ,left:'7%',paddingTop: '4px'}}>(Xem 828 đánh giá)</Text> 
        </View>
        <View style= {{flexDirection:'row', top:'-14%'}}>
        <Text style={{fontSize: '20px',fontWeight:'bold', textAlign: 'left',top:'-20%', paddingTop:'10px',paddingLeft: '10px'}}>1.790.000 đ</Text>
        <Text style={{fontSize: '20px',fontWeight:'bold ',textDecorationLine:'line-through', textAlign: 'left',top:'-20%', paddingTop:'10px',paddingLeft: '50px', color:'gray'}}>1.790.000 đ</Text>
        </View>
        <View style= {{flexDirection:'row', top:'-14%'}}>
        <Text style={{fontSize: '15px', color:'red', fontWeight:'bold', textAlign: 'left',top:'-15%',paddingLeft:'10px', paddingTop: '7px'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN </Text>
        <Image
                    source={require('../demo/icon.png')}
                    style={styles.icon}
                />
        </View>   
        <View style={styles.put}>
            <TouchableOpacity onPress={()=>navigation.navigate('Screen02')}>       
        <View style={styles.choice}>
        <Text style={{fontSize: '18px', textAlign: 'left', paddingLeft:'50px'}}>4 MÀU-CHỌN MÀU </Text> 
        <Text style={{fontSize: '40px', left:15,top: '-10%'}}> {dau} </Text>
        </View>
        </TouchableOpacity>
        </View> 
        <View style={styles.btn}>
            <TouchableOpacity onPress={ ()=> alert('Đặt hàng thành công')}>
            <Text style={styles.buy}>
                                CHỌN MUA
                            </Text>
            </TouchableOpacity>
        </View>
        

    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'center',

},
put:{
    flexDirection: 'row',
    justifyContent: 'center',

},
  imgg: {
    width:'301px',
    height: '361px'
  },
  center:{
    height:'15%',
    flexDirection: 'row',
    marginTop: '10px',
    marginBottom: '30px'
},
start:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '150px',
    marginLeft: '15px',
},
icon: {
    width:'20px',
    height: '20px',
    marginLeft:'5px',
    marginTop:'3px',
},
choice: {
    flexDirection: 'row',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth : '1px',
    height:'40px',
    width:'132%',
    top:'-150%',
    left:'-15%',
    alignItems : 'center',
    justifyContent:'center',
},
btn: {
    flexDirection: 'row',
    borderRadius: 10,
    height:'40px',
    width:'90%',
    top:'-30px',
    left:'20px',
    alignItems : 'center',
    justifyContent:'center',
    backgroundColor: 'red',
},
buy:{      
    textAlign:'center',     
    color: 'white',          
    fontWeight: '500',
    fontSize: '20px',   
    lineHeight: '45px'

},
});
