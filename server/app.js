var express = require('express');
var bootstrap = require('./bootstrap.js');

var app = new express();

app.use(express.static('public'));
app.use('/assets', express.static('assets'));
const tasksData = [
        {
            _id: 1,
            title: 'Fix web cho vantuongthanh',
            description: 'Fix menu và mobile',
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
        },
        {
            _id: 2,
            title: 'Design web vinaphone',
            description: 'Design giao diện mobile và desktop',
            owner: {
                fullName: 'Nguyen Thi Hien',
                position: 'Leader',
                username: 'hiennt.vinabits',
                password: '',
                bio: '',
                avatar: '',
                company: {
                    title: 'Vinabits',
                    address: '',
                },
                role: {
                    code: 'design',
                    caption: 'Designer',
                }
                
            },
            reward: {
                score: 30,
                title: 'fix web khach hang',

            },
            dateEnd: null,
            priority: {
                order: 1,
                caption: 'Normal',
            }
        }
];
const port = process.env.PORT || 8080;
console.log(bootstrap);
bootstrap.dispatch(app);

app.listen(port, () => {
    console.log('App start at port ' + port);
    console.log(app._router.stack);
})
