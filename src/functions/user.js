import { getDoc,doc,query,getDocs,collection,where } from "firebase/firestore"
import { db } from "../firebase"

export const getUserDetail = async (id,loadCallBack, successCallBack, errorCallback) => {
    try {
        loadCallBack()
        const userRef = doc(db, "users", id);
        const userSnap = await getDoc(userRef);
        if(userSnap.exists())
        {
         successCallBack(userSnap.data())
        }
      
    } catch (error) {
        errorCallback(error.message)
    }
}

export const getAllCompanies = async (loadCallBack, successCallBack, errorCallback) => {
    try {
        let companies = []
        loadCallBack()
        const q = query(collection(db, "users"), where("role", "==", "company"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          companies.push({...doc.data(),id:doc.id})
        });
        successCallBack(companies)
    } catch (error) {
        errorCallback(error.message)
    }
}

export const getCompanyDetails = async (id,loadCallBack, successCallBack, errorCallback) => {
    try {
        loadCallBack()
        const companyRef = doc(db, "users", id);
        const companySnap = await getDoc(companyRef);
        if(companySnap.exists())
        {
         successCallBack(companySnap.data())
        }
        else{
            errorCallback("No such document exits.")
        }
    } catch (error) {
        errorCallback(error.message)
    }
}