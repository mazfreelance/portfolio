import { ProjectProps } from "../interfaces";

export const projects: ProjectProps[] = [
    {
        name: 'KOL Store',
        description: 'e-Commerce systems',
        publish: '2021',
        image: '/assets/images/projects/kolstore.png',
        filter: ['webapp', 'api', 'ecommerce'],
        link: '/projects/kolstore'
    },
    {
        name: 'Nimfa',
        description: 'Social media systems',
        publish: '2021',
        image: '/assets/images/projects/nimfa.png',
        filter: ['api'],
        link: '/projects/nimfa'
    },
    {
        name: 'CPD Module',
        description: 'Finance systems',
        publish: '2021',
        image: '/assets/images/projects/fimm.png',
        filter: ['webapp', 'api'],
        link: '/projects/fimm'
    },
    {
        name: 'Republic GG v4.0',
        description: 'e-Commerce systems',
        publish: '2021 - unrelease',
        image: '/assets/images/projects/rgg.png',
        filter: ['webapp', 'api', 'ecommerce'],
        link: '/projects/rgg4.0'
    },
    {
        name: 'Republic GG',
        description: 'e-Commerce systems',
        publish: '2019',
        image: '/assets/images/projects/rgg.png',
        filter: ['webapp', 'api', 'ecommerce'],
        link: '/projects/rgg'
    },
    {
        name: 'Attendance Management',
        description: 'Management systems',
        publish: '2018',
        image: '/assets/images/projects/ams.PNG',
        filter: ['webapp'],
        link: '/projects/ams'
    },
    {
        name: 'Workshire',
        description: 'Job portal systems',
        publish: '2018',
        image: '/assets/images/projects/workshire.png',
        filter: ['webapp'],
        link: '/projects/workshire'
    },
    {
        name: 'Talent Suites',
        description: 'Website',
        publish: '2017',
        image: '/assets/images/projects/talentsuites.png',
        filter: ['website'],
        link: '/projects/talent-suites'
    },
    {
        name: 'WEC Malaysia',
        description: 'Web application',
        publish: '2016',
        image: '/assets/images/projects/worldenergy.png',
        filter: ['website'],
        link: '/projects/wecm'
    },
    {
        name: 'IJaC Booking Management',
        description: 'Booking systems',
        publish: '2016',
        image: null,
        filter: ['webapp'],
        link: '/projects/ijac'
    },
    {
        name: 'Hotel Management',
        description: 'Booking systems',
        publish: '2015',
        image: null,
        filter: ['webapp'],
        link: '/projects/hms'
    }
]

export const ProjectDetails = {
    lists: [
        {
            slug: 'kolstore',
            name: 'KOL Store',
            description: 'Automated sales assistance for social media platform. Complete solution from ordering to payment collection and delivery status.',
            publish: '2021',
            status: true,
            link: 'https://kolstore.co',
            skills: ['PHP', 'Lumen', 'JavaScript', 'VueJS', 'TailwindCSS'],
            application: 'Order, Merchant, Admin, API',
            latest: '12th July 2022',
            gallery: [
                {
                    original: '/assets/images/projects/gallery/kolstore/order-1000x600.png',
                    thumbnail: '/assets/images/projects/gallery/kolstore/order-250x150.png',
                },
                {
                    original: '/assets/images/projects/gallery/kolstore/cart.png',
                    thumbnail: '/assets/images/projects/gallery/kolstore/cart.png',
                },
                {
                    original: '/assets/images/projects/gallery/kolstore/order.png',
                    thumbnail: '/assets/images/projects/gallery/kolstore/order.png',
                },
                {
                    original: '/assets/images/projects/gallery/kolstore/order-detail.png',
                    thumbnail: '/assets/images/projects/gallery/kolstore/order-detail.png',
                },
                {
                    original: '/assets/images/projects/gallery/kolstore/merchant-1000x600.png',
                    thumbnail: '/assets/images/projects/gallery/kolstore/merchant-250x150.png',
                },
                {
                    original: '/assets/images/projects/gallery/kolstore/merchant-dashboard.png',
                    thumbnail: '/assets/images/projects/gallery/kolstore/merchant-dashboard.png',
                },
                {
                    original: '/assets/images/projects/gallery/kolstore/admin-1000x600.png',
                    thumbnail: '/assets/images/projects/gallery/kolstore/admin-250x150.png',
                },
                {
                    original: '/assets/images/projects/gallery/kolstore/admin-dashboard.png',
                    thumbnail: '/assets/images/projects/gallery/kolstore/admin-dashboard.png',
                },
            ],
            clients: [
                {
                    name: 'Ionnex Sdn Bhd',
                    image: '/assets/images/logos/ionnex.png'
                }
            ]
        },
        {
            slug: 'nimfa',
            name: 'Nimfa',
            description: 'A premium site where you can connect privately with models and influencers. it strives to give every user the chance to nurture life partnerships, informal hookups, and anything in between.',
            publish: '2021',
            status: true,
            link: 'https://nimfa.live',
            skills: ['PHP', 'Laravel'],
            application: 'API',
            latest: 'Jan 2022',
            clients: [
                {
                    name: 'Ionnex Sdn Bhd',
                    image: '/assets/images/logos/ionnex.png'
                }
            ]
        },
        {
            slug: 'fimm',
            name: 'Continuing Profesional Development (CPD) Module',
            description: 'Freelance project for Federation of Investment Managers Malaysia (FIMM).',
            publish: '2021',
            status: true,
            link: 'https://www.fimm.com.my/',
            skills: ['HTML', 'PHP', 'Laravel', 'JavaScript', 'VueJS', 'Bootstrap 4'],
            application: 'Web, API',
            latest: '30th October 2021',
            clients: [
                {
                    name: 'Araken Sdn Bhd',
                    image: '/assets/images/logos/araken.png'
                },
                {
                    name: 'Comrade Ventures',
                    image: '/assets/images/logos/comrade-ventures.png'
                }
            ]
        },
        {
            slug: 'rgg4.0',
            name: 'Republic GG v4.0',
            description: 'Enhancement new technology for Republic GG',
            publish: '2021 - unrelease',
            status: true,
            link: 'https://republic.gg',
            skills: ['PHP', 'Laravel 8', 'JavaScript', 'NuxtJS', 'Bootstrap 4', 'Sass'],
            application: 'Web, API',
            latest: '28th October 2021',
            clients: [
                {
                    name: 'Ionnex Sdn Bhd',
                    image: '/assets/images/logos/ionnex.png'
                }
            ]
        },
        {
            slug: 'rgg',
            name: 'Republic GG',
            description: 'The one-stop gaming command centre that offers the largest games credit reload service in Malaysia and the solution to your gaming needs.',
            publish: '2019',
            status: true,
            link: 'https://republic.gg',
            skills: ['HTML', 'Sass', 'PHP', 'Yii2', 'Laravel 5.6', 'Bootstrap 4', 'JavaScript'],
            application: 'Web, Admin, Report Dashboard, API',
            latest: '31st March 2022',
            gallery: [
                {
                    original: '/assets/images/projects/gallery/rgg/version1-1.png',
                    thumbnail: '/assets/images/projects/gallery/rgg/version1-1.png',
                },
                {
                    original: '/assets/images/projects/gallery/rgg/version1-2.png',
                    thumbnail: '/assets/images/projects/gallery/rgg/version1-2.png',
                },
                {
                    original: '/assets/images/projects/gallery/rgg/version1-3.png',
                    thumbnail: '/assets/images/projects/gallery/rgg/version1-3.png',
                },
                {
                    original: '/assets/images/projects/gallery/rgg/version1-4.png',
                    thumbnail: '/assets/images/projects/gallery/rgg/version1-4.png',
                },
                {
                    original: '/assets/images/projects/gallery/rgg/version2-1.png',
                    thumbnail: '/assets/images/projects/gallery/rgg/version2-1.png',
                },
                {
                    original: '/assets/images/projects/gallery/rgg/version2-2.png',
                    thumbnail: '/assets/images/projects/gallery/rgg/version2-2.png',
                },
                {
                    original: '/assets/images/projects/gallery/rgg/version2-3.png',
                    thumbnail: '/assets/images/projects/gallery/rgg/version2-3.png',
                },
                {
                    original: '/assets/images/projects/gallery/rgg/version2-4.png',
                    thumbnail: '/assets/images/projects/gallery/rgg/version2-4.png',
                },
                {
                    original: '/assets/images/projects/gallery/rgg/version2-5.png',
                    thumbnail: '/assets/images/projects/gallery/rgg/version2-5.png',
                },
                {
                    original: '/assets/images/projects/gallery/rgg/version3-1.png',
                    thumbnail: '/assets/images/projects/gallery/rgg/version3-1.png',
                },
                {
                    original: '/assets/images/projects/gallery/rgg/version3-2.png',
                    thumbnail: '/assets/images/projects/gallery/rgg/version3-2.png',
                },
                {
                    original: '/assets/images/projects/gallery/rgg/version3-3.png',
                    thumbnail: '/assets/images/projects/gallery/rgg/version3-3.png',
                },
                {
                    original: '/assets/images/projects/gallery/rgg/version3-4.png',
                    thumbnail: '/assets/images/projects/gallery/rgg/version3-4.png',
                },
                {
                    original: '/assets/images/projects/gallery/rgg/version3-5.png',
                    thumbnail: '/assets/images/projects/gallery/rgg/version3-5.png',
                },
                {
                    original: '/assets/images/projects/gallery/rgg/version3-6.png',
                    thumbnail: '/assets/images/projects/gallery/rgg/version3-6.png',
                },
            ],
            clients: [
                {
                    name: 'Digi Telecommunications',
                    image: '/assets/images/logos/digi.png'
                },
                {
                    name: 'Ionnex Sdn Bhd',
                    image: '/assets/images/logos/ionnex.png'
                }
            ]
        },
        {
            slug: 'ams',
            name: 'Attendance Management Systems',
            description: 'The system use to document the time for employees work and time take off. This systems used for SL1M programme.',
            publish: '2018',
            status: true,
            link: 'http://ams.talentsuites.com/',
            skills: ['HTML', 'CSS', 'PHP', 'Bootstrap 3', 'JQuery'],
            latest: 'December 2018',
            gallery: [
                {
                    original: '/assets/images/projects/gallery/ams/checkinout.png',
                    thumbnail: '/assets/images/projects/gallery/ams/checkinout.png',
                },
                {
                    original: '/assets/images/projects/gallery/ams/login.png',
                    thumbnail: '/assets/images/projects/gallery/ams/login.png',
                },
            ],
            clients: [
                {
                    name: 'Talent Suites Sdn Bhd',
                    image: '/assets/images/logos/talent-suites-white-background.png'
                }
            ]
        },
        {
            slug: 'workshire',
            name: 'Workshire',
            description: 'An online job board that helps applicants find jobs and aids employers in their quest to locate ideal candidates.',
            publish: '2018',
            status: false,
            link: 'https://workshire.com.my',
            skills: ['HTML', 'CSS', 'PHP', 'Laravel', 'Bootstrap 3'],
            latest: '-',
            gallery: [
                {
                    original: '/assets/images/projects/gallery/workshire/version1.png',
                    thumbnail: '/assets/images/projects/gallery/workshire/version1.png'
                },
                {
                    original: '/assets/images/projects/gallery/workshire/version1-1.png',
                    thumbnail: '/assets/images/projects/gallery/workshire/version1-1.png'
                },
                {
                    original: '/assets/images/projects/gallery/workshire/version2.png',
                    thumbnail: '/assets/images/projects/gallery/workshire/version2.png'
                },
                {
                    original: '/assets/images/projects/gallery/workshire/version2-1.png',
                    thumbnail: '/assets/images/projects/gallery/workshire/version2-1.png'
                }
            ],
            clients: [
                {
                    name: 'Talent Suites Sdn Bhd',
                    image: '/assets/images/logos/talent-suites-white-background.png'
                }
            ]
        },
        {
            slug: 'talent-suites',
            name: 'Talent Suites',
            description: 'Maintain company website',
            publish: '2017',
            status: true,
            link: 'https://www.talentsuites.com.my',
            skills: ['HTML', 'CSS', 'PHP', 'Wordpress'],
            latest: '-',
            clients: [
                {
                    name: 'Talent Suites Sdn Bhd',
                    image: '/assets/images/logos/talent-suites-white-background.png'
                }
            ]
        },
        {
            slug: 'wecm',
            name: 'World Energy Council Malaysia',
            description: '',
            publish: '2016',
            status: false,
            link: 'https://worldenergy.org.my',
            skills: ['HTML', 'CSS', 'PHP', 'JavaScript'],
            latest: '-',
            gallery: [
                {
                    original: '/assets/images/projects/gallery/wec/mainpage.png',
                    thumbnail: '/assets/images/projects/gallery/wec/mainpage.png',
                },
                {
                    original: '/assets/images/projects/gallery/wec/login.png',
                    thumbnail: '/assets/images/projects/gallery/wec/login.png',
                },
                {
                    original: '/assets/images/projects/gallery/wec/profile.png',
                    thumbnail: '/assets/images/projects/gallery/wec/profile.png',
                },
                {
                    original: '/assets/images/projects/gallery/wec/fees.png',
                    thumbnail: '/assets/images/projects/gallery/wec/fees.png',
                },
                {
                    original: '/assets/images/projects/gallery/wec/payment.png',
                    thumbnail: '/assets/images/projects/gallery/wec/payment.png',
                },
                {
                    original: '/assets/images/projects/gallery/wec/annualfees.png',
                    thumbnail: '/assets/images/projects/gallery/wec/annualfees.png',
                },
                {
                    original: '/assets/images/projects/gallery/wec/membership.png',
                    thumbnail: '/assets/images/projects/gallery/wec/membership.png',
                },
                {
                    original: '/assets/images/projects/gallery/wec/membership-detail.png',
                    thumbnail: '/assets/images/projects/gallery/wec/membership-detail.png',
                },
                {
                    original: '/assets/images/projects/gallery/wec/user-management.png',
                    thumbnail: '/assets/images/projects/gallery/wec/user-management.png',
                },
            ],
            clients: [
                {
                    name: 'BATC Development Bhd',
                    image: '/assets/images/logos/batc-dev.png'
                }
            ]
        },
        {
            slug: 'ijac',
            name: 'Inmal Jaya Construction (IJaC) Booking Management system',
            description: 'Booking systems for Final Year Project',
            publish: '2016',
            status: false,
            link: '-',
            skills: ['Java'],
            latest: '-',
            clients: [
                {
                    name: 'Universiti Teknologi MARA (UiTM)',
                    image: '/assets/images/logos/UiTM.png'
                }
            ],
            source: 'https://gitlab.com/HeroCoder/FYPUiTM'
        },
        {
            slug: 'hms',
            name: 'Hotel Management system',
            description: 'Booking systems',
            publish: '2015',
            status: false,
            link: '-',
            skills: ['HTML', 'CSS', 'PHP', 'JavaScript'],
            latest: '-',
            clients: [
                {
                    name: 'Universiti Teknologi MARA (UiTM)',
                    image: '/assets/images/logos/UiTM.png'
                }
            ],
            source: 'https://gitlab.com/HeroCoder/hotelsystem'
        }
    ]
}