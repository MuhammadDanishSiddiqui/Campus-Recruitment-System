import { getDoc,doc,query,getDocs,collection,where, addDoc } from "firebase/firestore"
import { db } from "../firebase"
import moment from "moment"

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
         successCallBack({...studentSnap.data(),id:studentSnap.id})
        }
        else{
            errorCallback("No such document exits.")
        }
    } catch (error) {
        errorCallback(error.message)
    }
}


export const addNewJob = async (form,loadCallBack, successCallBack, errorCallback) => {
    try {
        loadCallBack()
        const colRef = collection(db, "jobs");
        await addDoc(colRef, {
            title:form.title,
            type:form.type,
            description:form.description,
            salary: form.salary,
            companyId: form.companyId,
            companyName:form.companyName,
            email:form.email,
            createdAt: moment(new Date()).valueOf()
        })
        successCallBack()
    } catch (error) {
        errorCallback(error.message)
    }
}


export const getAllJobs = async (id,loadCallBack, successCallBack, errorCallback) => {
    try {
        let jobs = []
        loadCallBack()
        const q = query(collection(db, "jobs"), where("companyId", "==", id));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            jobs.push({...doc.data(),id:doc.id})
        });
        successCallBack(jobs)
    } catch (error) {
        errorCallback(error.message)
    }
}

export const getJobDetails = async (id,loadCallBack, successCallBack, errorCallback) => {
    try {
        loadCallBack()
        const jobRef = doc(db, "jobs", id);
        const jobSnap = await getDoc(jobRef);
        if(jobSnap.exists())
        {
         successCallBack(jobSnap.data())
        }
        else{
            errorCallback("No such document exits.")
        }
    } catch (error) {
        errorCallback(error.message)
    }
}
