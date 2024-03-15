export default function Text(props) {
    return(
        <p style={styles.colorText}>{props.p}</p>
    );
}

const styles = {
    colortext: {
        color: "blue",
        textAling: "left",
        fontSize: 32,
        fontFamily: "Roboto, Helvetica",
    },
};

