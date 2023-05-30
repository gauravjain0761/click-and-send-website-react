import React from 'react';
import { Page, Text, View, Document, pdf, StyleSheet, PDFViewer, Image } from '@react-pdf/renderer';
import { Button } from '@mui/material';
import PdfDocument from './invoicePDF/Invoice';

const generatePdfDocument = async (data = {}) => {
    const blob = await pdf((
        <PdfDocument {...data} />
    )).toBlob()
    let reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = async function () {
        const base64data = reader.result;
        console.log(base64data)
    }
};

const Demo = () => {
    return (
        <>
            <Button onClick={generatePdfDocument} sx={{ mt: '100px' }}>Click</Button>
        </>
    )
}

export default Demo