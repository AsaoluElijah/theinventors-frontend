import AboutUs from '../components/AboutUs';
import Hero from '../components/Hero';
// import JoinUs from '../components/JoinUs';
import Leads from '../components/Leads';
import Events from '../components/Events';
import Members from '../components/Members';
import Mission from '../components/Mission';
import Partners from '../components/Partners';
import Vision from '../components/Vision';

const Home = () => {
	return (
		<div>
			<Hero />
			<AboutUs />
			<Mission />
			<Vision />
			<Events />
			<Leads />
			<Members />
			{/* <JoinUs /> */}
			<Partners />
		</div>
	);
};

export default Home;
