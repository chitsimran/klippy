import { TextField } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ClipDataContainer, ClipDataInputContainer, ClipNumberBlockContainer, ClipNumberContainer } from './styles';

const rawData = [
    {
        id: '1',
        user_name: 'singh',
        data: 'Test 1'
    },
    {
        id: '3',
        user_name: 'singh',
        data: 'Test scsohdoqiawjodlk1'
    },
    {
        id: '5',
        user_name: 'singh',
        data: 'Tesweufowincoiwneoinwocneoicwnet 1'
    },
    {
        id: '10',
        user_name: 'singh',
        data: 'Teswe2 rfdqa'
    },
    {
        id: '17',
        user_name: 'singh',
        data: 'Q1'
    },
    {
        id: '18',
        user_name: 'singh',
        data: 'Tes vnfidohishdoihot 1'
    },
    {
        id: '32',
        user_name: 'singh',
        data: ' scsohdoqiawjodlk1'
    },
    {
        id: '51',
        user_name: 'singh',
        data: 'wnib hio 1'
    },
    {
        id: '102',
        user_name: 'singh',
        data: ' asw rfdqa'
    },
    {
        id: '107',
        user_name: 'singh',
        data: 'dj1'
    }
];

const ClipNumberBlock = ({ title, id, setClipNumber }) => {
    const handleClipNumberClick = () => {
        setClipNumber(title - 1);
        console.log(title - 1);
    };

    return (
        <ClipNumberBlockContainer onClick={handleClipNumberClick}>
            {
                title
            }
        </ClipNumberBlockContainer>
    );
};

const ClipData = ({ data = rawData }) => {
    const [clipNumber, setClipNumber] = useState(0);
    const [clipData, setClipData] = useState(data ? data[clipNumber]?.data : '');

    const handleClipDataInputChange = e => {
        setClipData(e.target.value);
    };

    useEffect(() => {
        setClipData(data[clipNumber]?.data);
    }, [clipNumber, data]);

    return (
        <ClipDataContainer>
            <ClipNumberContainer>
                {
                    data.map((clip, idx) => {return (
                        <ClipNumberBlock
                            title={idx+1}
                            id={clip.id}
                            key={clip.id}
                            setClipNumber={setClipNumber}
                        />
                    )})
                }
                <ClipNumberBlockContainer title={'+'}>+</ClipNumberBlockContainer>
            </ClipNumberContainer>
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
                        backgroundColor: 'var(--theme-light-gray)'
                    }}
                    value={clipData}
                    onChange={e => handleClipDataInputChange(e)}
                    defaultValue={clipData}
                />
            </ClipDataInputContainer>
        </ClipDataContainer>
    );
};

export default ClipData;
