db = new Mongo().getDB('taskBuilder');

db.tasks.remove({});
db.priorities.remove({});
db.users.remove({});
db.companies.remove({});
db.roles.remove({});

db.tasks.insert([
    {
        title: 'Fix web cho vantuongthanh',
        status: 'Open',
        owner: {
            fullName: 'Truong Ngoc Quy',
            position: 'Leader',
            username: 'quytn.vinabits',
            password: '',
            bio: '',
            avatar: '',
            company: {
                title: 'Vinabits',
                address: '',
            },
            role: {
                code: 'dev',
                caption: 'Developer',
            }
            
        },
        reward: {
            score: 30,
            title: 'fix web khach hang',

        },
        dateEnd: new Date('2017-05-23'),
        priority: {
            order: 1,
            caption: 'Normal',
        }
    }
]);

db.tasks.createIndex({ "owner.username": 1 });
db.tasks.createIndex({ status: 1 });
db.tasks.createIndex({ dateEnd: 1 });
db.tasks.createIndex({ title: 1 });
db.tasks.createIndex({ "reward.score": -1 });
db.tasks.createIndex({ "priority.order": -1 });

db.priorities.insert([
    {
        order: 1,
        caption: 'Normal'
    },
    {
        order: 2,
        caption: 'Medium',
    },
    {
        order: 3,
        caption: 'High',
    },
    {
        order: 4,
        caption: 'Emergency'
    }
]);

db.priorities.createIndex({ order: 1 }, {unique: true});

db.users.insert([
    {
        fullName: 'Truong Ngoc Quy',
        position: 'Leader',
        username: 'quytn.vinabits',
        password: '',
        bio: '',
        avatar: '',
        company: {
            title: 'Vinabits',
            address: '',
        },
        role: {
            code: 'dev',
            caption: 'Developer',
        }
    }
]);

db.users.createIndex({ username: 1 }, {unique: true});

db.rewards.insert([
    {
        score: 30,
        title: 'fix web cho khach hang',
        roleCode: 'dev'
    } 
]);

db.rewards.createIndex({ score: -1 });
db.rewards.createIndex({ roleCode: 1 });


db.companies.insert([
    {
        title: 'Vinabits',
        address: ''
    }
]);

db.companies.createIndex({ title: 1 });

db.roles.insert([
    {
        code: 'dev',
        caption: 'Developer'
    },
    {
        code: 'design',
        caption: 'Designer'
    }
]);

db.roles.createIndex({ code: 1 }, {unique: true});
