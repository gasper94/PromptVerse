'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { signOut, useSession, getProviders } from 'next-auth/react'
// import { EmbedPDF } from "@simplepdf/react-embed-pdf";
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//   page: { backgroundColor: 'tomato' },
//   section: { color: 'white', textAlign: 'center', margin: 30 }
// });
import Table from "./table";

const ResumeFeed = () => {
  const { data: session } = useSession();
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/resume');
      const data = await response.json();
      setResumes(data);
    }

    fetchPosts();
  },[])

  if(resumes.length < 1) return <div>No resumes</div>

  return (
    <div style={{display: 'flex', flexDirection: 'row', gap: '12px'}}>
      
      {session?.user ? (
        <>
        <Table resumes={resumes}/>
          {/* {resumes.map((resume, index) => (
            // <div key={index} >
            //   <div className='blue_gradient'>{`${resume.title} `}</div>
            //   {resume.resume_url ?
            //     // <div onClick={() => window.open(resume.resume_url, "_blank")}>{`URL: ${resume.resume_url}`}</div>
            //     // <EmbedPDF>
            //     //   <a href={resume.resume_url}>
            //     //     Opens dummy.pdf
            //     //   </a>
            //     // </EmbedPDF>
            //     // <PdfPreview  pdfUrl={resume.resume_url}/>
            //     <iframe
            //       src={`https://docs.google.com/gview?url=${encodeURIComponent(resume.resume_url)}&embedded=true&rm=minimal`}
            //       style={{ width: '100%', height: '425px', border: 'none' }}
            //       frameBorder="0"
            //     ></iframe>
            //   :null}
            // </div>
          ))} */}
        </>
      ):null}
    </div>
  )
}

export default ResumeFeed