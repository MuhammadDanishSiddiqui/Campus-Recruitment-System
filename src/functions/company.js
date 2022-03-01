import { getDoc,doc,query,getDocs,collection,where } from "firebase/firestore"
import { db } from "../firebase"

export const getAllStudents = async (loadCallBack, successCallBack, errorCallback) => {
    try {
        let students = []
        loadCallBack()
        const q = query(collection(db, "users"), where("role", "==", "student"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            students.push({...doc.data(),id:doc.id})
        });
        successCallBack(students)
    } catch (error) {
        errorCallback(error.message)
    }
}

export const getStudentDetails = async (id,loadCallBack, successCallBack, errorCallback) => {
    try {
        loadCallBack()
        const studentRef = doc(db, "users", id);
        const studentSnap = await getDoc(studentRef);
        if(studentSnap.exists())
        {
         successCallBack(studentSnap.data())
        }
        else{
            errorCallback("No such document exits.")
        }
    } catch (error) {
        errorCallback(error.message)
    }
}

