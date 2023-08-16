import { useState, useEffect } from 'react';
import axios from 'axios';
import pdf2pic from 'pdf2pic';
import sharp from 'sharp';

const PdfPreview = ({ pdfUrl }) => {
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    const fetchAndProcessPdf = async () => {
      try {
        // Fetch the PDF file from S3 bucket
        const response = await axios.get(pdfUrl, { responseType: 'arraybuffer' });
        const pdfBuffer = response.data;

        // Convert PDF to image using pdf2pic
        const pdf2picInstance = new pdf2pic({
          density: 100, // Set image density (DPI)
          savePath: './temp', // Save images in a temporary directory
          format: 'png', // Output image format
        });

        const { pagePath } = await pdf2picInstance.convertBuffer(pdfBuffer);

        // Load the image using sharp and resize
        const imageBuffer = await sharp(`${pagePath}-1.png`)
          .resize(100, 100)
          .toBuffer();

        setPreviewImage(`data:image/png;base64,${imageBuffer.toString('base64')}`);
      } catch (error) {
        console.error('Error fetching or processing PDF:', error);
      }
    };

    fetchAndProcessPdf();
  }, [pdfUrl]);

  return (
    <div>
      {previewImage && <img src={previewImage} alt="PDF Preview" />}
    </div>
  );
};

export default PdfPreview;
