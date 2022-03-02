import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db, storage } from "../firebase"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc} from "firebase/firestore";

export const singnUpStudent = async (formData, uploadImage = null, resume, loadCallBack, successCallBack, errorCallback) => {
    try {
        loadCallBack()
        let imageUrl
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
        if (uploadImage) {
            const storageRef = ref(storage, `images/${uploadImage.name}`)
            const image = await uploadBytes(storageRef, uploadImage)
            imageUrl = await getDownloadURL(image.ref)
        }

        const storageRef = ref(storage, `files/${resume.name}`)
        const res = await uploadBytes(storageRef, resume)
        const resumeUrl = await getDownloadURL(res.ref)

        const userRef = doc(db, "users", userCredential.user.uid)
        await setDoc(userRef, {
            firstName: formData.firstName,
            lastName: formData.lastName,
            gender: formData.gender,
            email: formData.email,
            contact: formData.contact,
            city: formData.city,
            address: formData.address,
            imageUrl: imageUrl ? imageUrl : "",
            resumeUrl,
            role: "student"
        })
        successCallBack(userCredential.user)

    } catch (error) {
        errorCallback(error.message)
    }

}


export const singnUpCompany = async (formData, uploadImage = null, loadCallBack, successCallBack, errorCallback) => {
    try {
        loadCallBack()
        let imageUrl
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
        if (uploadImage) {
            const storageRef = ref(storage, `images/${uploadImage.name}`)
            const image = await uploadBytes(storageRef, uploadImage)
            imageUrl = await getDownloadURL(image.ref)
        }
        const userRef = doc(db, "users", userCredential.user.uid)
        await setDoc(userRef, {
            companyName: formData.companyName,
            established: formData.established,
            email: formData.email,
            contact: formData.contact,
            username: formData.username,
            description: formData.description,
            imageUrl: imageUrl ? imageUrl : "",
            role: "company"
        })
        successCallBack(userCredential.user)

    } catch (error) {
        errorCallback(error.message)
    }

}

export const loginUser = async (user, loadCallBack, successCallBack, errorCallback) => {
    try {
        loadCallBack()
        const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password)
        successCallBack(userCredential.user)
    } catch (error) {
        errorCallback(error.message)
    }
}

export const logoutUser = async (successCallBack,errorCallback) => {
    try {
         await signOut(auth)
         successCallBack()
    } catch (error) {
        errorCallback(error.message)
    }
}

