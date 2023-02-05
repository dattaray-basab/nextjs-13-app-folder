import Link from 'next/link'

const LHS = async ({}) => {
  return (
    <section className='fixed h-full w-1/4 bg-stone-800'>
      <div className='center py-4'>
        <h2 className='mb-4 border-b border-stone-500 pb-3 text-xl font-medium text-white'>
          <p>Fullstack Web Dev Learning Center</p>
          <p>by Atef</p>
        </h2>
        <ul className='flex list-inside list-none flex-col gap-1 text-sm text-white'>
          <li>
            <Link href={'/learning/html'}>HTML</Link>
          </li>
          <li>
            <Link href={'/learning/stylesheets'}>Style Sheets</Link>
          </li>
          <li>
            <Link href={'/learning/js'}>Java Script</Link>
          </li>
          <li>
            <Link href={'/learning/ts'}>Type Script</Link>
          </li>
          <li>
            <Link href={'/learning/react'}>React</Link>
          </li>
          <li>
            <Link href={'/learning/nextjs'}>Next JS</Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default LHS
