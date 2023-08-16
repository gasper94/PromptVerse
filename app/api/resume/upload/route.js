import { connectToDB } from "@utils/database";
import Resume from "@models/resume";

// s3 bucket storage
import {generateUploadURL} from './s3';

export const POST = async (req) => {
//   console.log("req:", req.json());
//   const { title, userId, pdfData} = await req.json();

  try {
    await connectToDB();

    console.log("Hello there")
    const formData = await req.formData(); // Parse the FormData object from the request

    // Extract data from the FormData object
    const userId = formData.get("userId");
    const title = formData.get("title");
    const pdfData = formData.get("pdfData");

    console.log("Information:", { userId, title, pdfData });

   
    
    console.log("FORM DATA", formData);
    // console.log("FORM DATA2", formDataToSend);
    const url = await generateUploadURL();
    
    console.log("S3 URL:", url)

    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
        "pdf-file-content-type": "application/pdf"
      },
      body: formData
    })

    // Get accessible link
    const fileUrl = url.split('?')[0];
    console.log("check me out:", fileUrl);

    // Store in mongodb
     const newResume = new Resume({
      creator: userId,
      title,
      resume_url: fileUrl,
    });

    await newResume.save();



    return new Response(JSON.stringify({msg: url}), { status: 201 });
  } catch (error) {
    return new Response(`Failed to create a new resume - ${error}`, { status: 500 });
  }
};
