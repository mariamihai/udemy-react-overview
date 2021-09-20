import styles from "./ProfileForm.module.css";

const ProfileForm = () => {
  return (
    <form className={styles.form}>
      <div className={styles.control}>
        <label htmlFor="new-password">New password</label>
        <input type="passowrd" id="new-password" />
      </div>

      <div className={styles.action}>
        <button>Change password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
