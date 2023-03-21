import Video1 from "./Jumbotron01.mp4";
import Video2 from "./Jumbotron02.mp4";
import ReactPlayer from "react-player";
// import styles from "./Jumbotron.module.css"



const Jumbutrom= ()=>{
    return (
        <div className="flex justify-center">
            <div >
                <ReactPlayer className="w-screen" url= {Video1} playing loop />

            </div>
            <div >
                <ReactPlayer className="w-96" url= {Video2} playing loop />
            </div>
            
        </div>
    )
};

export default Jumbutrom;