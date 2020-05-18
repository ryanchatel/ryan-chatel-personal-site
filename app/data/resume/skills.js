// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

// categories: Product Management, Project Management, Software Engineering, Web Development, Languages, Embedded Protocols, Business, Smart Grid, 
// skills: New Product Development, Winning in the Market, Financial Analysis, SaaS, Multi-Tenancy, Architectures, Disaster Recovery, CAGR Analysis, Geo-Spatial Analysis, Data Visualization, AWS, DNP 3.0, Modbus, TCP/IP, SCADA, Java, Node.js, JavaScript, HTML5, Object Orientied Thinking, Agile, Storyboards, Epics, Wireframing


const skills = [{
  title: 'New Product Development',
  competency: 4,
  category: ['Product Management', 'Business'],
},
{
  title: 'Node.JS',
  competency: 2,
  category: ['Web Development', 'Software Engineering'],
},
{
  title: 'Strategy',
  competency: 5,
  category: ['Business', 'Smart Grid'],
},
{
  title: 'Project Management',
  competency: 3,
  category: ['Business', 'Smart Grid'],
},
{
  title: 'Amazon Web Services',
  competency: 2,
  category: ['Web Development', 'Software Engineering'],
},
{
  title: 'Winning in the Market',
  competency: 4,
  category: ['Product Management', 'Business'],
},
{
  title: 'Voice of the Customer Development',
  competency: 5,
  category: ['Web Development', 'Product Management', 'Agile'],
},
{
  title: 'SaaS',
  competency: 5,
  category: ['Web Development', 'Software Engineering'],
},
{
  title: 'Story and Epic creation',
  competency: 4,
  category: ['Agile', 'Web Development'],
},
{
  title: 'Data Visualization',
  competency: 4,
  category: ['Agile', 'Web Development'],
},
{
  title: 'IoT',
  competency: 4,
  category: ['Smart Grid'],
},
{
  title: 'DNP 3.0',
  competency: 5,
  category: ['Embedded Protocols', 'Smart Grid'],
},
{
  title: 'Modbus',
  competency: 3,
  category: ['Embedded Protocols', 'Smart Grid'],
},
{
  title: 'MQTT',
  competency: 2,
  category: ['Embedded Protocols', 'Smart Grid'],
},
{
  title: 'TCP/IP',
  competency: 3,
  category: ['Embedded Protocols', 'Smart Grid'],
},
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(
  skills.reduce((acc, { category }) => acc.concat(category), []),
)].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
