import React from 'react'
import Link from 'next/link'

// import SecondLayout from '@app/secondLayout';
import ThirdLayout from '@app/ThirdLayout';

const ResumeForm = ({
  type,
  post,
  setPost,
  submitting,
  handleSubmit
}) => {

  const handlePdfFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("file:", file);
      
      setPost({...post, pdfFile: file})
      // const reader = new FileReader();
      // reader.readAsDataURL(file);
      // reader.onload = function () {
      //   console.log(reader.result);
      //   // const pdfFile = file
      //   setPost({...post, pdfFile: reader.result})
      // };
      // reader.onerror = function (error) {
      //   console.log('Error: ', error);
      // };
    }
  };

  return (
    <ThirdLayout>
      <section className='w-full max-w-full flex-start flex-col'>
        <h1 className='head_text text-left'>
          <span className='blue_gradient'>
              Add Resume
          </span>
        </h1>
        <p className='desc text-left max-w-md'>
          Add your resume now
          {/* {type} and share amazing Title with the world
          and let your imagination run wild with any AI-powered platform. */}
        </p>

        <form
          onSubmit={handleSubmit}
          className='mt-10 w-full max-w-2xl flex
          flex-col gap-7 glassmorphism'
        >
          <label >
            <span className='font-satoshi font-semibold text-base text-gray-700'>Your Resume Title</span>
            <textarea
              value={post.title}
              onChange={(e) => setPost({... post,
              title: e.target.value })}
              placeholder='Write your title here...'
              required
              className='form_textarea'
            />
          </label>

          <label>
            <span className='font-satoshi font-semibold text-base text-gray-700'>
              Upload PDF Resume
            </span>
            <input
              type='file'
              accept='.pdf'
              onChange={handlePdfFileChange}
              // onChange={(e) => }
              required
              className='form_input'
            />
          </label>

          {/* <label >
            <span className='font-satoshi font-semibold text-base text-gray-700'>
              Tag {' '}(#product, #webdevelopment, #idea)</span>

            <input
              value={post.tag}
              onChange={(e) => setPost({... post,
              tag: e.target.value })}
              placeholder='#tag'
              required
              className='form_input'
            />
          </label> */}

          <div className='flex-end mx-3 mb-5 gap-4'>
                <Link href='dashboard' className='text-gray-500 text-sm'>
                  Cancel
                </Link>

                <button
                  type='submit'
                  disabled={submitting}
                  className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'
                >
                  {submitting ? `${type}...` : type}
                </button>
          </div>
        </form>
      </section>
    </ThirdLayout>
  )
}

export default ResumeForm