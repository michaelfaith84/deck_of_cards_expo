import { StyleSheet, View} from 'react-native';
import { Divider } from 'react-native-paper'
import {SafeAreaView} from "react-native-safe-area-context";
import React from "react";
import {Link, router} from 'expo-router'

export default function Index() {
    const games = ["Casino Blackjack"]

    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);

    const goto = (page: string) => {
        closeMenu()
        console.log(`/games/${page.toLowerCase().replace(' ', '_')}`)
        router.push(`/games/${page.toLowerCase().replace(' ', '_')}`)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.menu}>
                {games.map(game => (
                    <>
                    <Link href={`/games/${game.toLowerCase().replace(' ', '_')}`}>{game}</Link>
                        <Divider />
                    </>
                ))}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    menu: {
        justifyContent: "flex-end"
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
