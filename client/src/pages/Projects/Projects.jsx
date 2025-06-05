import ItemTable from '../../components/ItemTable/ItemTable';

const sampleProjects = [
	{
		id: 1,
		thumbnail: 'https://th.bing.com/th/id/R.875e868941ea818debe3dd074574ca0d?rik=hzJcaaTFi%2fPg%2fg&pid=ImgRaw&r=0',
		projectName: 'E-commerce Website',
		projectDes:
			'A modern e-commerce platform built with React and Node.js featuring user authentication, payment integration, and admin dashboard.',
		numberStar: 42,
		numberView: 1250,
		startDate: '01/2024',
		finishDate: '03/2024',
		technologies: ['react', 'nodejs', 'mongodb'],
	},
	{
		id: 2,
		thumbnail: 'https://tse3.mm.bing.net/th/id/OIP.cGnPlLdjL7kwWbi7aqctwAHaFj?r=0&rs=1&pid=ImgDetMain',
		projectName: 'Task Management App',
		projectDes:
			'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
		numberStar: 28,
		numberView: 890,
		startDate: '02/2024',
		finishDate: '04/2024',
		technologies: ['vue', 'firebase', 'typescript'],
	},
	{
		id: 1,
		thumbnail: 'https://th.bing.com/th/id/R.875e868941ea818debe3dd074574ca0d?rik=hzJcaaTFi%2fPg%2fg&pid=ImgRaw&r=0',
		projectName: 'E-commerce Website',
		projectDes:
			'A modern e-commerce platform built with React and Node.js featuring user authentication, payment integration, and admin dashboard.',
		numberStar: 42,
		numberView: 1250,
		startDate: '01/2024',
		finishDate: '03/2024',
		technologies: ['react', 'nodejs', 'mongodb'],
	},
	{
		id: 2,
		thumbnail: 'https://tse3.mm.bing.net/th/id/OIP.cGnPlLdjL7kwWbi7aqctwAHaFj?r=0&rs=1&pid=ImgDetMain',
		projectName: 'Task Management App',
		projectDes:
			'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
		numberStar: 28,
		numberView: 890,
		startDate: '02/2024',
		finishDate: '04/2024',
		technologies: ['vue', 'firebase', 'typescript'],
	},
	{
		id: 1,
		thumbnail: 'https://th.bing.com/th/id/R.875e868941ea818debe3dd074574ca0d?rik=hzJcaaTFi%2fPg%2fg&pid=ImgRaw&r=0',
		projectName: 'E-commerce Website',
		projectDes:
			'A modern e-commerce platform built with React and Node.js featuring user authentication, payment integration, and admin dashboard.',
		numberStar: 42,
		numberView: 1250,
		startDate: '01/2024',
		finishDate: '03/2024',
		technologies: ['react', 'nodejs', 'mongodb'],
	},
	{
		id: 2,
		thumbnail: 'https://tse3.mm.bing.net/th/id/OIP.cGnPlLdjL7kwWbi7aqctwAHaFj?r=0&rs=1&pid=ImgDetMain',
		projectName: 'Task Management App',
		projectDes:
			'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
		numberStar: 28,
		numberView: 890,
		startDate: '02/2024',
		finishDate: '04/2024',
		technologies: ['vue', 'firebase', 'typescript'],
	},
	{
		id: 1,
		thumbnail: 'https://th.bing.com/th/id/R.875e868941ea818debe3dd074574ca0d?rik=hzJcaaTFi%2fPg%2fg&pid=ImgRaw&r=0',
		projectName: 'E-commerce Website',
		projectDes:
			'A modern e-commerce platform built with React and Node.js featuring user authentication, payment integration, and admin dashboard.',
		numberStar: 42,
		numberView: 1250,
		startDate: '01/2024',
		finishDate: '03/2024',
		technologies: ['react', 'nodejs', 'mongodb'],
	},
	{
		id: 2,
		thumbnail: 'https://tse3.mm.bing.net/th/id/OIP.cGnPlLdjL7kwWbi7aqctwAHaFj?r=0&rs=1&pid=ImgDetMain',
		projectName: 'Task Management App',
		projectDes:
			'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
		numberStar: 28,
		numberView: 890,
		startDate: '02/2024',
		finishDate: '04/2024',
		technologies: ['vue', 'firebase', 'typescript'],
	},
	{
		id: 1,
		thumbnail: 'https://th.bing.com/th/id/R.875e868941ea818debe3dd074574ca0d?rik=hzJcaaTFi%2fPg%2fg&pid=ImgRaw&r=0',
		projectName: 'E-commerce Website',
		projectDes:
			'A modern e-commerce platform built with React and Node.js featuring user authentication, payment integration, and admin dashboard.',
		numberStar: 42,
		numberView: 1250,
		startDate: '01/2024',
		finishDate: '03/2024',
		technologies: ['react', 'nodejs', 'mongodb'],
	},
	{
		id: 2,
		thumbnail: 'https://tse3.mm.bing.net/th/id/OIP.cGnPlLdjL7kwWbi7aqctwAHaFj?r=0&rs=1&pid=ImgDetMain',
		projectName: 'Task Management App',
		projectDes:
			'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
		numberStar: 28,
		numberView: 890,
		startDate: '02/2024',
		finishDate: '04/2024',
		technologies: ['vue', 'firebase', 'typescript'],
	},
	{
		id: 1,
		thumbnail: 'https://th.bing.com/th/id/R.875e868941ea818debe3dd074574ca0d?rik=hzJcaaTFi%2fPg%2fg&pid=ImgRaw&r=0',
		projectName: 'E-commerce Website',
		projectDes:
			'A modern e-commerce platform built with React and Node.js featuring user authentication, payment integration, and admin dashboard.',
		numberStar: 42,
		numberView: 1250,
		startDate: '01/2024',
		finishDate: '03/2024',
		technologies: ['react', 'nodejs', 'mongodb'],
	},
	{
		id: 2,
		thumbnail: 'https://tse3.mm.bing.net/th/id/OIP.cGnPlLdjL7kwWbi7aqctwAHaFj?r=0&rs=1&pid=ImgDetMain',
		projectName: 'Task Management App',
		projectDes:
			'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
		numberStar: 28,
		numberView: 890,
		startDate: '02/2024',
		finishDate: '04/2024',
		technologies: ['vue', 'firebase', 'typescript'],
	},
	{
		id: 1,
		thumbnail: 'https://th.bing.com/th/id/R.875e868941ea818debe3dd074574ca0d?rik=hzJcaaTFi%2fPg%2fg&pid=ImgRaw&r=0',
		projectName: 'E-commerce Website',
		projectDes:
			'A modern e-commerce platform built with React and Node.js featuring user authentication, payment integration, and admin dashboard.',
		numberStar: 42,
		numberView: 1250,
		startDate: '01/2024',
		finishDate: '03/2024',
		technologies: ['react', 'nodejs', 'mongodb'],
	},
	{
		id: 2,
		thumbnail: 'https://tse2.mm.bing.net/th/id/OIP.cJU8KD2YKekWQFGAuw1AiQHaF-?r=0&w=800&h=645&rs=1&pid=ImgDetMain',
		projectName: 'Task Management App',
		projectDes:
			'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
		numberStar: 28,
		numberView: 890,
		startDate: '02/2024',
		finishDate: '04/2024',
		technologies: ['vue', 'firebase', 'typescript'],
	},
];

function Projects() {
	return <ItemTable title='Our Projects' projects={sampleProjects} />;
}

export default Projects;
