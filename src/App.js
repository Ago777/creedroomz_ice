import rouletteAurum from './assets/resources/thumbnails/roulette-aurum.png';
import logo from './assets/resources/logo.svg';
import './assets/style/style.scss';

function App() {
    return (
        <div className='cr-ice'>
            <div className='cr-ice-header'>
                <div className='cr-ice-logo'>
                    <img className='cr-ice-logo-in' src={logo} alt=''/>
                </div>
            </div>
            <div className='cr-ice-body'>
                <div className='cr-ice-list'>
                    <div className='cr-ice-title'>
                        <p className='cr-ice-title-in'>Discover Our <span
                            className='cr-ice-title-strong'>Portfolio</span></p>
                    </div>
                    <div className='cr-ice-list-in'>
                        <div className='cr-ice-items'>
                            <div className='cr-ice-item'>
                                <button className='cr-ice-item-in'>
                                    <img className='cr-ice-item-img' src={rouletteAurum} alt=''/>
                                </button>
                                {/*<div className='cr-ice-popup'>*/}
                                {/*    <div className='cr-ice-popup-overlay'/>*/}
                                {/*    <div className='cr-ice-popup-in'>*/}
                                {/*        <div className='cr-ice-popup-logo'>*/}
                                {/*            <img className='cr-ice-popup-logo-in' src={logo} alt=''/>*/}
                                {/*        </div>*/}
                                {/*        <div className='cr-ice-popup-video'>*/}
                                {/*            <button className='cr-ice-popup-close'>*/}
                                {/*                <svg*/}
                                {/*                    className='cr-ice-popup-close-i'*/}
                                {/*                    xmlns='http://www.w3.org/2000/svg'*/}
                                {/*                    fill='none'*/}
                                {/*                    viewBox='0 0 24 24'*/}
                                {/*                >*/}
                                {/*                    <path*/}
                                {/*                        d='M18.795 17.804a.702.702 0 01-.227 1.143.7.7 0 01-.764-.152L12 12.99l-5.804 5.805a.7.7 0 01-.99-.99L11.01 12 5.205 6.196a.7.7 0 11.99-.99L12 11.01l5.804-5.805a.7.7 0 01.99.99L12.99 12l5.805 5.804z'*/}
                                {/*                    />*/}
                                {/*                </svg>*/}
                                {/*            </button>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
