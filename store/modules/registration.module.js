import { usersCollection } from "../../plugins/firebase.js"
import { auth, storage } from "../../plugins/firebase.js"

export default {
    namespaced: true,
    state: {
    },
    getters: {},
    actions: {
        async signup({ commit }, payload) {
            try {
                const email = payload.email
                const password = payload.password
                delete payload.password
                await auth.createUserWithEmailAndPassword(email, password)
                    .then(function () {
                        const user = auth.currentUser.uid
                        payload.uid = user
                        auth.currentUser.updateProfile({
                            displayName: payload.username,
                        })
            })
            if (payload.file) {
                // create storage reference
                const ref = storage.ref().child(`${auth.currentUser.displayName}/Avatarimage.png`)
                // upload data into /users/<auth-uid>/profile_pic.png
                await ref.put(payload.file)
                // get download url or storage reference url
                const downloadUrl = await ref.getDownloadURL()
                delete payload.file
                payload.avatarURL = downloadUrl
            }
            usersCollection.add(payload)
            return true
        } catch(error) {
            return false
        }
    }
},
mutations: {
},
}