import VideoPopUp from "./components/video-popup";
import Tables from "./components/tables";
import './assets/style/style.scss';
import {useState} from "react";

function App() {
    const [video, selectVideo] = useState(null);

    const selectVideoHandler = (video) => selectVideo(video);

    return (
        <div className='cr-ice' style={{backgroundImage: `url(${process.env.PUBLIC_URL + 'assets/resources/bg.png'})`}}>
            <div className='cr-ice-header'>
                <div className='cr-ice-logo'>
                    <img className='cr-ice-logo-in' src={process.env.PUBLIC_URL + 'assets/resources/logo.svg'} alt=''/>
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
                            <Tables selectVideoHandler={selectVideoHandler}/>
                        </div>
                    </div>
                </div>
                {
                    video && <VideoPopUp video={video} selectVideo={selectVideo}/>
                }
            </div>
        </div>
    );
}

export default App;
