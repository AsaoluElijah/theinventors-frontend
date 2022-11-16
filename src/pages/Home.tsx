import AboutUs from '../components/AboutUs';
import Hero from '../components/Hero';
import Leads from '../components/Leads';
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
			<Leads />
			<Members />
			<Partners />
		</div>
	);
};

export default Home;
