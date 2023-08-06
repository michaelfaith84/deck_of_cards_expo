import {HandModel} from "deck_of_cards/src/hand.model";
import {CardModel} from "deck_of_cards/src/card.model";
import PlayingCard from "@/components/PlayingCard";
import {View} from "react-native";

const Hand = <CardType extends CardModel, HandType extends HandModel<CardType>>({props: {hand}}: { props:
{
    hand: HandType
}
}) => {
    return (
        <View style={{flex: 1, alignContent: "space-between", alignItems: 'center', justifyContent: 'center', flexDirection: "row"}}>
            {
               hand.length > 0 ? hand.cards.map((card, i) => <PlayingCard key={i} props={{card}} />) : ""
            }
        </View>
    )
}

export default Hand