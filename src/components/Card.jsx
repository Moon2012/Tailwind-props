import React from 'react'

function Card({username = " HC ", post = "Not assigned yet"}) {
    //console.log(props);
  return (
    <div>
       <figure className="md:flex bg-purple-500 rounded-xl p-8 md:p-0 dark:bg-purple-300">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://t4.ftcdn.net/jpg/01/88/03/15/360_F_188031593_atBR8ETgySqpXRHTdmOoDCLhONEx3xhT.jpg" alt="" width="384" height="512" />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
            <p className="text-lg font-medium">
                Hello there!
            </p>
            </blockquote>
            <figcaption className="font-medium">
            <div className="text-sky-100 dark:text-sky-100">
                {username }
            </div>
            <div className="text-slate-700 dark:text-slate-500">
                {post}
            </div>
            </figcaption>
        </div>
        </figure> 
    </div>
  )
}

export default Card