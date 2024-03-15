import ram from "../assets/images/ram.jpg";
export default function Image(props){
    return(
        <img style={styles.reSize} src={ram} />
 );
    }

    const styles = {
        reSize: {
            width: 320,
            height: 440,
            paddingTop: 58,
        }
    };