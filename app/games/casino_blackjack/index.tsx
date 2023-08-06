import {View, Text} from "react-native";
import { CasinoBlackjackCardModel} from 'deck_of_cards/src/games/casino_blackjack/casino_blackjack_card.model'
import {CasinoBlackjackHandModel} from "deck_of_cards/src/games/casino_blackjack/casino_blackjack_hand.model";
import Hand from "@/components/Hand";
import { useState } from "react";
import {Button} from "react-native-paper";
import cloneDeep from 'lodash/cloneDeep'
import {CasinoBlackjackModel} from "deck_of_cards/src/games/casino_blackjack/casino_blackjack.model";


const card1 = new CasinoBlackjackCardModel('TWO', 'spade')
const card2 = new CasinoBlackjackCardModel('JACK', 'diamond')

 const CasinoBlackjack = () => {
    const [game, setGame] = useState(new CasinoBlackjackModel(["tom"], 100))
    const [hand, setHand] = useState(new CasinoBlackjackHandModel())
    // const addCards = useMemo((card)=>hand.addCard(card), [cards])
     const shuffleCards = () => {
        game.cards.shuffle()
     }

     const dealDealer = (card: CasinoBlackjackCardModel) => {
        const newCard = game.cards.dealCard()
         newCard?.toggleIsBlind()
         game.dealerHand.addCard(newCard)
     }
     const updateGame = () => {
        console.log(card1.display.denomination)
        game.players[0].hands[0].addCard(game.cards.dealCard())
         dealDealer()
         setGame(cloneDeep(game))
     }

     const card3 = new CasinoBlackjackCardModel('ACE', 'heart')
     const card4 = new CasinoBlackjackCardModel('EIGHT', 'spade')

    return (
        <View style={{flex: 1, flexDirection: "row", justifyContent: "space-between"}}>
            <View style={{paddingLeft: 100}}>
                <Text>{game.players[0].name}</Text>
                <Hand props={{hand: game.players[0].hands[0]}}/>
            </View>
            <View>
                <Text>Dealer</Text>
                <Hand props={{hand: game.dealerHand}}/>
            </View>
            <View>
                <Button mode={"outlined"} onPress={()=>shuffleCards()}>Shuffle Cards</Button>
                <Button mode={"outlined"} onPress={()=>updateGame()}>Deal Cards</Button>
            </View>
        </View>
    )
}

export default CasinoBlackjack