import Video1 from "./Jumbotron01.mp4";
import Video2 from "./Jumbotron02.mp4";
import ReactPlayer from "react-player";
import styles from "./Jumbotron.module.css"



const Jumbutrom= ()=>{
    return (
        <div className={styles.div1}>
            <div className={styles.div2}>
              <ReactPlayer url= {Video1} playing loop />
              <ReactPlayer url= {Video2} playing loop />
            </div>
            
        </div>
    )
};

export default Jumbutrom;