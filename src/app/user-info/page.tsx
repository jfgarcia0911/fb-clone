import { auth } from "@/auth";


export default async function UserInfo() {

    const session = await auth();

    return (
        <div>
            <p>User signed in with name: {session?.user?.name}</p>
            <p>User signed in with email: {session?.user?.email}</p>
        </div>
    )

}