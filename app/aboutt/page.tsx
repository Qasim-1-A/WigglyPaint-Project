
import { genPageMetadata } from 'app/seo'
export const metadata = genPageMetadata({ title: 'About Us' })

export default function aboutt() {
    return (
        <div className=" flex flex-col justify-center items-center" >
            <h1 className='text-4xl  font-black'>About Us</h1>

            <hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700' />

            <p>Welcome to our Wigglypaint fan site! 
We created this website to help users, parents, teachers, and kids discover the fun and creativity of Wigglypaint. This free online drawing tool adds life to doodles with its wiggly, animated brushes. Our goal is to provide guides, tips, FAQs, and resources so anyone can enjoy this playful art tool without confusion.
Whether you’re a beginner exploring digital art, a parent looking for safe creative tools for kids, or just someone who enjoys fun drawing apps, our site is here to guide you.
</p>

            <hr className='py-4' />

            <h1 className='text-3xl  font-black'>Important Note</h1>

            <hr className='py-2' />

            <h1>This is an unofficial fan site and is not affiliated with Wigglypaint. All rights belong to their respective owners.</h1>

            <p>We respect the original creators of Wigglypaint and aim only to provide helpful, community-driven resources for fans and new users.</p>

            <h1>Get in Touch</h1>
            <p>If you have questions, suggestions, or feedback, feel free to reach out at:
               <a href="mailto:">wigglypaint@gmail.com</a> 
            </p>
        </div>
    )
}