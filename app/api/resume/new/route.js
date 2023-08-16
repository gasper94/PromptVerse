import { connectToDB } from "@utils/database";
import Resume from "@models/resume";

export const POST = async (req) => {
  const { userId, title, pdfData, contentType, fileName } = await req.json();

  try {
    await connectToDB();
    
    const newResume = new Resume({
      creator: userId,
      title,
      pdf: {
        data: Buffer.from(pdfData, 'base64'), // Convert base64 PDF data to Buffer
        contentType,
        fileName,
      },
    });

    await newResume.save();

    return new Response(JSON.stringify(newResume), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new resume", { status: 500 });
  }
};
