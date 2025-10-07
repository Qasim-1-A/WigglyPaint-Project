
import { genPageMetadata } from 'app/seo'
export const metadata = genPageMetadata({ title: 'Terms Of Services' })

export default function Terms() {
    return (
        <div className=" flex flex-col justify-start items-start" >
            <h1 className='text-4xl  font-black mx-auto'>Terms of Service – Wigglypaint</h1>

            <hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700' />

            <p>Last Updated: [sun , 05 , 2025]
Welcome to Wigglypaint! By using our website and tools, you agree to the following terms. Please read them carefully.</p>

            <hr className='py-4' />
            <h1 className='text-3xl  font-black'>1. Free Use of Wigglypaint</h1>
            <hr className='py-2' />
            <p>
               Wigglypaint is a free, browser-based drawing tool. You can use it without creating an account, and you are welcome to draw, create, and save your artwork for personal or educational purposes.
            </p>

            
            <hr className='py-4' />
            <h1 className='text-3xl  font-black'>2. Ownership of Artwork</h1>
            <hr className='py-2' />
                <ul>
                    <li>Any artwork you create using Wigglypaint belongs to you.</li>
                    <li>Wigglypaint does not claim ownership of your drawings.</li>
                    <li>You are responsible for saving your work to your own device if you wish to keep it.</li>
                </ul>



            <hr className='py-4' />
            <h1 className='text-3xl  font-black'>3. Acceptable Use</h1>
            <hr className='py-2' />
            <p>When using Wigglypaint, you agree not to:</p>
            <ul>
                    <li>Use the tool for harmful, offensive, or illegal activities.</li>
                    <li>Attempt to damage, disrupt, or misuse the website</li>
                    <li>Upload or share inappropriate content created with the tool.</li>
                    <li>Wigglypaint is designed to be fun, safe, and family-friendly</li>
            </ul>



            <hr className='py-4' />
            <h1 className='text-3xl  font-black'>4. Children’s Use</h1>
            <hr className='py-2' />
            <p>Wigglypaint is safe for kids. However, children should use the tool under parental or teacher supervision to ensure a positive and safe online experience.
            </p>



            <hr className='py-4' />
            <h1 className='text-3xl  font-black'>5. No Guarantees</h1>
            <hr className='py-2' />
            <p>We strive to keep Wigglypaint online and functional at all times, but we do not guarantee that the site will always be available, error-free, or compatible with every device.</p>



            <hr className='py-4' />
            <h1 className='text-3xl  font-black'>6. Third-Party Services</h1>
            <hr className='py-2' />
            <p>Wigglypaint may use third-party services for hosting, analytics, or performance. We are not responsible for issues or content provided by third-party websites linked from Wigglypaint.</p>


             <hr className='py-4' />
            <h1 className='text-3xl  font-black'>7. Limitation of Liability</h1>
            <hr className='py-2' />
            <p>Wigglypaint is provided as-is, free of charge. We are not responsible for any data loss, technical issues, or misuse of the tool by users.
            </p>


            <hr className='py-4' />
            <h1 className='text-3xl  font-black'>8. Changes to These Terms</h1>
            <hr className='py-2' />
            <p>We may update these Terms of Service from time to time. Updates will be posted on this page with the revised date
            </p>


            <hr className='py-4' />
             <h1 className='text-3xl  font-black'>9. Contact Us</h1>
            <p>If you have any questions or concerns about these terms, you can contact us at:</p>
            <h2><a href="mailto:">Email: wigglypaint@gmail.com</a></h2>
        </div>
    )
}