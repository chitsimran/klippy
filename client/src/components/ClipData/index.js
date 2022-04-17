import { Button, TextField } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AddCLipButtonContainer, ClipDataContainer, ClipDataInputContainer, ClipLeftBlockContainer, ClipNumberBlockContainer, ClipNumberContainer } from './styles';
import axios from 'axios';

//TODO Add Snackbar
//TODO Implement Update method
//TODO Refractor code
//TODO make ui better

const ClipNumberBlock = ({ title, id, setClipNumber, clipNumber }) => {
    const handleClipNumberClick = () => {
        setClipNumber(title - 1);
    };

    return (
        <ClipNumberBlockContainer isSelected={clipNumber === title - 1} onClick={handleClipNumberClick}>
            {
                title
            }
        </ClipNumberBlockContainer>
    );
};

const ClipData = ({ userName }) => {
    const [data, setData] = useState([]);
    const [clipNumber, setClipNumber] = useState(0);
    const [clipData, setClipData] = useState(data ? data[clipNumber]?.data : '');
    const [isAdd, setIsAdd] = useState(false);

    useEffect(() => {
        fetchUserClips();
    }, [userName]);

    useEffect(() => {
        setClipData(data[clipNumber]?.data ?? '');
        setIsAdd(!data[clipNumber]?.id);
    }, [clipNumber, data]);

    const handleClipDataInputChange = e => {
        setClipData(e.target.value);
    };

    const handleAddClipButtonClick = () => {
        data.push({ data: '' });
        setClipNumber(data.length - 1);
    }; 

    const fetchUserClips = () => {
        axios({
            url: `/api/v1/users/${userName}/clips`,
            method: 'get',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        })
        .then(data => {
            console.log(data.data);
            setData(data.data?.data);
        })
        .catch(error => {
            console.log('error fetching user clips');
            console.log(error.data);
        });
    };

    const handleAddClick = () => {
        axios({
            url: `/api/v1/users/${userName}/clips`,
            method: 'post',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            data: {
                user_name: userName,
                data: clipData
            }
        })
        .then(data => {
            console.log('successfully added clipdata');
            fetchUserClips();
        })
        .catch(error => {
            console.log('error adding clipdata');
            console.log(error);
        });
    };

    const handleUpdateClick = () => {
        axios({
            url: `/api/v1/users/${userName}/clips`,
            method: 'put',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            data: {
                user_name: userName,
                data: clipData,
                id: data[clipNumber].id
            }
        })
        .then(data => {
            console.log('successfully updated clipdata');
        })
        .catch(error => {
            console.log('error updating clipdata');
            console.log(error);
        });
    };

    const handleDeleteClick = () => {
        axios({
            url: `/api/v1/users/${userName}/clips?id=${data[clipNumber].id}`,
            method: 'delete',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            data.splice(clipNumber, 1);
            setClipNumber(0);
            console.log('successfully deleted clipdata');
        })
        .catch(error => {
            console.log('error deleting clipdata');
            console.log(error);
        });
    };

    return (
        <ClipDataContainer>
            <ClipLeftBlockContainer>
                <ClipNumberContainer>
                    {
                        data.map((clip, idx) => {return (
                            <ClipNumberBlock
                                title={idx+1}
                                id={clip.id}
                                key={clip.id}
                                clipNumber={clipNumber}
                                setClipNumber={setClipNumber}
                            />
                        )})
                    }
                </ClipNumberContainer>
                <AddCLipButtonContainer onClick={handleAddClipButtonClick}>+</AddCLipButtonContainer>
            </ClipLeftBlockContainer>
            <ClipDataInputContainer>
                <TextField
                    id="clipData"
                    label="Data"
                    multiline
                    fullWidth
                    rows={24}
                    variant='filled'
                    color='primary'
                    sx={{
                        backgroundColor: 'var(--theme-light-gray)',
                        marginBottom: '20px'
                    }}
                    value={clipData}
                    onChange={e => handleClipDataInputChange(e)}
                    defaultValue={clipData}
                />
                { !isAdd && <Button color='primary' variant='outlined' sx={{ float: 'right', marginLeft: '4px' }} onClick={handleDeleteClick}>Delete</Button> }
                <Button color='primary' variant='contained' sx={{ float: 'right' }} onClick={isAdd ? handleAddClick : handleUpdateClick}>
                    {
                        isAdd ? 'Add' : 'Update'
                    }
                </Button>
            </ClipDataInputContainer>
        </ClipDataContainer>
    );
};

export default ClipData;
