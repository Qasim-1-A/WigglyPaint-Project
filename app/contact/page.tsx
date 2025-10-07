
import { genPageMetadata } from 'app/seo'
export const metadata = genPageMetadata({ title: 'Contact Us' })

export default function contact() {
    return (
        <div className=" flex flex-col justify-center items-center" >
            <h1 className='text-4xl  font-black'>Contact Us</h1>

            <hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700' />

            <p>We’d love to hear from you! Whether you have a question, suggestion, or feedback about our Wigglypaint guides and resources, feel free to send your thoughts to us.</p>

            <hr className='py-4' />

            <h1 className='text-3xl  font-black'>How to Reach Us</h1>

            <hr className='py-2' />

            <h2><a href="mailto:">Email: wigglypaint@gmail.com</a></h2>

            <p>Suggestions & Feedback: Use the email to send your ideas directly to us. We do our best to reply within 24–48 hours.</p>
        </div>
    )
}