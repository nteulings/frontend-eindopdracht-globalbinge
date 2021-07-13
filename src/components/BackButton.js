import { useHistory } from "react-router-dom";

function BackButton() {
    let history = useHistory();

    function handleClick() {
        // <button onClick={() => history.goBack()}>Go Back</button>
        // history.push("/home");
        history.goBack();
    }

    return (
        <button type="button" onClick={handleClick}>
            Back to results
        </button>
    );
}

export default BackButton;
