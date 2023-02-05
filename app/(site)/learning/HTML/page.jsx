import Link from 'next/link'

const Page = () => {
  return (
    <section>
      <div className='px-4 py-4 sm:px-6 lg:px-8'>
        <h1 className='mb-3 text-2xl font-semibold'>HTML</h1>
        <div>
          <h1>Class View</h1>
          <br></br>

          <p>
            <strong>First Lesson</strong> Segment: What is HTML and how to use
            it Make Video On This
          </p>

          <br></br>

          <p>
            The <strong>Second Segment </strong>
            <Link href={'https://www.youtube.com/watch?v=bWPMSSsVdPk'}>
            Video
            </Link>{' '}
            watch till 3:30.
          </p>
          <br></br>

          <p>
            Quiz: What do tags do? What is the code for header tag? Body tag?
            What are the differences between the two and what goes where?
          </p>
          <br></br>

          <p>
            <strong>Third Segment: </strong>
            <Link href={'https://www.youtube.com/watch?v=qz0aGYrrlhU'}>
              Video
            </Link>{' '}
            watch from 22:40 till 29:55. Learn to use header, font, bold, and
            color and Inserting images into
          </p>
        </div>
      </div>
    </section>
  )
}

export default Page
