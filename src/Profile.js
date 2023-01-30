import TechStack from "./TechStack";


function Profile(props) {
    console.log(props)
    return(
        <>
            <p>
                <img src={props.image} title="John Doe" alt="Profile image" height={500}
                width={400}></img><br/>
                My Name is {props.name} and I am a {props.job} and I formerly 
                work as {props.past_job}. <br/> at the moment I am currently
                studying these following tech stacks. <br/>
                <TechStack></TechStack>
            </p>
        </>


    )


}
export default Profile;