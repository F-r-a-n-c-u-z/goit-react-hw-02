import css from "./FriendList.module.css";
import clsx from "clsx";

const FriendListItem = ({ name, isOnline, avatar }) => {
  return (
    <div className={css.container}>
      <img className={css.image} src={avatar} alt="Avatar" width="48" />
      <p className={css.item}>{name}</p>
      <p className={ clsx(isOnline ? css.online : css.offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
