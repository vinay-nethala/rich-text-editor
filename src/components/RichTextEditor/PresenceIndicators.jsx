import styles from "../../styles/Editor.module.css";

function PresenceIndicators() {
  return (
    <div className={styles.presence}>
      <p>🟢 Current User</p>
      <p>🔵 Other User 1</p>
      <p>🟣 Other User 2</p>
    </div>
  );
}

export default PresenceIndicators;