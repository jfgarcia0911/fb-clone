// import NextAuth from "next-auth"
// import GithubProvider from "next-auth/providers/github"
// import FacebookProvider from "next-auth/providers/facebook";

// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_ID,
//       clientSecret: process.env.GITHUB_SECRET,
//     }),
//     FacebookProvider({
//       clientId: process.env.FACEBOOK_CLIENT_ID,
//       clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
//     }),
//     // ...add more providers here
//   ],
// }


// export default NextAuth(authOptions)

import { NextResponse, type NextRequest } from "next/server";
import { pinata } from "@/utils/config"

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const file: File | null = data.get("file") as unknown as File;
    const { cid } = await pinata.upload.public.file(file)
    const url = await pinata.gateways.public.convert(cid);
    return NextResponse.json(url, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
