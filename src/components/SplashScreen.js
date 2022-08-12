import React, { useEffect, useRef } from 'react';
import { Animated, Image, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Logo from '../imagens/logo-branco.png'

const BGColor = '#F71B64';

export default function SplashScreen() {

    const edges = useSafeAreaInsets();

    const startAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        setTimeout(() => {
            Animated.sequence([
                Animated.timing(
                    startAnimation,
                    {
                        toValue: -100,
                        useNativeDriver: true
                    }
                )
            ])
            .start();

        }, 500)

    }, [])

    return (
        <View
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                backgroundColor: BGColor
            }}>
            <Animated.View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                transform: [
                    {translateY: startAnimation}
                ]
            }}>
                <Image source={Logo}
                style={{
                width: 200,
                height: 200,
                    marginBottom: 20,
                }}></Image>
            </Animated.View>

        </View>
    );
}