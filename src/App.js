import Profile from './Profile';
import RomyImage from './Romy.jpg';

function App() {
  const profileData = {
    image: RomyImage,
    name: 'John Doe',
    job: 'Software Engineer',
    past_job: 'Web Developer'
  };

  return (
    
    <div className="center">
      <Profile 
        image={profileData.image} 
        name={profileData.name} 
        job={profileData.job} 
        past_job={profileData.past_job}
      />
    </div>  
    
  );
}

export default App;    
/* <HelloWorld anogustomosabihin="Only the Strong Survive"></HelloWorld>
    
    
    <Location name="Beybee_Marcus" city="Konoha" village="Hidden Leaf"></Location>
     */
    

