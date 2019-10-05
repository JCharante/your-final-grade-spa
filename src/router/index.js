import Vue from 'vue';
import VueRouter from 'vue-router';

import routes from './routes';

Vue.use(VueRouter);

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation
 */

export default function ({ store }) {
    console.log("Retrieving data from local storage");
    const sessionKey = localStorage.getItem('sessionKey');
    const displayName = localStorage.getItem('displayName');
    if (sessionKey) {
        store.dispatch('setSessionDoc', { sessionKey });
    }
    if (displayName) {
        store.dispatch('setDisplayName', { displayName });
    }
    const Router = new VueRouter({
        scrollBehavior: () => ({ x: 0, y: 0 }),
        routes,
        
        // Leave these as is and change from quasar.conf.js instead!
        // quasar.conf.js -> build -> vueRouterMode
        // quasar.conf.js -> build -> publicPath
        mode: process.env.VUE_ROUTER_MODE,
        base: process.env.VUE_ROUTER_BASE,
    });
    
    Router.beforeEach((to, from, next) => {
        if (to.fullPath !== '/login' && store.getters.getSessionKey.length === 0) {
            next({ path: '/login', replace: true });
        } else {
            console.log(to);
            if (to.params.classid && !store.getters.getClassById(to.params.classid)) {
                next({ path: '/', replace: true });
            } else {
                next({ path: to, replace: true });
            }
        }
    });
    
    return Router;
}
