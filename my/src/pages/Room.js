import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"
import { useFirebase } from '../context/Firebase';
import "./room.css"


const Room = () => {

    const firebase = useFirebase();
    const userName = firebase.user.displayName;
    const userId = firebase.user.uid;
   

    const { roomId } = useParams();
    const myMeeting = async (element) => {
        const appID = 1823374575;
        const serverSecret = "ac36f9955c24ae21c94d330426b9bc15";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, userId, userName);
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        console.log(zc)
        zc.joinRoom({
            container:element,
            scenario:{
                mode:ZegoUIKitPrebuilt.OneONoneCall,
            },
 
            

        })
    }

    return (
      <div ref={myMeeting} className='room-con'/>
    )
}

export default Room