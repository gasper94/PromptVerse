// GET (read)
import Resume from "@models/resume";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const resume = await Resume.findById(params.id).populate("creator");

    if (!resume) return new Response("Resume not found", { status: 404 });

    return new Response(JSON.stringify(resume), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch resume", { status: 500 });
  }
};

// // PATCH (Update)
// export const PATCH = async (request, { params }) => {
//   const { prompt, tag } = await request.json();

//   try {
//     await connectToDB();

//     const existingPrompt = await Prompt.findById(params.id);

//     if (!existingPrompt)
//       return new response("Prompt not found", { status: 404 });

//     existingPrompt.prompt = prompt;
//     existingPrompt.tag = tag;

//     await existingPrompt.save();

//     return new Response(JSON.stringify(existingPrompt), { status: 200 });
//   } catch (error) {
//     return new Response("Failed to update prompt", { status: 500 });
//   }
// };

// // DELETE (delete)
// export const DELETE = async (request, { params }) => {
//   try {
//     await connectToDB();

//     await Prompt.findByIdAndRemove(params.id);

//     return new Response("Prompt deleted successfully", { status: 200 });
//   } catch (error) {
//     return new Response("Failed to delete prompt", {
//       status: 500,
//     });
//   }
// };
