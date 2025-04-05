import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../Context/AuthProvider";
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import EditableRow from '../layout/EditableRow';
import StaticRow from '../layout/StaticRow';
import { addDoc, doc, collection, getDocs, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { db } from '../firebase/config';



const Profile = () => {

  
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
     // 🔸 States for edit mode and form data
    const [currentUser, setCurrentUser] = useState({
            fullName: '',
            email: '',
            uid: '',
            age: null,
            dob: '',
            address: '',
            creationDate: '',
            photoURL: '',
    });

    

    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        fullName: currentUser.fullName,
        age: currentUser.age,
        dob: currentUser.dob,
        address: currentUser.address,
    });

    // const 
    //     [originalData, setOriginalData] = useState({
    //     fullName: currentUser.fullName,
    //     age: currentUser.age,
    //     dob: currentUser.dob,
    //     address: currentUser.address,
    // });

    useEffect(() => {
        if (currentUser) {
            setFormData({
                fullName: currentUser.fullName,
                age: currentUser.age,
                dob: currentUser.dob,
                address: currentUser.address,
            })

            // setOriginalData({
            //     fullName: currentUser.fullName,
            //     age: currentUser.age,
            //     dob: currentUser.dob,
            //     address: currentUser.address,
            // })
             
        }
    }, [currentUser])

    useEffect(() => {
    if (!user) return; // Wait until user is loaded

    const fetchCurrentUser = async () => {
        try {
        const userDisplayRef = doc(db, 'users_Profile', user.uid);
        const userRef = doc(db, 'users', user.uid);

        const [userDisplayFetch, userFetch] = await Promise.all([
            getDoc(userDisplayRef),
            getDoc(userRef),
        ]);

        const userDisplayFetchObj = userDisplayFetch.data();
        const userFetchObj = userFetch.data();
            
        console.log(userDisplayFetchObj);
        console.log(userFetchObj);
            
        setCurrentUser({
        fullName: userFetchObj.displayName || 'undefined',
        email: userFetchObj.email,
        uid: userDisplayFetchObj.userId,
        age: userDisplayFetchObj.age,
        dob: userDisplayFetchObj.dob,
        address: userDisplayFetchObj.address,
        creationDate: userDisplayFetchObj.dateCreated,
        photoURL: userDisplayFetchObj.photoURL,
        });
        
            
        } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
        }
    };

    fetchCurrentUser(); // ✅ Now user is guaranteed to exist
    }, [user]);


  // 🔸 Update field handler
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
    
    const cancelChange = () => {
        setFormData({
                fullName: currentUser.fullName,
                age: currentUser.age,
                dob: currentUser.dob,
                address: currentUser.address,
        })
    }


    const uploadChange = async () => {
        // check if there were any changes made to user data
        if (
        formData.fullName === currentUser.fullName &&
        formData.age === currentUser.age &&
        formData.dob === currentUser.dob &&
        formData.address === currentUser.address
        )
        {

        setEditMode(false);
        }
        else {
            console.log("Changes detected! Proceed to update...");
            try {
            const userDisplayRef = doc(db, 'users_Profile', user.uid);
            const userRef = doc(db, 'users', user.uid);
            // check if any changes made to display name, if so update name on 'users' collection
                if(formData.fullName !== currentUser.fullName){
                    await updateDoc(userRef, {
                        displayName: formData.fullName
                    })
                  
                    await updateDoc(userDisplayRef, {
                        displayName: formData.fullName
                    })
                }
                

              if (formData.age.trim() === "") {
                console.log('No change to age')
                 setEditMode(false)
              } else if (
                formData.age !== currentUser.age &&                  // has changed
                !isNaN(formData.age) &&                              // is a number
                /^\d+$/.test(formData.age.trim())                    // only digits
              ) {
                setEditMode(false);
                console.log("Age changed and valid, updating...");
                await updateDoc(userDisplayRef, { age: formData.age });
              } else {
                cancelChange();
                alert(" Invalid format. Please enter your age as a number");
              }

            
                if (formData.address !== currentUser.address) {
                    setEditMode(false)
                    await updateDoc(userDisplayRef,
                        {
                            address: formData.address,
                        }
                    )
                }
                         
                if (formData.dob !== currentUser.dob) {
                        setEditMode(false)
                        await updateDoc(userDisplayRef,
                            {
                                dob: formData.dob,
                            })
                        
                    }
                    
                }
                 
            catch (error) {
            console.error("Lỗi khi upload dữ liệu:", error);
            }
        }


  }
  return (
    <div className="w-full flex flex-col min-h-screen bg-[#F8F9FF]">
      <Header user={user} />

      <main className="flex flex-col container mx-auto items-center justify-center min-h-screen flex-grow py-12 px-6">
        <div className="min-w-1/2 bg-white rounded-xl p-8 flex flex-col items-center gap-8 py-8 px-8 shadow-sm">
          {currentUser.photoURL && (
            <img
              src={currentUser.photoURL}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-[#FB8E0B]"
            />
          )}

          <h1 className="text-3xl md:text-4xl font-bold text-[#FB8E0B]">
            My Account
          </h1>

          {/* Grid */}
          <div className="w-full space-y-4 text-md md:text-lg text-gray-700">
            {editMode ? (
              <>
                <EditableRow label="Username" name="fullName" value={formData.fullName} onChange={handleChange} />
                <EditableRow label="Age" name="age" value={formData.age} onChange={handleChange} />
                <EditableRow label="Date of Birth" name="dob" value={formData.dob} onChange={handleChange} />
                <EditableRow label="Home Address" name="address" value={formData.address} onChange={handleChange} />
              </>
            ) : (
              <>
                <StaticRow label="Username" value={formData.fullName} />
                <StaticRow label="Age" value={formData.age} />
                <StaticRow label="Date of Birth" value={formData.dob} />
                <StaticRow label="Home Address" value={formData.address} />
              </>
            )}
            <StaticRow label="UID" value={currentUser.uid} />
            <StaticRow label="Account Created" value={currentUser.creationDate} />
          </div>

          {/* Buttons */}
          <div className="w-full flex items-center justify-center gap-6 mt-4">
            {editMode ? (
              <>
                <button
                    onClick= {()=>
                        {setEditMode(false);
                        cancelChange(); }
                    }
                  className="px-6 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    uploadChange()
                  }}
                  className="px-6 py-2 bg-[#FB8E0B] text-white hover:bg-orange-600 rounded-lg"
                >
                  Save
                </button>
              </>
            ) : (
              <button
                onClick={() => setEditMode(true)}
                className="px-6 py-2 bg-[#FB8E0B] text-white hover:bg-orange-600 rounded-lg"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;