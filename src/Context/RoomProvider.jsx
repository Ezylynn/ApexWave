import React, { createContext, useContext, useMemo, useState } from "react";
import { useFireStore } from "../hook/useFireStore";
import { AuthContext } from "./AuthProvider";
import { doc } from "firebase/firestore";

export const RoomContext = createContext();

export default function RoomProvider({ children }) {
    const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);

    const [selectedRoomId, setSelectedRoomId] = useState("");
    const { user } = useContext(AuthContext);

    const roomsCondition = useMemo(() => {
        if (!user || !user.uid) return null;
        return {
            name: "members",
            operator: "array-contains",
            compareValue: user.uid,
        };
    }, [user]);

    const rooms = useFireStore("rooms", roomsCondition || {});


    return (
        <RoomContext.Provider
            value={{
                rooms,
                isAddRoomVisible,
                setIsAddRoomVisible,
                selectedRoomId,
                setSelectedRoomId,
            }}
        >
            {children}
        </RoomContext.Provider>
    );
}

export const useRooms = () => {
    return useContext(RoomContext);
};

/*
    {name:"room name",
    description:"mota",
    members:[uid1,uid2,...]}
    */
