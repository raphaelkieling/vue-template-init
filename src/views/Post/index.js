import PostView from '@/views/Post/PostView.vue';
import PostCreate from '@/views/Post/PostCreate.vue';
import PostList from '@/views/Post/PostList.vue';

export default {
    path: 'post',
    component: PostView,
    children: [
        {
            path: '',
            component: PostList,
        },
        {
            path: 'create',
            component: PostCreate,
        }
    ]
}