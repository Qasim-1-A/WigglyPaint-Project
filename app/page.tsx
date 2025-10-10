//import { getAllPosts, WPPost } from "../lib/wordpress";
import { getAllPosts } from "../lib/wordpress"



//import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
//import { allBlogs } from 'contentlayer/generated'
//import Main from './Main'
import Toollframe from "../components/Toollframe"
import Image from 'next/image'


export default async function Page() {
  //const sortedPosts = sortPosts(allBlogs)
  //const posts = allCoreContent(sortedPosts)
  const posts = await getAllPosts()

  return <main>
    <Toollframe/>
    <div className='lg:max-w-7xl lg:mx-auto lg:px-8 lg:mt-9'>
      <div className='flex flex-col justify-center items-center'>

<h1 className='text-4xl  font-black'>Wiggly Paint</h1>
<hr className='py-2'/>
<p>Wigglypaint is an exciting animation and doodle drawing website to draw your imagination on board. The paintboard allows full coordination to boost drawing skills and turn aesthetic and fascinating designs into GIFs and other files. 
</p>
<hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700' />

<h2 className='self-start font-extrabold text-2xl'>Animation With WigglyPaint </h2>
<hr className='py-2'/>
<p>
The canvas of Wigglypaint is all yours to draw the designs and structures, whatever you want. Begin by pressing the "Let's Draw button and master the wiggly drawing skills by choosing the attractive colours, background and effect brushes. The eight brushes are provided with distinct sound effects, and the tool lines with the different thicknesses. With these brushes, the vibrant drawing sounds give a beautiful feeling in the creative process of wiggly drawing. 
The interface of the Wigglypaint is simple, giving freedom of art in this creative journey. Change the colour of brushes, sizes, and background to make masterpieces as GIF animations. You can use the erase tools to remove or undo the steps for bringing unique changes in the final drawing. After creating the design in Wigglypaint, export the creative vision and bring imagination into life.
</p>
<hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700' />

<h2 className='self-start font-extrabold text-2xl'>How to Use WigglyPaint</h2>
<hr className='py-2'/>
<p>The main screen of the Wiggly paint tool contains the Decker, File, Edit, Help and Tool Options.
So, draw creative designs with the variety of brush sizes, vibrant colour selection, and simple and gradient effects. The following major control features in Wigglypaint:
<img src="/static/images/wimage1.jpg"

 className="mx-auto rounded-lg"
 alt="" />
</p><hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700' />

<h2 className='self-start font-extrabold text-2xl'>Brush Tools</h2>
<hr className='py-2'/>
<p>The brush tools contain a variety of six brush sets. These are Spray Gun, Pen, Pencil, Marker, Brush, and Crayon in Pink, Yellow and Cyan colours.
</p><hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700' />

<h2 className='self-start font-extrabold text-2xl'>Options Button in WigglyPaint</h2>
<hr />
<p>There are two advanced options buttons in Wigglypaint, i.e Custom Palette & Preset Palette.
</p>
<ol>
<li>
  <h2 className='font-bold text-xl'>1. Custom Palette </h2>
  <hr />
  <p>Customise background and foreground colour by using the custom palette kit. However, the default palette in Wigglypaint includes three basic colour codes of pink, cyan and yellow.
</p>
</li>

<li>
   <h2 className='font-bold text-xl'>2. Preset Palette</h2>
   <hr />
   <p>The Transparency Mask allows your drawing animation with a transparent background. You can use this mask where you want your drawing without any colours in the background.</p>
</li>
<hr className='py-2'/>
<img src="/static/images/wimg2.jpg" alt="" />
</ol><hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700' />

<h2 className='self-start font-extrabold text-2xl'>Export </h2>
<hr />
<p>With the export button, download files into GIF files. This file format saves all drawing details in Wigglypaint with all animation effects and lines</p>
<hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700' />

<h2 className='self-start font-extrabold text-2xl'>Crop </h2>
<hr />
<p>The control of the drawing board is in your hands. You can adjust the canvas size accordingly to the imagination of drawings and structures.
</p>
<hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700' />

<h2 className='self-start font-extrabold text-2xl'>Oops </h2>
<hr />
<p>When you are not satisfied with your art, you can undo the steps with the Oops button. It saves your time and effort.
</p>
<hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700' />

<h2 className='self-start font-extrabold text-2xl'>Final Thoughts</h2>
<hr className=' py-1'/>
<p>So, the wigglypaint is the free tool to open your ways for the never-ending creativity and imagination work on a digital canvas. Export the artwork in GIF animations and share your Wigglypaint with friends. Now start your crazy ideas and light up your free time with colourful wiggle drawings.</p>
<hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded-sm md:my-10 dark:bg-gray-700' />


<h1 className='text-4xl  font-black'>FAQs</h1>
<hr className='w-64 h-1 my-8 bg-gray-200 border-0 rounded-sm dark:bg-gray-700' />
<ol>
<li>
  <h2 className='font-bold text-xl'>Is Wigglypaint free to use?</h2>
  <hr className='py-3 border-0'/>
  <p>Yes, Wigglypaint is free to use without any paid tools or subscriptions. Draw the wiggly creations without any limits and export for free.
</p>
</li><hr className='py-3 border-0'/>

<li>
   <h2 className='font-bold text-xl'>Can I save my drawings from Wigglypaint?</h2>
   <hr className='py-3 border-0'/>
   <p>Yes, you can save your drawings by using the File section in the Top bar of the Wigglypaint tool. Click on the ‘Save as’ option and name the file with the .deck or .html suffix, and your file is saved. 
</p>
</li><hr className='py-3 border-0'/>

<li>
   <h2 className='font-bold text-xl'>Does it work on mobile devices?</h2>
   <hr className='py-3 border-0'/>
   <p>Wigglypaint works perfectly on mobile devices. As the touch Input is designed for optimised support for mobile interface. You can create the best designs on mobile screens.</p>
</li><hr className='py-3 border-0'/>

<li>
   <h2 className='font-bold text-xl'>Is it safe for kids?</h2>
   <hr className='py-3 border-0'/>
   <p>Wigglypaint is a browser-based drawing tool with no complicated features. With the help of Wigglypaint, Kids can play, draw, and explore creativity in a fun and interactive way. So, it is safe for kids.</p>
</li>

</ol>
</div>
    </div>
  </main>
}
