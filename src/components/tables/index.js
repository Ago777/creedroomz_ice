import React, {memo} from 'react';

const Tables = props => {
    const {selectVideoHandler} = props;

    const tables = [
        {id: 1, img: 'assets/resources/thumbnails/andar-bahar.png', video: 'assets/resources/mp4/andarBahar.mp4'},
        {id: 2, img: 'assets/resources/thumbnails/auto-roulette.png', video: ''},
        {id: 3, img: 'assets/resources/thumbnails/baccarat.png', video: ''},
        {id: 4, img: 'assets/resources/thumbnails/bet-on-poker.png', video: ''},
        {id: 5, img: 'assets/resources/thumbnails/blackjack.png', video: ''},
        {id: 6, img: 'assets/resources/thumbnails/cashout-blackjack.png', video: ''},
        {id: 7, img: 'assets/resources/thumbnails/casino-holdem.png', video: ''},
        {id: 8, img: 'assets/resources/thumbnails/dragon-tiger.png', video: ''},
        {id: 9, img: 'assets/resources/thumbnails/freebet-blackjack.png', video: ''},
        {id: 10, img: 'assets/resources/thumbnails/no-comm-baccarat.png', video: ''},
        {id: 11, img: 'assets/resources/thumbnails/roulette.png', video: ''},
        {id: 12, img: 'assets/resources/thumbnails/roulette-aurum.png', video: ''},
        {id: 13, img: 'assets/resources/thumbnails/russian-poker.png', video: ''},
        {id: 14, img: 'assets/resources/thumbnails/sic-bo.png', video: ''},
        {id: 15, img: 'assets/resources/thumbnails/speed-baccarat.png', video: ''},
        {id: 16, img: 'assets/resources/thumbnails/speed-blackjack.png', video: ''},
        {id: 17, img: 'assets/resources/thumbnails/swift-roulette.png', video: ''},
        {id: 18, img: 'assets/resources/thumbnails/teen-patti.png', video: ''},
    ];


    return (
        <>
            {
                tables.map(table => {
                    const {id, img, video} = table;

                    return (
                        <div className='cr-ice-item' key={id}>
                            <button className='cr-ice-item-in' onClick={() => selectVideoHandler(video)}>
                                <img className='cr-ice-item-img' src={process.env.PUBLIC_URL + img} alt=''/>
                            </button>
                        </div>
                    )
                })
            }
        </>
    );
};

export default memo(Tables);