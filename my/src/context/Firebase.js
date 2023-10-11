import { createContext, useContext, useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, getDoc, doc,query,where } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FirebaseContext = createContext(null);

const firebaseConfig = {
  // apiKey: "AIzaSyCUhTWsBGwf-rLxsOKOx9y1eAuTPBsXtcc",
  // authDomain: "again-54827.firebaseapp.com",
  // projectId: "again-54827",
  // storageBucket: "again-54827.appspot.com",
  // messagingSenderId: "172597285513",
  // appId: "1:172597285513:web:57665b0576bc8622292c58",
  apiKey: "AIzaSyCQLgLtPKS5RqmareZl5-4dxhER3E1EqOg",
  authDomain: "edtech-805d2.firebaseapp.com",
  projectId: "edtech-805d2",
  storageBucket: "edtech-805d2.appspot.com",
  messagingSenderId: "3590724582",
  appId: "1:3590724582:web:128e0bd71b7b4397235427",
  measurementId: "G-V5VPQSTSGR",
  databaseURL: "https://edtech-805d2-default-rtdb.firebaseio.com/"
 
};


const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const fireStore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);


export const useFirebase = () => useContext(FirebaseContext);


export const FirebaseProvider = (props) => {

  const [isAdmin, SetisAdmin] = useState(false)
  const [isMobile,setIsMobile]=useState(false)

  const adminEmail = "vermabhavi7890@gmail.com";

  useEffect(() => {
    if (user && user.email === adminEmail) {
      SetisAdmin(true);
    }
  },);

  useEffect(() => {
    console.log("admin", isAdmin);
  }, [isAdmin]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, user => {
      // console.log(user);
      if (user) {
        setUser(user);
      } else {
        setUser(null)
      }
    });

    
  }, [])
  const SignupUserWithEmailandPassword = (email, password) => {
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User created:", user);
        toast("User created successfully!");

      })
      .catch((error) => {
        console.error("Error creating user:", error);
        toast("Error creating user: " + error.message);
      });
  };

   const SigninUserWithEmailandPassword = (email, password) => {
   signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed in:", user);
        // toast("User signed in successfully!");
        toast.success("User signed in successfully!", user);
      })
      .catch((error) => {
        console.error("Error signing in:", error);
        toast.error("Error signing in:", error);
      });
  };

  const singinWithGoogle = () => {
    signInWithPopup(firebaseAuth, googleProvider)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed in with Google:", user);
        toast.success("User signed in with Google successfully!", user);
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
        toast.error("Error signing in with Google: " + error.message);
      });


  }

  console.log(user)

  const handelCreateListing = async (name, isbn, price, coverPic, allVideoURL) => {
    if (!coverPic) {
      toast("Cover pic is undefined");
      return; // Exit the function if coverPic is missing
    }

    try {
      // Upload the cover picture to Firebase Storage
      const imageRef = ref(storage, `uploads/images/${Date.now()}-${coverPic.name}`);
      const uploadResult = await uploadBytes(imageRef, coverPic);

      // Create a new document in Firestore
      const bookDocRef = await addDoc(collection(fireStore, "books"), {
        name,
        isbn,
        price,
        imageURL: uploadResult.ref.fullPath,
        UserID: user.uid,
        UserEmail: user.email,
        displayName: user.displayName,
        photoUrl: user.photoURL,
        // role: user.role,
        allVideoURL, // Include the allVideoURL array
      });

      // Now you can do something with bookDocRef if needed
      // For example, you might want to log the ID of the created document
      console.log("Document ID:", bookDocRef.id);
      toast.success("upload successfuly")
    } catch (error) {
      console.error('Error creating book listing:', error);
      toast.error('Error creating  listing:', error)
    }
  };


  const listAllBooks = () => {
    return getDocs(collection(fireStore, "books"));

  }
  const fetchDocumentByName = async (name) => {
    console.log("fbname", name);
    try {
      const querySnapshot = await getDocs(
        query(collection(fireStore, "books"), where("name", "==", name))
      );
  
      if (!querySnapshot.empty) {
        // Assuming there's only one document with the same name
        const doc = querySnapshot.docs[0];
        const data = doc.data();
        return data; // Return the document data
      } else {
        // Handle case where no document with the specified name is found
        throw new Error('No document found with the specified name.');
      }
    } catch (error) {
      // Handle any errors that occur during the fetch
      console.error('Error fetching document:', error);
      throw error; // You can handle or propagate the error as needed
  
      // Display a toast notification for the error
      toast.error('Error fetching document: ' + error.message);
    }
  };
  
  

  const getImageURL = async (path) => {
    try {
      const fileRef = ref(storage, path); // Create a reference to the specific file
      const downloadURL = await getDownloadURL(fileRef); // Get the download URL
      return downloadURL;
    } catch (error) {
      console.error('Error getting image URL:', error);
      throw error; // You can handle or propagate the error as needed
    }
  };
  const logOut = () => {
    signOut(firebaseAuth);
    toast.info("Logout");


  }
  const isMobileDevice=()=> {
    const viewportWidth = window.innerWidth;
    // You can adjust the threshold value as needed
    const mobileThreshold = 768; // Typically, a width below 768px is considered a mobile device
  
    if(viewportWidth < mobileThreshold){
      setIsMobile(true);
    }else{
      setIsMobile(false);

    }
    return isMobile;
  }

  

  

  const isLogedIn = user ? true : false;

  return (
    <FirebaseContext.Provider value={{ SignupUserWithEmailandPassword,firebaseApp, SigninUserWithEmailandPassword, getImageURL, fetchDocumentByName, singinWithGoogle, isLogedIn, handelCreateListing, listAllBooks, logOut, user, isAdmin,isMobileDevice }}>
      {props.children}
      <ToastContainer
        position="top-center"
      />
    </FirebaseContext.Provider>
  );
};


