import userData from "./UserData";

export default function Card(props) {

    return (
        <>
            {userData.map((item) => {
                return (
                    <>
                        <div className="card">
                            <div className="card-image">
                                <img src={item.imgsrc} alt="Movie-image" />
                            </div>
                            <div className="card-title">
                                <h2>{item.series}</h2>
                            </div>
                            <div className="card-button">
                                <button><a href={item.link} target={"_blank"}>Watch Now</a></button>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
};

// <>

// </>