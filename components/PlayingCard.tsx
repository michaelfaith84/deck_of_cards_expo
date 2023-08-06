import {Card, Text} from "react-native-paper";
import Icon from 'react-native-paper/src/components/Icon'
import {View} from "react-native";
import {CardModel} from "deck_of_cards/src/card.model";

const PlayingCard = <CardType extends CardModel>({props: {card, angle, yOffset}}: { props: {card: CardType, angle?: number, yOffset?: number} } ) => {
    const size = 20

    return (
        // <View style={{transform: [{rotate: `${angle}deg`}, {translateY: yOffset}]}}>
        <Card style={{width: size * 7, height: size * 10, marginLeft: -100, backgroundColor: "white"}}>
            <Card.Content>
                <View>
                    <Text style={{color: card.display.style.color, backgroundColor: 'transparent', paddingLeft: Math.floor(size /10) + 2, fontSize: size}}>{card.display.denomination}</Text>
                    <Icon source={`cards-${card.display.suit.toLowerCase()}`} color={card.display.style.color} size={size} />
                </View>
                {card.isBlind ?
                    <Text style={{color: card.display.style.color, backgroundColor: 'transparent', paddingLeft: Math.floor(size /10) + 2, fontSize: size}}>?</Text> : one({card, size})}
                {/*{['A', 'K', 'Q', 'J'].includes(card.display.denomination) ? one({card, size}) : ""}*/}
                {/*{['2'].includes(card.display.denomination) ? singleColumn({card, size}) : ""}*/}
                <View style={{ display: 'flex', alignItems: 'flex-end'}}>
                    <Text style={{transform: [{rotateX: '180deg'}]}}><Icon source={`cards-${card.suit.toLowerCase()}`} color={card.display.style.color} size={size} /></Text>
                    <Text style={{transform: [{scaleX: -1},{rotateX: '180deg'}], fontSize: size, color: card.display.style.color, paddingLeft: Math.floor(size / 10) + 2}}>{card.display.denomination}</Text>
                </View>
            </Card.Content>
        </Card>
        // </View>
    )
}

const one = <CardType extends CardModel>({card, size}: { card: CardType, size: number }) => (
    <View style={{alignItems: "center"}}>
        <Icon size={size * 4} source={`cards-${card.suit.toLowerCase()}`} color={card.display.style.color} />
    </View>
)
const singleColumn = <CardType extends CardModel>({card, size}: { card: CardType, size: number }) => (
    <View style={{height: "45%", alignItems: "center", justifyContent: "space-between", flexDirection: "column"}}>
        <Icon size={size} source={`cards-${card.suit.toLowerCase()}`} color={card.display.style.color}/>
        <Icon size={size} source={`cards-${card.suit.toLowerCase()}`} color={card.display.style.color}/>
    </View>
)

export default PlayingCard