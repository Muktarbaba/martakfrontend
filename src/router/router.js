import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('../components/LandingPage.vue'),
    },

		{
			path: '/auth/login',
			name: 'Login',
			component: () => import('../components/Login.vue'),
		},

		{
			path: '/auth/register',
			name: 'register',
			component: () => import('../components/Register.vue'),
		},

		{
			path: '/auth/forgot-password',
			name: 'forgot-password',
			component: () => import('../components/ForgotPassword.vue'),
		},

  ]
})

export default router
