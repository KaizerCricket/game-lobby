import React, { useState, useContext, useEffect } from 'react'
import { Box } from '@mui/material'
import { PlayersContext } from '../contexts/PlayersContext'
import { getAuth, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage"

const ProfilePicture = () => {

    const storage = getStorage();
    const user = getAuth().currentUser;

    const { currentUID } = useContext(PlayersContext);
    const [profilePic, setPic] = useState(null);
    const [imgURL, setURL] = useState("https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png");

    useEffect(() => {
        if (currentUID !== 'null') {
            if(user.photoURL) {
                setURL(user.photoURL);
            }
            else{
                updateProfile(user, { photoURL: imgURL });
            }
        }
    }, [user]);


    const handleChange = (e) => {
        if (currentUID !== 'null') {
            if (e.target.files[0]) {
                setPic(e.target.files[0]);
            }
            upload(e.target.files[0]);
        }
    }

    const upload = async (file) => {
        console.log(file);
        console.log(user);
        const fileRef = ref(storage, `${user.uid}.png`);
        const url = await uploadBytes(fileRef, file).then(async () => {
            return await getDownloadURL(fileRef);
        });
        updateProfile(user, { photoURL: url });
        setURL(url);
    }

    return (
        <Box>
            <img src={imgURL} alt="profile pic" className='profilePic' />
            <p>Current UserID: {currentUID}</p>
            <input type="file" onChange={handleChange} />
        </Box>
    )
}

export default ProfilePicture