"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import ResumeForm from "@components/ResumeForm";

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ title: "", pdfFile: "" });

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("post:", post);
      
      const formData = new FormData(); // Create a FormData object
      formData.append("title", post.title);
      formData.append("userId", session?.user.id);
      
      // Append the PDF file data as a Blob
      const blobPDF = new Blob([post.pdfFile], { type: post.pdfFile.type });
      formData.append('pdfData', blobPDF, post.pdfFile.name);

      // formData.append("pdfData", post.pdfFile);
      const response = await fetch("/api/resume/upload", {
        method: "POST",
        headers: {
          // Set the custom header for the PDF content type
          "pdf-file-content-type": "application/pdf",
        },
        body: formData, // Use FormData for file upload
      });

      console.log("response:", response);

      // const response = await fetch("/api/resume/new", {
      //   method: "POST",
      //   body: JSON.stringify({
      //     title: post.title,
      //     userId: session?.user.id,
      //   }),
      // });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ResumeForm
      type='Add'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;