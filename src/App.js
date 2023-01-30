import Profile from './Profile';
import RomyImage from './Romy.jpg';

function App() {
  const profileData = {
    image: RomyImage,
    name: 'Beybee Marcus ',
    job1: ' S',
    job2: 'o',
    job3: 'f',
    job4: 't',
    job5: 'w',
    job6: 'a',
    job7: 'r',
    job8: 'e ',
    job9: 'Engineer ',
    past_job: 'Web Developer'
  };

  return (
    
    <div className="center">
      <Profile 
        image={profileData.image} 
        name={profileData.name} 
        job1={profileData.job1} 
        job2={profileData.job2} 
        job3={profileData.job3} 
        job4={profileData.job4} 
        job5={profileData.job5} 
        job6={profileData.job6} 
        job7={profileData.job7} 
        job8={profileData.job8} 
        job9={profileData.job9} 
        past_job={profileData.past_job}
      />
    </div>  
    
  );
}

export default App;    
/* <HelloWorld anogustomosabihin="Only the Strong Survive"></HelloWorld>
    
    
    <Location name="Beybee_Marcus" city="Konoha" village="Hidden Leaf"></Location>
     */
    

