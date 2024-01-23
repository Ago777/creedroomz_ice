import React from 'react';

const VideoPopUp = props => {
    const {video, selectVideo} = props;

    return (
        <div className='cr-ice-popup'>
            <div className='cr-ice-popup-overlay' onClick={() => selectVideo(null)}/>
            <div className='cr-ice-popup-in'>
                <div className='cr-ice-popup-logo'>
                    <img className='cr-ice-popup-logo-in' src={process.env.PUBLIC_URL + 'assets/resources/logo.svg'} alt=''/>
                </div>
                <div className={`cr-ice-popup-video`}>
                    <video controls loop autoPlay>
                        <source src={video} type={"video/mp4"}/>
                    </video>
                    <button className='cr-ice-popup-close' onClick={() => selectVideo(null)}>
                        <svg
                            className='cr-ice-popup-close-i'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                        >
                            <path
                                d='M18.795 17.804a.702.702 0 01-.227 1.143.7.7 0 01-.764-.152L12 12.99l-5.804 5.805a.7.7 0 01-.99-.99L11.01 12 5.205 6.196a.7.7 0 11.99-.99L12 11.01l5.804-5.805a.7.7 0 01.99.99L12.99 12l5.805 5.804z'
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};


export default VideoPopUp;