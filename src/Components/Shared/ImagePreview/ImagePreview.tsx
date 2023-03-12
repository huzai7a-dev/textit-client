import { Box, Button, Paper, Typography } from '@mui/material';

import './imagePreview.css';

import {FiTrash,FiUploadCloud} from 'react-icons/fi';

interface propsType {
    imageFile: File,
    deletePreview?: () => void,
    uploadImage?:()=> void
}

const ImagePreview = ({ imageFile, deletePreview,uploadImage }: propsType) => {
    const imageUrl = URL.createObjectURL(imageFile);
    return (
        <Paper className='preview_container'>
            <Box display='flex' alignItems='center'>   
                <img className='prview_img' src={imageUrl} />
                <Typography style={{ flex: 1,overflow:'hidden',marginRight:'.5rem' }}>{imageFile.name}</Typography>
                <Box display='flex' gap={1}>
                    <Button
                        variant='outlined'
                        style={{ padding: "1rem" }}
                        onClick={deletePreview}
                    >
                        <FiTrash/>
                    </Button>
                    <Button
                        variant='outlined'
                        style={{ padding: ".7rem" }}
                        onClick={deletePreview}
                    >
                        <FiUploadCloud/>
                    </Button>
                </Box>
            </Box>
        </Paper>
    )
}

export default ImagePreview