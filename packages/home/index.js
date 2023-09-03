import Page from './Page';

function Home() {
	const array = ['page1', 'page2', 'page3', 'page4', 'page5'];

	return (
		<div>
			{array.map((item) => (
				<Page key={item} className={item} />
			))}
		</div>
	);
}

export default Home;
