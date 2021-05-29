import UserInfo from "../userinfo/UserInfo"

function formatDate(date) {
    return date;
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.user} />
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">{formatDate(props.date)}</div>
        </div>
    );
}

export default Comment;