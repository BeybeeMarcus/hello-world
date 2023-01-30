import TechStack from "./TechStack";


function Profile(props) {
    console.log(props)
    return(
        <>
            <p>
                <img src={props.image} 
                    title="Romy Diaz" 
                    alt="Profile image" 
                    height={300}
                    width={200}>
                </img>

                <br/>
                My name is <r id="nName">{props.name}</r> 
                and I am a 
                <r id="job1">{props.job1}</r> 
                <r id="job2">{props.job2}</r> 
                <r id="job3">{props.job3}</r> 
                <r id="job4">{props.job4}</r> 
                <r id="job5">{props.job5}</r> 
                <r id="job6">{props.job6}</r> 
                <r id="job7">{props.job7}</r> 
                <r id="job8">{props.job8}</r> 
                <r id="job9" className="flip-vertical-right">{props.job9}</r> 
                
                and I formerly 
                work as {props.past_job}. <br/> 
                at the moment I am currently
                studying these following tech stacks.
                <br/>
                <br/>
                <br/>
                <TechStack></TechStack>
            </p>
        </>


    )


}
export default Profile;