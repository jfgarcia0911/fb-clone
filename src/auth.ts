// import NextAuth from "next-auth"
// import GitHub from "next-auth/providers/github"
// import {PrismaClient } from "@prisma/client";
// import {PrismaAdapter} from "@auth/prisma-adapter";


// const prisma = new PrismaClient();
// export const {auth, handlers, signIn, signOut } = NextAuth({
//     providers: [GitHub],
//     adapter: PrismaAdapter(prisma)
// });    

import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

export const { auth, handlers, signIn, signOut } = NextAuth({
	session: {
		strategy: "jwt",
	},
	providers: [GitHub],
	adapter: PrismaAdapter(prisma),
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id;
				token.name = user.name;
			}

			return token;
		},
		async session({ session, token }) {
			if (session.user) {
				session.user.id = token.id as string;
                session.user.name = token.name as string;
			}

            return session;
		},
	},
});
