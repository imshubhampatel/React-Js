
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="left">
                <div className="hemburger">
                    <div className="lines">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                    <div className="logo">
                        <img src="https://maxcdn.icons8.com/Share/icon/Media_Controls/youtube_play1600.png" alt="mypic" />
                        <div><span>YouTube</span></div>
                    </div>
                </div>
                <div className="search-bar">
                    <input type="search" value = "search"/>
                </div>
            </div>
            <div className="right">
                <div className="mic"><i className="fas fa-microphone fa-2x"></i></div>
                <div className="video"><i className="fas fa-video fa-2x"></i></div>
                <div className="apps"><i className="fas fa-th fa-2x"></i></div>
                <div className="bell-icon"><i className="fas fa-bell fa-2x"></i></div>
                <div className="gmail"><i className="fas fa-user fa-2x"></i></div>
            </div>


        </div>
    )
}