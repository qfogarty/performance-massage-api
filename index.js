const {ApolloServer, gql} = require('apollo-server');

const typeDefs = gql`
    type StaffMember {
        name: String
        dateJoined: String,
        shortName: String,
        detail: String,
        photo: String,
        timelyId: Int
    }
    type Query {
        staffMembers: [StaffMember]
    }
`;

const StaffMembers = [
    {
        name: 'Rebecca Fogarty',
        dateJoined: '10-10-1983',
        timelyId: 220529,
        photo: 'bex-gcmarathon.jpg',
        shortName: 'Rebecca',
        detail: 'Rebecca Fogarty (nee Forlong) is a qualified massage therapist specialising in sport and remedial massage. She studied in Australia for a \'Diploma of Remedial Massage\'. After returning home to New Zealand, she worked at a sports physio before setting up her own business in 2008 - \'Performance Massage Clinic\'.\nThrough her sporting career, which was highlighted by competing at the 2006 Commonwealth Games, she gained a love for massage after experiencing firsthand the great benefits of getting regular massage, such as the improved recovery, performance and injury prevention.\nA large number of Rebecca\'s clientele are athletes needing deep tissue and sports massage. She works with athletes ranging from your general \'keep fit\' to the elites. Rebecca has gained a lot of experience with working with top elite athletes and teams. Some of which include; The Auckland Blues and Auckland NPC, The All Blacks plus many of the New Zealand and Australian representatives in track &amp; field and triathlon.\nHer work also includes many clients suffering neck/back/shoulder pain caused through work related stresses, those recovering from injury or needing relief from muscular pain and tension, and those needing to just relax and de-stress.\nRebecca takes pride in her work with each individual, and believes in the importance of having a healthy body and mind.'
    },
    {
        name: 'Chantal Sissing',
        dateJoined: '10-10-1983',
        timelyId: 55700,
        photo: 'chantal-comrades.jpg',
        shortName: 'Chantal',
        detail: 'Chantal has exceptional skills and a wealth of knowledge and experience!\nShe is a South African qualified Physiotherapist, and prior to moving to NZ ran her own practice where her consultations included physiotherapy treatments and sports and remedial massages.\nChantal works with a wide range of clients, and is very passionate about helping her clients achieve the best results!\nWhether you are wanting massage sessions to help your body to recover, prevent injury, improve general well-being or relieve muscular tension and pain, Chantal has the skills to help your body perform at its best.\nShe has worked with many athletes including Ironman participants, runners, cyclists, MMA fighters, rugby players etc. Including being the therapist to SA Muaythai team.\nChantal is a passionate runner and has completed numerous marathons and ultra marathons. Her love for health and sport has seen her also compete in triathlons, cycling events and being a keen boxer!\nChantal will be working our day shifts 10am-2pm.'
    },
    {
        name: 'Ann-Christin Dütschke-Strange',
        dateJoined: '10-10-1983',
        timelyId: 220372,
        photo: 'therapist-anni.jpg',
        shortName: 'Anni',
        detail: 'Anni is a qualified physiotherapist from Germany. Before she arrived in New Zealand she worked with a variety of patients including those who were recovering after orthopaedic surgery, patients with issues of their inner organs and those focused on high performance activities such as CrossFit, handball and football.\nShe believes in holistic medicine and seeks to find the source of a client\'s underlying issue. Constant research and improvement allows Anni to be up to date with new scientific medical data.\nIn her spare time she practises yoga and functional training, enjoys mountain biking and keeping fit and active by swimming, running and climbing.'
    },
    {
        name: 'Sarah Hammerton',
        dateJoined: '10-10-1983',
        timelyId: 259857,
        photo: 'therapist-sarah.jpg',
        shortName: 'Sarah',
        detail: 'Sarah graduated from the Canadian College of Massage and Hydrotherapy in 2008.\nShe specialises in sports and remedial massage, as well as swedish and pre-natal/pregnancy massage.\nSarah has worked thousands of hours with various amateur and professional Rugby teams, even the All Blacks 7\'s! Her career highlights thus far have been the Vancouver 2010 Olympic Games, the 2018 Gold Coast Commonwealth Games, (she operated within the Athlete\'s Village at both of these events) and Highland Rugby Football Club in Inverness. She has also worked with world-class level; powerlifters, MMA fighters, triathletes, and dancers in her general practice.\nSarah competed under the Scottish flag at the Commonwealth Powerlifting Championships in South Africa in 2017, and is the reigning Bronze overall  84+ female lifter. She also played Premiership rugby in Edinburgh, and rowed competitively in Canada. Her sporting (and injury!) background has lent her possibly the greatest insight into her clients, and she approaches every case with the care she would hope to receive herself.'
    }
];

const resolvers = {
    Query: {
        staffMembers: () => {
            return StaffMembers;
        }
    }
};

const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
    console.log(`Server started at ${url}`);
});
