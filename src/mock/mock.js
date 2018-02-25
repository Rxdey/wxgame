import Mock from 'mockjs';

Mock.mock('/api/test',(req, res)=>{
    return {
        res:1,
        message:'测试成功',
        list:[
            {
                id:'1',
                name:'测试1',
                bgimg:'http://prl.weilot.com/games/hero/icon.png',
                url:'http://prl.weilot.com/games/zongzi/',
            },
            {
                id:'2',
                name:'测试2',
                bgimg:'http://prl.weilot.com/games/hero/icon.png',
                url:'http://prl.weilot.com/games/zongzi/',
            },
            {
                id:'2',
                name:'测试3',
                bgimg:'http://prl.weilot.com/games/hero/icon.png',
                url:'http://prl.weilot.com/games/zongzi/',
            }
        ]
    }
})