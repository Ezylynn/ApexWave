import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'



import Footer from "../layout/Footer";
import { RoomContext } from "../Context/RoomProvider";
import { addDoc, doc, collection, getDocs, setDoc, updateDoc, getDoc } from "firebase/firestore";
import { addDocument } from "../firebase/services";
import { db } from "../firebase/config";
import { async } from "@firebase/util";

function Chat() {

  const [addUser, toggleAddUser] = useState('')
  const [contactList, toggleContact] = useState(false)
  const [allUsers, setAllUsers] = useState([])
  const [userSearch, setUserSearch] = useState('')
  const { user } = useContext(AuthContext);



  //room data
  const [addRoomBox, addRoom] = useState(false)
  const [roomName, getRoomName] = useState(null)
  const [roomDesc, getRoomDesc] = useState(null)
  // const [userAvailable, setUserAvailable] = useState(null)
  // message data
  const [message, getMessage] = useState(null)

  const [messageExist, setMessageExist] = useState(null)

  const [messageArray, setMessageArray] = useState(null)

  //set room id back to null later, true is set for testing purpose
  const [roomID, setroomID] = useState(null);

  const [roomDetail, setRoomDetail] = useState(null)

  const navigate = useNavigate()

  const [width, setWidth] = useState(window.innerWidth); //2560
  // console.log(window.innerWidth)

  const [selectedUid, setSelectedUid] = useState([]);


const handleAddUser = (user) => {
  setSelectedUid((prevSelected) => {
    // Check if user is already selected
    const alreadySelected = prevSelected.includes(user);

    if (alreadySelected) {
      // Remove user
      // console.log( prevSelected.filter((uid) => uid !== user))
      return prevSelected.filter((uid) => uid !== user);
    } else {
      // Add user
      // console.log([...prevSelected, user])
      return [...prevSelected, user];
   
    }
  });

};

  // listen to window size to adjust footer responsiveness
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return () => window.removeEventListener("resize", setWidth(window.innerWidth))
  }, [])


  function toggleBoxContact() {
    toggleContact(!contactList)

  }


  const { rooms, isAddRoomVisible, setIsAddRoomVisible, setSelectedroomID } =
    useContext(RoomContext);


  // const handleAddRoom = () => {
  //   setIsAddRoomVisible(true);
  // };

  function toggleAddRoom() {
    addRoom(!addRoomBox)
  }


  const getDetailRoom = (room) => {
    setroomID(room.id);
    setRoomDetail(room);
  }

  const sendMessagetoFireStore = async () => {

    //catch error
    if (!message) {
      return;
    }


    try {
      const roomRef = doc(db, 'rooms', roomID)

      // temporary fixing, need to add a manual update to username when change
      const userRef = doc(db, 'users', user.uid)
      const username = await getDoc(userRef)
      const usernameSort = username.data()

      // clear message input box
      getMessage('')

      const roomList = await getDoc(roomRef)
      let time = new Date()
      let newMessage = {
        content: message,
        displayName: usernameSort.displayName,
        time:  `${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}`,
        uid: user.uid
      }



      const currentMessageList = roomList.exists() ? roomList.data().messageList || [] : []
      // exists() firebase method, check if document exist or not, return true or false
      // data() firebase method, gets document data as an object
      // console.log(currentMessageList)
      await updateDoc(
        roomRef, {
        messageList: [...currentMessageList, newMessage]
      }
      )

    }

    catch (error) {
      console.log('Cannot upload data onto firebase', error)
    }
  }



  useEffect(() => {

    function storeMessage(chatDatabase) {
      setMessageArray(chatDatabase)
      setMessageExist(true)
    }


    async function fetchMessage() {
      try {
        const roomRef = doc(db, 'rooms', roomID)
        const chatList = await getDoc(roomRef)
        const chatDatabase = chatList.data().messageList
        storeMessage(chatDatabase)

      }
      catch (error) {
        // console.log('Unable to fetch data from firebase', error)
      }
    }


    fetchMessage()


  }, [roomID, sendMessagetoFireStore]
  )

  // lay ra danh sach user available
  // console.log(querySnapShot);
  //ddaya la mot doi tuong tra ve khi ma truy van getDocs
  //querysnapshot se tra ve danh sach tat ca cac tai lieu document


  const getUsers = async () => {
    try {

      const roomRef = doc(db, 'rooms', roomID)
      const room = await getDoc(roomRef)

      const userList = room.data().members

      const querySnapshot = await getDocs(collection(db, "users"));
      const document = querySnapshot.docs.map((doc) => doc.data());
      // console.log(document)

      // filter function that removes user that has already been added to the room
      const sortedDocument = document.filter((user)=> !userList.includes(user.uid))
      setAllUsers(sortedDocument);
      
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
    }
  };


  function toggleBoxAddUser() {
    toggleAddUser(!addUser)
    getUsers();
  }


  const addUserToRoom = async () => {
    


    try {
      const roomRef = doc(db, 'rooms', roomID)
      const roomList = await getDoc(roomRef)
      const currentMemberList = roomList.exists() ? roomList.data().members || [] : []
      // exists() firebase method, check if document exist or not, return true or false
      // data() firebase method, gets document data as an object
      if (selectedUid.length == 0) {
        throw error
      } 

      else {
         let userList = currentMemberList.concat(selectedUid)

          await updateDoc(
            roomRef, {
            members: userList
            }
          )
          alert('User has been added ')
          setSelectedUid([])
          getUsers()
      }
      
    
    }

    catch (error) {
      alert('No user has been selected')
      console.log('Cannot upload data onto firebase', error)
    }
 }


  function createRoom() {

    try {

      if (roomName == '' || roomDesc == ''|| roomName == null  || roomDesc == null  ) {
        throw error
      }

      else {
        addDocument("rooms", {
        name: roomName,
        description: roomDesc,
        members: [user.uid],
        messageList: []
        });
      alert('Room has been created')
      getRoomName('');
      getRoomDesc('');
      }

      toggleAddRoom()

      
    }

    catch (error) {
      alert('Enter your room name or room description')
      console.log("Can't create room")
    }
    
  }


  return (
    <div className="w-full">

      <main className="container relative mx-auto h-screen  md:shadow-xl md:flex md:justify-center">
        {/* add user */}

        {addUser && <div
          className="w-[400px] h-[500px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:left-1/2 md:-translate-x-1/2 absolute bg-white shadow-2xl rounded-lg p-6 z-40 transition-all  "
        >
          {/* Close Button */}
          <button onClick={() => toggleBoxAddUser()}
            id="close-btn"
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            <div>
                          <svg
              className="size-10 pr-4"
              aria-colspan
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>

            </div>

          </button>
          {/* Content */}
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-xl font-semibold text-center">Add a User</h2>
            <div className="flex items-center justify-center gap-4">
              <input
              onChange={(e) => setUserSearch(e.target.value.toLowerCase())}
              value ={userSearch || ''}
              type="text"
              id="username-input"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[#FB8E0B]"
              placeholder="Search username or UID"
              />

            </div>
            <div className="w-full flex flex-col items-center justify-start gap-4 h-[300px] overflow-y-scroll py-4 ">
              {/* filter function, if user search is blank then return all user to be map, 
              if not then check username or uid is included  user search*/}
            {
              allUsers.length === 0 ? (
                <p className="font-lg font-light">Loading...</p>
              ) : (
                allUsers
                  .filter((user) => {
                    return userSearch === ''
                      ? true
                      : user.displayName.toLowerCase().includes(userSearch.toLowerCase()) ||
                        user.uid.toString().includes(userSearch);
                  })
                  .map((user) => (
                    <div
                      key={user.uid}
                      onClick={(e) => handleAddUser(e.currentTarget.dataset.value)}
                      data-value={user.uid}
               
                      className={`max-w-5/6 flex flex-col items-start justify-center gap-2 py-4 px-4 rounded-sm ${selectedUid.includes(user.uid) ? "hover:bg-[#fb8f0bef] bg-[#FB8E0B]" : "hover:bg-gray-300 bg-gray-200 " }  hover:cursor-pointer`}
                    >
                      <p className="font-medium text-lg ">{user.displayName}</p>
                      <p className="font-light text-sm">UID:{user.uid}</p>
                    </div>
                  ))
              )
            }

            </div>


            <button
              onClick={addUserToRoom}
              id="submit-btn"
              className="w-full bg-[#FB8E0B] text-white py-2 rounded-lg hover:bg-[#db7e0d]"
            >
              Add User
            </button>
          </div>

        </div>}


        {addRoomBox && <div
          className="w-[400px] left-1/2 bottom-1/4 -translate-x-1/2 -translate-y-1/2 md:left-1/2 md:-translate-x-1/2 absolute bg-white shadow-2xl rounded-lg p-6 z-200 transition-all"
        >
          {/* Close Button */}
          <button onClick={toggleAddRoom}
            id="close-btn"
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >

            <svg
              className="size-10 pr-4"
              aria-colspan
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>

          </button>

          {/* Content */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-center">Create a Room</h2>
            <input
              type="text"
              value={roomName || ''}
              onChange={(e) => getRoomName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[#FB8E0B]"
              placeholder="Enter a name for the room"
            />
            <input
              type="text"
              value={roomDesc || ''}
              onChange={(e) => getRoomDesc(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[#FB8E0B]"
              placeholder="Enter a description for the room"
            />
            <button
              onClick={createRoom}
              id="submit-btn"
              className="w-full bg-[#FB8E0B] text-white py-2 rounded-lg hover:bg-[#db7e0d] hover:cursor-pointer"
            >
              Create Room
            </button>
          </div>
        </div>}


        {/* contact */}
        {contactList && <section
          id="contact-list"
          className="mx-auto absolute md:static bg-white  w-full flex-col items-center shadow-md md:flex md:w-[40%] z-100"
        >
          <nav className="static flex max-h-12 w-full flex-row items-center justify-between bg-[#FB8E0B] py-4  shadow-md z-50">
            <p className="pl-4 text-center text-lg font-semibold text-white">
              Rooms
            </p>
            <svg onClick={() => (toggleBoxContact(),addRoom(false))}
              id="x-button"
              className="size-10 pr-4 text-white"
              aria-colspan
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </nav>
          <section className="flex flex-col w-full justify-start items-center h-screen">
            <div className="flex w-[90%] flex-col gap-6 overflow-y-auto max-h-[80%] pt-4">


              
              { rooms && 
                rooms.map((room, key) => (
                <div className="flex flex-col gap-2 rounded-lg bg-slate-100 p-4 hover:cursor-pointer" key={key} onClick={() => (getDetailRoom(room),toggleBoxContact())}>
                  <p className="text-lg font-semibold">{room.name}</p>
                  <p className="line-clamp-1 text-sm font-light">
                    {room.description}
                  </p>
                </div>
              ))}
            </div>

              <div onClick={toggleAddRoom} className="w-[90%] flex flex-col gap-2 rounded-lg bg-slate-100 px-4 py-6 items-center justify-center hover:cursor-pointer mt-8">
                <p className="text-lg font-semibold"><span> + </span>Add room</p>
              </div>
          </section>
        </section>
        }


        {/* chat message main */}
        <section className="w-full min-h-screen container max-h-[600px] overflow-hidden flex flex-col">
          {/* nav bar */}
          <div className="flex max-h-12 w-full flex-row items-center justify-between px-4 py-8">
            <div onClick={() => navigate('/')} className="logo">
              <svg
                className="size-16 hover:cursor-pointer"
                viewBox="0 0 95 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24.0611 29.4442H30.2281L19.2314 0.466553H14.1789L3.21942 29.4442H9.38646L11.727 23.0171H21.6834L24.0611 29.4442ZM19.7144 17.5931H13.696L16.7052 9.38276L19.7144 17.5931ZM51.0245 15.0297C50.4672 13.7666 49.7242 12.652 48.7583 11.649C47.7552 10.683 46.6407 9.94001 45.3775 9.38275C44.0773 8.82549 42.7027 8.56543 41.2538 8.56543C39.8421 8.56543 38.4303 8.82549 37.1301 9.38275C35.8669 9.94001 34.7524 10.683 33.7493 11.649C32.7834 12.6149 32.0404 13.7666 31.4831 15.0297C30.963 16.33 30.6658 17.7045 30.6658 19.1534V34.9425L36.2384 36.8001V28.4783C36.5356 28.6269 36.8328 28.7755 37.1301 28.887C38.4303 29.4442 39.8421 29.7414 41.2538 29.7414C42.6655 29.7414 44.0773 29.4442 45.3775 28.887C46.6407 28.3668 47.7552 27.6238 48.7583 26.6208C49.7242 25.6548 50.4672 24.5403 51.0245 23.2772C51.5817 21.9769 51.8418 20.5652 51.8418 19.1534C51.8418 17.7045 51.5817 16.33 51.0245 15.0297ZM41.2538 24.1688C38.5046 24.1688 36.2384 21.9026 36.2384 19.1534C36.2384 16.4043 38.5046 14.1381 41.2538 14.1381C44.003 14.1381 46.2692 16.4043 46.2692 19.1534C46.2692 21.9026 44.003 24.1688 41.2538 24.1688ZM66.6011 28.7012C65.2637 29.2956 63.852 29.5929 62.4031 29.5929C59.5796 29.5929 56.9791 28.4783 54.9729 26.5093C53.0039 24.5403 51.9265 21.9026 51.9265 19.1163C51.9265 16.33 53.0039 13.6923 54.9729 11.7233C56.9791 9.75429 59.5796 8.63976 62.4031 8.63976C65.1894 8.63976 67.8271 9.75429 69.7961 11.7233C71.7651 13.6923 72.8425 16.33 72.8425 19.1163V21.8283H58.0936C58.9852 23.2401 60.5827 24.206 62.4031 24.206C63.8148 24.206 65.1151 23.6487 66.081 22.6085L70.019 26.3236C69.0531 27.3267 67.9014 28.144 66.6011 28.7012ZM62.4031 14.0266C60.5827 14.0266 58.9852 14.9926 58.0936 16.4414H66.7126C65.7838 14.9926 64.1863 14.0266 62.4031 14.0266Z"
                  fill="#FB8E0B"
                />
                <path
                  d="M85.483 29.4443H92.0959L84.5543 19.042L92.0216 8.75122H85.2973L81.1735 14.5096L77.1241 8.75122H70.2883L77.83 19.0049L70.3255 29.4443H76.9012L81.2107 23.723L85.483 29.4443Z"
                  fill="#FD6003"
                />
              </svg>
            </div>
            <div className="flex flex-row items-center justify-center gap-6 hover:cursor-pointer">
              <p onClick={() => toggleBoxContact()} id="contact">Rooms</p>

            </div>
          </div>

          {
            roomID ? (
              <div className="w-full flex flex-col flex-1 overflow-hidden ">
                <nav className="container sticky flex w-full flex-row justify-center items-center bg-white md:static">
                  <section className="item-center mx-auto flex w-full flex-row items-center justify-between bg-[#FB8E0B] px-6 py-4">
                    <p className="font-semibold text-white">
                      Room {roomDetail ? roomDetail.name : "undefined"}
                    </p>
  
                    <i onClick={() => toggleBoxAddUser()}
                      id="add-button"
                      className="bx bx-message-square-add text-2xl text-white hover:cursor-pointer"
                    />
                  </section>
                </nav>

                <section className="w-full flex-1 h-screen overflow-hidden p-4 md:pt-4 flex flex-col gap-4 items-center justify-start">
                  {messageExist ? (
                    <div
                      className="w-full flex flex-col items-center justify-start gap-4 overflow-y-auto p-4 pb-2 md:pb-4 md:pt-4 max-h-[calc(100vh-200px)]"
                      style={{ maxHeight: "calc(100vh - 200px)", overflowY: "auto" }}
                    >

                      {messageArray &&
                        messageArray.map((text, key) => {
                        if (text.uid === user.uid) {
                          return (
                            <div key={key} className="max-w-[70%] self-end bg-orange-300 rounded-md px-4 py-2 text-sm flex flex-col gap-1 break-words">
                              <div className="flex justify-between items-center text-xs text-gray-700 font-semibold min-w-[150px]">
                                <span className="pr-4">{text.displayName}</span>
                                <span className="text-right">{text.time}</span>
                              </div>
                              <p className="text-black">{text.content}</p>
                            </div>
                          );
                        } else {
                          return (
                            <div key={key}  className="max-w-[70%] self-start bg-blue-300 rounded-md px-4 py-2 text-sm flex flex-col gap-1 break-words">
                              <div className="flex justify-between items-center text-xs text-gray-700 font-semibold min-w-[150px]">
                                <span className="pr-4">{text.displayName}</span>
                                <span className="text-right">{text.time}</span>
                              </div>
                              <p className="text-black">{text.content}</p>
                            </div>
                          );
                        }
                      })}
                    </div>
                  ) : (
                    <div className="flex w-full h-full items-center justify-center text-gray-400">
                      <p>No Message</p>
                    </div>
                  )}
                </section>

                {/* Input Field */}
                <div className="w-full static flex items-center justify-evenly gap-4 bg-gray-200 p-4">
                  <input value={message || ''}
                    onChange={(e) => getMessage(e.target.value)}
                    className="flex-1 rounded-lg border p-2 bg-white focus:outline-none focus:ring focus:ring-orange-300"
                    type="text"
                    placeholder="Write a message"
                  />
                  <button onClick={sendMessagetoFireStore} className="rounded-lg bg-orange-500 px-4 py-2 text-white hover:bg-orange-600">
                    Send
                  </button>
                </div>
              </div>) : (
              <div className="w-full container flex-1   bg-slate-100 flex flex-col justify-center items-center text-gray-500">
                <p className="text-xl font-semibold">No group chat selected yet</p>
                <p className="text-md">Create a group chat and add friends to start chatting</p>
              </div>
            )
          }

        </section>
      </main>

      {width < 768 ? <React.Fragment></React.Fragment> : <Footer />}
    </div>
  );
}

export default Chat;
