// Name: Soban Iqbal | Reg. No: 2600604
import styles from "./ProfileCard.module.css";
import RoleTag from "./RoleTag.jsx";

// Task 2: props name, role, city. role defaults to "Student".
function ProfileCard({ name, role = "Student", city }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{name}</h3>
      <RoleTag role={role} />
      <p>City: {city ? city : "City not added"}</p>
    </div>
  );
}

export default ProfileCard;
