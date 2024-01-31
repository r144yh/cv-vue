function getCurrentWorkDescription() {
    return {
        id: 1,
        periodOfWork: '2022-cur',
        jobTitle: 'Middle Front',
        companyName: 'Protei',
        companyLink: '',
        experienceDescription: ['Assessing, planning, and distributing tasks', 'Team Player, Effective communication'],
        stackIcons: [],
    }
}

function getPrevWorkDescription() {
    return {
        id: 2,
        periodOfWork: '2021-2022',
        jobTitle: 'Junior Front',
        companyName: 'Protei',
        companyLink: '',
        experienceDescription: ['Mentoring other frontend developers', 'Problem-solving ability, Attentiveness',],
        stackIcons: []
    }
}

function getFirstWorkDescription() {
    return {
        id: 3,
        periodOfWork: 'Junior Front',
        jobTitle: 'Leaflet map',
        companyName: 'Stok',
        companyLink: '',
        experienceDescription: ['Conducting technical interviews',],
        stackIcons: []
    }
}

export default function getAllWorksDescription() {
    return [
        getCurrentWorkDescription(),
        getPrevWorkDescription(),
        getFirstWorkDescription()
    ]
}