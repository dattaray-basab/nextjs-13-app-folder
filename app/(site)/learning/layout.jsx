
import LHS from './lhs'

export const revalidate = 0


const Page = async ({ children }) => {
  return (
    <section className='flex'>
      <aside className='w-1/4'>
        <LHS />
      </aside>
      <main>{children}</main>
    </section>
  )
}

export default Page
