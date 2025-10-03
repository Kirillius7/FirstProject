import myPic from './assets/atlanta_.jpg'

function Card(){
    return(
        <div className = "card">
            <img className = "card-image" src = {myPic} alt = "Me"></img>
            <h2 className = "card-title">Kyrylo Popov</h2>
            <p class = "card-text">I am a work applier</p>
        </div>
    );
}

export default Card