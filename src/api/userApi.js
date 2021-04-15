import firebase from "firebase"

const userApi = {
    //Call API to get current user
    getUser: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const currentUser = firebase.auth().currentUser;

                resolve({
                    id: currentUser.uid,
                    name: currentUser.displayName,
                    email: currentUser.email,
                    photoUrl: currentUser.photoURL,
                })
            }, 500)
        })
    }
}

export default userApi;