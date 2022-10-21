import { invalid, redirect, type Actions } from '@sveltejs/kit';

export {};

export const actions: Actions = {
	default: async ({ cookies, request }) => {
		const cookie = cookies.get('sessionid');

		if (cookie) {
			throw redirect(302, '/');
		}

		const data = await request.formData();

		const email = data.get('email');
		const password = data.get('password');

		if (!email) {
			return invalid(400, { email, missing: true });
		}

		if (!password) {
			return invalid(400, { password, missing: true });
		}

		console.log(`
        Email: ${email}
        Password: ${password}
        `);

		cookies.set('sessionid', crypto.randomUUID());
		return {
			success: true
		};
	}
};
