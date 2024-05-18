import css from "./Profile.module.css";



const Profile = ({ name, tag, location, image, stats: {followers,views,likes} }) => {
  
  return (
    <>
      <div className={css.container}>
        <div>
          <img
            className={css.ProfileImg}
            src={image}
            alt="User avatar"
          />
          <p className={css.title}>{name}</p>
          <p className={css.text}>@{tag}</p>
          <p className={css.text}>{location}</p>
        </div>

        <ul className={css.list}>
          <li className={css.item}>
            <span>Followers</span>
            <span className={css.listItem}>{followers}</span>
          </li>
          <li className={css.item}>
            <span>Views</span>
            <span className={css.listItem}>{views}</span>
          </li>
          <li className={css.item}>
            <span>Likes</span>
            <span className={css.listItem}>{likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Profile;
