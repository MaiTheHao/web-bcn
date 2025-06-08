import ItemTable from '../../components/ItemTable/ItemTable';
import sampleProjects from '../../../mock_datas/project_page_mock_data.json';

function Projects() {
	return <ItemTable title='Our Projects' projects={sampleProjects} />;
}

export default Projects;
