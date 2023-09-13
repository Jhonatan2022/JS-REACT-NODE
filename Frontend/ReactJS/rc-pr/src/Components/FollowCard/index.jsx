import { PropTypes } from "prop-types";
import { useState } from "react";

const validateProps = {
  children: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  initialIsFollowing: PropTypes.bool.isRequired,
};

function FollowCard({ children, userName, initialIsFollowing }) {
  FollowCard.propTypes = validateProps;

  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt={`Avatar de ${children}`}
          src={`https://unavatar.io/github/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}

export { FollowCard };
