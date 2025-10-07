
import { genPageMetadata } from 'app/seo'
export const metadata = genPageMetadata({ title: 'Privacy Policy' })

export default function privacypolicy() {
    return (
        <div className=" flex flex-col justify-start items-start" >
            <h1 className='text-4xl  font-black mx-auto '>Privacy Policy </h1>

            <hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700' />

            <p>Last Updated: [sun , 05 , 2025]
At Wigglypaint, we respect your privacy and are committed to protecting it. This Privacy Policy explains what information we collect, how we use it, and your rights when using our website.
</p>

            <hr className='py-4' />
            <h1 className='text-3xl  font-black'>1. Information We Do Not Collect</h1>
            <hr className='py-2' />
            <p>
                <ol>
                    <li>We do not require you to create an account.</li>
                    <li>We do not collect personal information such as your name, email, phone number, or address.</li>
                    <li>We do not store or monitor the drawings you create. Wigglypaint is designed to be safe for kids, students, and casual users.</li>
                </ol>
            </p>

            
            <hr className='py-4' />
            <h1 className='text-3xl  font-black'>2. Information We May Collect Automatically</h1>
            <hr className='py-2' />
            <p> When you visit our website, some non-personal data may be collected automatically to improve performance, such as:
                <ol>
                    <li>Browser type and version</li>
                    <li>Device type (desktop, mobile, tablet)</li>
                    <li>General location (country/city, not precise address)</li>
                    <li>Cookies or similar technologies (for website functionality and analytics)</li>
                </ol>
            </p>



            <hr className='py-4' />
            <h1 className='text-3xl  font-black'>3. Use of Information</h1>
            <hr className='py-2' />
            <p>Any non-personal information collected may be used for:</p>
             <ol>
                    <li>Improving website performance and user experience</li>
                    <li>Monitoring traffic and usage patterns</li>
                    <li>Ensuring website security and stability</li>
            </ol>



            <hr className='py-4' />
            <h1 className='text-3xl  font-black'>4. Cookies</h1>
            <hr className='py-2' />
            <p>Wigglypaint may use cookies to:
                You can turn off cookies in your browser settings if you prefer.
            </p>
            <ol>
                <li>Remember user preferences (like colours or settings)</li>
                <li>Improve website functionality</li>
                <li>Analyse how users interact with the site</li>
            </ol>



            <hr className='py-4' />
            <h1 className='text-3xl  font-black'>5. Children’s Privacy</h1>
            <hr className='py-2' />
            <p>Wigglypaint is safe for kids and does not collect personal data. However, parents and guardians are encouraged to supervise children while using online tools.</p>



            <hr className='py-4' />
            <h1 className='text-3xl  font-black'>6. Third-Party Services</h1>
            <hr className='py-2' />
            <p>We may use trusted third-party services (such as analytics or hosting providers) to operate our site. These services only have access to limited technical data and are obligated to protect your privacy.</p>


             <hr className='py-4' />
            <h1 className='text-3xl  font-black'>7. Your Privacy Rights</h1>
            <hr className='py-2' />
            <p>You have the right to:</p>
            <ol>
                <li>Refuse cookies by adjusting your browser settings.</li>
                <li>Contact us if you have questions about how your data is handled.</li>
            </ol>


            <hr className='py-4' />
            <h1 className='text-3xl  font-black'>8. Changes to This Policy</h1>
            <hr className='py-2' />
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date</p>





             <hr className='py-4' />
             <h1 className='text-3xl  font-black'>9. Contact Us</h1>
            <p>If you have any questions or concerns about this Privacy Policy, you can contact us at:</p>
            <h2><a href="mailto:">Email: wigglypaint@gmail.com</a></h2>
        </div>
    )
}