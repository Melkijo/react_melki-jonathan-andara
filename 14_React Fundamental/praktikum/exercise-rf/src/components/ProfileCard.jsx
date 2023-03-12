import styles from './ProfileCard.module.css';


export default function ProfileCard(){
    const user = {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
    }
    
    return(
        <>
            <div className={styles.userCard}>
                <img src={user.avatar} alt="avatar" className={styles.userImg}/>
                <div className={styles.userContent}>
                <div className="userName">{user.first_name} {user.last_name} </div>
                <div className="userEmail">{user.email}</div>
                </div>
            </div>
        </>
    )
}