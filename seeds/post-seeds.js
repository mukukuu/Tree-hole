const { Post } = require('../models');

const postData = [
    {
        title: "one",
        post_content: "kfjjnkjgbnfhjdn kndfvnfjkdnvjf vnknvjlkfnbdjk v ojlk fdldj kvnfjlkd nmvjlkfnmvlj kwfndvkjlwrfn.",
        user_id: 2
    },
    {
        title: "two",
        post_content: "mfd vmf vm, fm, vmf, vm, fdm,v m,d vm,d fvm, fdmv, fdm,v fmd v",
        user_id: 1
    }
    
 
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;