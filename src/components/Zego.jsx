import React from "react";
import './Zego.css';
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
const RoomPage = () => {
    const { roomID } = useParams();
    const myMeeting = async (element) => {
        const appID = 201551937;
        const serverSecret = "bf1ed83f943c7be867e935c47124b3a6";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Shiv");
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy Link',
                    url: `http://localhost:3000/${roomID}`,
                },
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall,
            },
            showScreenSharingButton: true,
        });
    };
    return <div className="vc">
        <div ref={myMeeting} className="meeting" />
    </div>;
};

export default RoomPage;