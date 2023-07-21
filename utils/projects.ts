import { ProjectProps } from "../types";

export const projects: ProjectProps[] = [
    {
        name: 'CookX Asia',
        description: 'e-Commerce systems',
        publish: '2022',
        image: '/assets/images/projects/cookx.png',
        filter: ['webapp', 'app', 'api', 'ecommerce'],
        link: '/projects/cookx',
        status: true
    },
    {
        name: 'KOL Store',
        description: 'e-Commerce systems',
        publish: '2021',
        image: '/assets/images/projects/kolstore.png',
        filter: ['webapp', 'api', 'ecommerce'],
        link: '/projects/kolstore',
        status: true
    },
    {
        name: 'Nimfa',
        description: 'Social media systems',
        publish: '2021',
        image: '/assets/images/projects/nimfa.png',
        filter: ['api'],
        link: '/projects/nimfa',
        status: false
    },
    {
        name: 'CPD Module',
        description: 'Finance systems',
        publish: '2021',
        image: '/assets/images/projects/fimm.png',
        filter: ['webapp', 'api'],
        link: '/projects/fimm',
        status: true
    },
    // {
    //     name: 'Republic GG v4.0',
    //     description: 'e-Commerce systems',
    //     publish: '2021 - unrelease',
    //     image: '/assets/images/projects/rgg.png',
    //     filter: ['webapp', 'api', 'ecommerce'],
    //     link: '/projects/rgg4.0',
    //     status: false
    // },
    {
        name: 'Republic GG',
        description: 'e-Commerce systems',
        publish: '2019',
        image: '/assets/images/projects/rgg.png',
        filter: ['webapp', 'api', 'ecommerce'],
        link: '/projects/rgg',
        status: true
    },
    {
        name: 'AMS Systems',
        description: 'Management systems',
        publish: '2018',
        image: '/assets/images/projects/ams.PNG',
        filter: ['webapp'],
        link: '/projects/ams',
        status: false
    },
    {
        name: 'Workshire',
        description: 'Job portal systems',
        publish: '2018',
        image: '/assets/images/projects/workshire.png',
        filter: ['webapp'],
        link: '/projects/workshire',
        status: false
    },
    {
        name: 'Talent Suites',
        description: 'Website',
        publish: '2017',
        image: '/assets/images/projects/talentsuites.png',
        filter: ['website'],
        link: '/projects/talent-suites',
        status: true
    },
    {
        name: 'WEC Malaysia',
        description: 'Web Application',
        publish: '2016',
        image: '/assets/images/projects/worldenergy.png',
        filter: ['website'],
        link: '/projects/wecm',
        status: false
    },
    {
        name: 'IJaC Systems',
        description: 'Booking systems',
        publish: '2016',
        image: null,
        filter: ['webapp'],
        link: '/projects/ijac',
        status: false
    },
    {
        name: 'Hotel Management',
        description: 'Booking systems',
        publish: '2015',
        image: null,
        filter: ['webapp'],
        link: '/projects/hms',
        status: false
    }
]