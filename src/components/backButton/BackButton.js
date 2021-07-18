import { useHistory } from "react-router-dom";

// This component button will bring the user back to the last page a user visited.
// - [ ] prevent unmounting last page?

function BackButton() {
    let history = useHistory();

    function handleClick() {
        history.goBack();
    }

    return (
        <button type="button" onClick={handleClick}>
            Back to results
        </button>
    );
}

export default BackButton;
