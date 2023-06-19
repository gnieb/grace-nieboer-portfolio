import tongue from './tongue.png'

function About () {

    return (
        <div className="mx-8 relative mb-8"> 
            <p className="text-7xl font-display sm:p-10 my-7 sm:my-6">HI THERE, AND WELCOME! </p>
            <p className = "text-3xl text-justify sm:w-3/4 p-3 ">My name is Grace Nieboer. I am a full stack software engineer with a love for the creative elements of front-end design, but I recently fell in love with Python on the back-end along with REST-ful API architecture.</p>
            <img className="h-96" src={tongue} />
            <div className="w-3/4 sm:w-1/2 m-5 absolute right-0 mb-5 pb-10 mr-20">
                <p className="text-3xl font-bold">BACKGROUND</p>
                <p className="text-xl sm:text-4xl text-justify">I have a Master's degree in Public Administration, with a professional background in Human Resources. I've spent the past few years of my career working in employee relations roles within HR, partnering with multi-lingual, cross-functional teams to work through employee issues and resolve conflicts. 
                </p>

                <p className="text-3xl font-bold mt-3">PERSON-FOCUSED</p>
                <p className="text-xl sm:text-4xl text-justify">My unique background in complex problem solving in a very person-focused industry and roles allows me better collaborate and communicate with diverse teams. We work in tech, but we work WITH humans, FOR humans.</p>
             </div>
        </div>
    )
}

export default About;