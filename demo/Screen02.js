import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from "react";

export default function Screen02({navigation}) {

    const imgblack = { uri: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2020/02/w300/vsmart-joy-3-den.jpg.webp' };
    const imgred = { uri: 'https://cdn2.cellphones.com.vn/x/media/catalog/product/v/s/vsmart-star-3_3_.png' };
    const imgwhite = { uri: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2020/02/w300/vsmart-joy-3-trang.jpg.webp' };
    const imgblue = { uri: 'https://cdn.mobilecity.vn/mobilecity-vn/images/2020/02/w300/vsmart-joy3-tim.jpg.webp' };
    const [ img,setImg ] = useState(imgblack) ;
    
    const [color, setColor] = useState("Trắng");
    const [showView, setShowView] = useState(false);
    useEffect(() => {
        if (img.uri === imgblack.uri) setColor('Đen');
        else if (img.uri === imgred.uri) setColor('Đỏ');
        else if (img.uri === imgblue.uri) setColor('Xanh');
        else setColor('Trắng');

    }, [img])
    return (
        < React.Fragment>
            <View style={styles.container}>
                <View style={styles.row}>
                    <ImageBackground source={img} style={styles.img} resizeMode='contain' ></ImageBackground>
                    <View style={{}}>
                        <Text style={{ fontSize: '16px', textAlign: 'left', paddingTop: '7px' }}>Điện thoại Vsmart Joy </Text>
                        <Text style={{ fontSize: '16px', textAlign: 'left', paddingTop: '7px' }}>Hàng chính hãng</Text>
                        {showView && (
                            <View style={styles.create}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text>Màu: </Text>
                                    <Text style={styles.text}>{color}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text>Cung cấp bởi: </Text>
                                    <Text style={styles.text}> Tiki Tradding</Text>
                                </View>
                                <Text style={styles.text}>1.790.000 đ</Text>
                            </View>
                        )}
                    </View>
                </View>
                <View styles={styles.form}>
                    <Text style={{ fontSize: '16px', textAlign: 'left' }}> Chọn một màu bên dưới </Text>
                    <View style={styles.formcolor}>
                        <TouchableOpacity style={{ backgroundColor: 'white', width: '90px', height: '90px', marginTop: '10px' }} onPress={() => { setImg(imgwhite); setShowView(true) }}></TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: 'red', width: '90px', height: '90px', marginTop: '10px' }} onPress={() => { setImg(imgred); setShowView(true) }}></TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: 'black', width: '90px', height: '90px', marginTop: '10px' }} onPress={() => { setImg(imgblack); setShowView(true) }}></TouchableOpacity>
                        <TouchableOpacity style={{ backgroundColor: 'blue', width: '90px', height: '90px', marginTop: '10px' }} onPress={() => { setImg(imgblue); setShowView(true) }}></TouchableOpacity>
                    </View >
                    <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Screen01') }}>
                        <Text style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>XONG</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </React.Fragment>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: 'gray',
    },
    row: {
        flexDirection: 'row',
        height: '20%',
        backgroundColor: 'white'
    },
    form: {
        flexDirection: 'row',
        height: '80%',
        justifyContent: 'flex-start',

    },
    img: {
        height: '80px',
        width: '100px',
    },
    formcolor: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    button: {
        height: 30,
        width: '90%',
        backgroundColor: 'blue',
        marginLeft: '5%',
        marginTop: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,

    },
    create: {
        justifyContent: 'flex-start'

    },
    text: {
        fontWeight: 'bold',
        fontSize: '14',

    },

});

