import Vue from 'vue'
import routes from './routes'
import Router from 'vue-router'


Vue.use(Router)




// Load middleware modules dynamically.
const routeMiddleware = resolveMiddleware(
    //middleware papkasindaki butun .js fayllarini gonderdi resolveMiddleware() funksiyasina
    require.context('../middleware', false, /.*\.js$/)
)

function resolveMiddleware(requireContext) {

    // .keys() adlarini qaytarir, requireContext(faylin adi) fayli qaytarir
    return requireContext.keys()
        .map(file => {
            return [file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file)]
            // ['faylin adi', fayldaki funksiya]
        })
        .reduce((guards, [name, guard]) => {
            return { ...guards,
                [name]: guard.default
            }
        }, {})
    // return this:
    // {
    //   'middleware name' : function,
    //   'middleware name' : function,
    // }
}

// The middleware for every page of the application.
const globalMiddleware = [/*'locale', 'check-auth'*/]






const router = createRouter()
export default router


//    function scrollBehavior (to, from, savedPosition) {
//        if (savedPosition) {
//            return savedPosition
//         }
//         if (to.hash) {
//             return { selector: to.hash }
//         }
//         const [component] = router.getMatchedComponents({ ...to }).slice(-1)
//         if (component && component.scrollToTop === false) {
//             return {}
//         }
//         return { x: 0, y: 0 }
//     }

function createRouter() {
    const router = new Router({
        //scrollBehavior,
        base: process.env.BASE_URL,
        mode: 'history',
        routes
    })

    router.beforeEach(beforeEach)
    router.afterEach(afterEach)

    return router
}


function resolveComponents(components) {
    return Promise.all(components.map(component => {
        return typeof component === 'function' ? component() : component
    }))
}


async function beforeEach(to, from, next) {
    // Get the matched components and resolve them.

    const components = await resolveComponents(
        router.getMatchedComponents({ ...to
        })
    )
    console.log('matched')
    console.log(components)
    if (components.length === 0) {
        return next()
    }

/*
      // Start the loading bar.
      // eger hansisa componentde loading: false qeyd olunmayibsa
      if (components[components.length - 1].loading !== false) {
        // $loading global instancedi. App.vue'de yaradilib. elementin ozudu. onun start funksiyasi baslasin
        router.app.$nextTick(() => router.app.$loading.start())
      }
*/
      // Get the middleware for all the matched components.
      const middleware = getMiddleware(components)
    


    // bele yazib store'de isteniler funksiyani isletmek olar.
    // componentin ozunde middleware qeyd edirsen, sora burda routeden evvel ona run verirsen
    // store'de save edirsen, sora komponentden isledirsen
    ////////////////////////////////////////////////////////////////////////
    // router.app.$store.dispatch('auth/vuexx', 'yeni data')


    // Call each middleware.
    callMiddleware( middleware, to, from, (...args) => {
        // Set the application layout only if "next()" was called with no args.
        if (args.length === 0) {
            // set layout global variabledi. App.vue'de yaradilib
            console.log(router.app)
            router.app.setLayout(components[0].layout || '')
        }
        next(...args)
    })

}

function callMiddleware(middleware, to, from, next) {
    const stack = middleware.reverse()
    console.log(stack)

    let c = 0;
    const _next = (...args) => {
        // Stop if "_next" was called with an argument or the stack is empty.
        if (args.length > 0 || stack.length === 0) {
            // if (args.length > 0) {
            //     router.app.$loading.finish()
            // }
            return next(...args)
        }
        const middleware = stack.pop()
        if (typeof middleware === 'function') {
            middleware(to, from, _next)
        } else if (routeMiddleware[middleware]) {
            routeMiddleware[middleware](to, from, _next)
        } else {
            throw Error(`Undefined middleware [${middleware}]`)
        }
    }

    _next()
}

async function afterEach(to, from, next) {
    await router.app.$nextTick()

    //router.app.$loading.finish()
}



/**
 * Resolve async components.
 *
 * @param  {Array} components
 * @return {Array}
 */

/**
 * Merge the the global middleware with the components middleware.
 *
 * @param  {Array} components
 * @return {Array}
 */
function getMiddleware(components) {
    const middleware = [...globalMiddleware]

    components.filter(c => c.middleware).forEach(component => {
        if (Array.isArray(component.middleware)) {
            middleware.push(...component.middleware)
        } else {
            middleware.push(component.middleware)
        }
    })
    return middleware
}
