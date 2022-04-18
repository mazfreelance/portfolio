import { ProjectProps } from "../interfaces";

export const projects: ProjectProps[] = [
    {
        name: 'KOL Store',
        description: 'Social media systems',
        publish: '2021',
        image: '/assets/images/projects/kolstore.png',
        filter: ['webapp', 'api', 'ecommerce'],
        skills: ['PHP', 'Laravel', 'JavaScript', 'VueJS']
    },
    {
        name: 'Nimfa',
        description: 'Social media systems',
        publish: '2021',
        image: '/assets/images/projects/nimfa.png',
        filter: ['api'],
        skills: ['PHP', 'Laravel']
    },
    {
        name: 'Continuing Profesional Development (CPD) Module',
        description: 'Freelance project for Federation of Investment Managers Malaysia (FIMM).',
        publish: '2020',
        image: '/assets/images/projects/fimm.png',
        filter: ['webapp', 'api'],
        skills: ['HTML', 'PHP', 'Laravel', 'JavaScript', 'VueJS']
    },
    {
        name: 'Republic GG',
        description: 'The one-stop gaming command centre that offers the largest games credit reload service in Malaysia and the solution to your gaming needs.',
        publish: '2019',
        image: '/assets/images/projects/rgg.png',
        filter: ['webapp', 'api', 'ecommerce'],
        skills: ['HTML', 'Sass', 'PHP', 'Yii2', 'Laravel', 'Bootstrap 4', 'JavaScript']
    },
    {
        name: 'Attendance Management Systems',
        description: 'The system use to document the time for employees work and time take off. This systems used for SL1M programme.',
        publish: '2018',
        image: '/assets/images/projects/ams.png',
        filter: ['webapp'],
        skills: ['HTML', 'CSS', 'PHP', 'Bootstrap 3', 'JQuery']
    },
    {
        name: 'Workshire',
        description: 'Job portal systems',
        publish: '2018',
        image: '/assets/images/projects/workshire.png',
        filter: ['webapp'],
        skills: ['HTML', 'CSS', 'PHP', 'Wordpress']
    },
    {
        name: 'Talent Suites',
        description: 'Maintain company website',
        publish: '2017',
        image: '/assets/images/projects/ts.png',
        filter: ['website'],
        skills: ['HTML', 'CSS', 'PHP', 'Wordpress']
    },
    {
        name: 'World Energy Council Malaysia',
        description: '',
        publish: '2016',
        image: '/assets/images/projects/worldenergy.png',
        filter: ['website'],
        skills: ['HTML', 'CSS', 'PHP', 'JavaScript']
    },
    {
        name: 'Inmal Jaya Construction (IJaC) Booking Management system',
        description: 'Booking systems for Final Year Project',
        publish: '2016',
        image: null,
        filter: ['webapp'],
        skills: ['Java']
    },
    {
        name: 'Hotel Management system',
        description: 'Booking systems',
        publish: '2015',
        image: null,
        filter: ['webapp'],
        skills: ['HTML', 'CSS', 'PHP', 'JavaScript']
    }
]

export const ProjectDetails = {
    kolstore: {
        name: 'KOL Store',
        description: 'Social media systems',
        publish: '2021',
        status: true,
        link: 'https://kolstore.co',
        skills: ['PHP', 'Laravel', 'JavaScript', 'VueJS']
    },
    nimfa: {
        name: 'Nimfa',
        description: 'Social media systems',
        publish: '2021',
        status: true,
        link: null,
        skills: ['PHP', 'Laravel']
    },
    cpd: {
        name: 'Continuing Profesional Development (CPD) Module',
        description: 'Freelance project for Federation of Investment Managers Malaysia (FIMM).',
        publish: '2020',
        status: true,
        link: 'https://www.fimm.com.my/',
        skills: ['HTML', 'PHP', 'Laravel', 'JavaScript', 'VueJS']
    },
    rgg: {
        name: 'Republic GG',
        description: 'The one-stop gaming command centre that offers the largest games credit reload service in Malaysia and the solution to your gaming needs.',
        publish: '2019',
        status: true,
        link: 'https://republic.gg',
        skills: ['HTML', 'Sass', 'PHP', 'Yii2', 'Laravel', 'Bootstrap 4', 'JavaScript']
    },
    ams: {
        name: 'Attendance Management Systems',
        description: 'The system use to document the time for employees work and time take off. This systems used for SL1M programme.',
        publish: '2018',
        status: true,
        link: 'http://ams.talentsuites.com/',
        skills: ['HTML', 'CSS', 'PHP', 'Bootstrap 3', 'JQuery']
    },
    workshire: {
        name: 'Workshire',
        description: 'Job portal systems',
        publish: '2018',
        status: false,
        link: 'https://workshire.com.my/',
        skills: ['HTML', 'CSS', 'PHP', 'Wordpress']
    },
    tsuites: {
        name: 'Talent Suites',
        description: 'Maintain company website',
        publish: '2017',
        status: true,
        link: 'https://www.talentsuites.com.my/',
        skills: ['HTML', 'CSS', 'PHP', 'Wordpress']
    },
    wecm: {
        name: 'World Energy Council Malaysia',
        description: '',
        publish: '2016',
        status: false,
        link: 'https://worldenergy.org.my',
        skills: ['HTML', 'CSS', 'PHP', 'JavaScript']
    },
    hms: {
        name: 'Hotel Management system',
        description: 'Booking systems',
        publish: '2015',
        status: false,
        link: '#',
        skills: ['HTML', 'CSS', 'PHP', 'JavaScript']
    }
}