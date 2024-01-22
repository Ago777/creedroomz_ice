import logo from './assets/resources/logo.svg';
import './assets/style/style.scss';
import Tables from "./components/tables";
import {useState} from "react";
import VideoPopUp from "./components/video-popup";

function App() {
    const [video, selectVideo] = useState(null);

    const selectVideoHandler = (video) => selectVideo(video);

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
