import Home from '../pages/Home.vue'
import Games from '../pages/Games.vue'
import WordsChecker  from '../pages/WordsChecker.vue'
import WordsCheckerGame  from '../games/WordsChecker.vue'


export default [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: 'games',
        name: 'games',
        component: Games
    },
    {
        path: '/words-checker',
        name: 'game1',
        component: WordsChecker,
    },
    {
        path: '/words-checker/play',
        name: 'playgame1',
        component: WordsCheckerGame
    }
]