import Link from 'next/link'

{
  return (
    <section className='fixed h-full w-1/4 bg-stone-800'>
      <div className='center py-4'>
        <h2 className='mb-4 border-b border-stone-500 pb-3 text-xl font-medium text-white'>
          Users
        </h2>
        <ul className='flex list-inside list-none flex-col gap-1 text-sm text-white'>
          <li>
            <Link href={html}>HTML</Link>
          </li>

        </ul>
      </div>
    </section>
  )
}

export default Users
