import { doc, updateDoc } from "firebase/firestore"
import { db } from "../firebase"


export const updateStudentDetails = async (form,id,loadCallBack, successCallBack, errorCallback) => {
    try {
        loadCallBack()
        const studentRef = doc(db, "users", id);
        await updateDoc(studentRef,{
            firstName: form.firstName,
            lastName: form.lastName,
            gender: form.gender,
            email: form.email,
            contact: form.contact,
            city: form.city,
            address: form.address,
            imageUrl: form.imageUrl,
        });
      
        successCallBack()
    } catch (error) {
        errorCallback(error.message)
    }
}

export const updateCompanyDetails = async (form,id,loadCallBack, successCallBack, errorCallback) => {
    try {
        loadCallBack()
        const studentRef = doc(db, "users", id);
        await updateDoc(studentRef,{
            companyName: form.companyName,
            established: form.established,
            email: form.email,
            contact: form.contact,
            username: form.username,
            description: form.description,
        });
        successCallBack()
    } catch (error) {
        errorCallback(error.message)
    }
}