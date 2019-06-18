import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import Subtitle1 from '../styled/Subtitle/Subtitle1';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import TextForButtons from '../styled/TextForButtons';

const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
    justifyContent: 'center'
};
  
const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    marginBottom: 8,
    marginRight: 8,
    width: 150,
    height: 150,
    padding: 4,
    boxSizing: 'border-box'
};
  
const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
};
  
const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
};

const DropZoneWithPreview = ({ files, setFiles, removeImages }) => {
    const {getRootProps, getInputProps} = useDropzone({
        accept: 'image/*',
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                        preview: URL.createObjectURL(file)
                    })
                )
            );
        }
    });
  
    const thumbs = files.map(file => (
        <div style={thumb} key={file.name}>
            <div style={thumbInner}>
                <img
                src={file.preview}
                style={img}
                />
            </div>
        </div>
    ));

    useEffect(() => () => {
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <>
            <section className='container-dropzone'>
                {files.length <= 0 ?
                    <div {...getRootProps({className: 'dropzone'})} className='dropzone-styled mt-1'>
                        <input {...getInputProps()} />
                        <Subtitle1 className='text-center'>Arrastra aqui la imagen de tu mascota, o da click para seleccionarla</Subtitle1>
                    </div>
                    :
                    <div className='d-flex justify-content-center'>
                        <Row>
                            <Col xs='12'>
                                <aside style={thumbsContainer}>
                                    {thumbs}
                                </aside>
                            </Col>
                            <Col xs='12' className='d-flex justify-content-center'>
                                <Button className='outlined-button' variant='none' onClick={removeImages}>
                                    <TextForButtons>Quitar imagen</TextForButtons>
                                </Button>
                            </Col>
                        </Row>
                    </div>
                }
            </section>
            <style jsx>{`
                    .dropzone-styled {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        align-text: center;
                        padding: 50px;
                        border-width: 2px;
                        border-radius: 2px;
                        border-color: #AAAAAA;
                        border-style: dashed;
                        background-color: #E2E2E2;
                        color: #7C7C7C;
                        outline: none;
                    }
                    .container-dropzone {
                        display: flex;
                        flex-direction: column;
                    }
                `}</style>
        </>
    );
}


export default DropZoneWithPreview;