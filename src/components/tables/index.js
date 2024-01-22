import React, {memo} from 'react';
import rouletteAurum from "../../assets/resources/thumbnails/roulette-aurum.png";
import andarBahar from "../../assets/resources/thumbnails/andar-bahar.png";
import andarBaharMp4 from "../../assets/resources/mp4/andarBahar.mp4";
import autoRoulette from "../../assets/resources/thumbnails/auto-roulette.png";
import baccarat from "../../assets/resources/thumbnails/baccarat.png";
import betOnPoker from "../../assets/resources/thumbnails/bet-on-poker.png";
import blackjack from "../../assets/resources/thumbnails/blackjack.png";
import cashoutBj from "../../assets/resources/thumbnails/cashout-blackjack.png";
import casinoHoldem from "../../assets/resources/thumbnails/casino-holdem.png";
import dragonTiger from "../../assets/resources/thumbnails/dragon-tiger.png";
import freebetBj from "../../assets/resources/thumbnails/freebet-blackjack.png";
import noComBaccarat from "../../assets/resources/thumbnails/no-comm-baccarat.png";
import roulette from "../../assets/resources/thumbnails/roulette.png";
import rusianPoker from "../../assets/resources/thumbnails/russian-poker.png";
import sicBo from "../../assets/resources/thumbnails/sic-bo.png";
import speedBaccarat from "../../assets/resources/thumbnails/speed-baccarat.png";
import speedBj from "../../assets/resources/thumbnails/speed-blackjack.png";
import swiftRoulette from "../../assets/resources/thumbnails/swift-roulette.png";
import teenPatti from "../../assets/resources/thumbnails/teen-patti.png";

const Tables = props => {
    const {selectVideoHandler} = props;

    const tables = [
        {id: 1, img: andarBahar, video: andarBaharMp4},
        {id: 2, img: autoRoulette, video: ''},
        {id: 3, img: baccarat, video: ''},
        {id: 4, img: betOnPoker, video: ''},
        {id: 5, img: blackjack, video: ''},
        {id: 6, img: cashoutBj, video: ''},
        {id: 7, img: casinoHoldem, video: ''},
        {id: 8, img: dragonTiger, video: ''},
        {id: 9, img: freebetBj, video: ''},
        {id: 10, img: noComBaccarat, video: ''},
        {id: 11, img: roulette, video: 'r'},
        {id: 12, img: rouletteAurum, video: ''},
        {id: 13, img: rusianPoker, video: ''},
        {id: 14, img: sicBo, video: ''},
        {id: 15, img: speedBaccarat, video: ''},
        {id: 16, img: speedBj, video: ''},
        {id: 17, img: swiftRoulette, video: ''},
        {id: 18, img: teenPatti, video: ''},
    ];


    return (
        <>
            {
                tables.map(table => {
                    const {id, img, video} = table;

                    return (
                        <div className='cr-ice-item' key={id}>
                            <button className='cr-ice-item-in' onClick={() => selectVideoHandler(video)}>
                                <img className='cr-ice-item-img' src={img} alt=''/>
                            </button>
                        </div>
                    )
                })
            }
        </>
    );
};

export default memo(Tables);