import {
	useAuthModal,
	useLogout,
	useUser,
} from "@account-kit/react";

export default function LoginButton() {

    const user = useUser();
	const { openAuthModal } = useAuthModal();
	const { logout } = useLogout();

    return (
        <div className="p-2 m-2">
            {
                user 
                    ?   <div>
                            <button className="p-2 border border-black" onClick={() => logout()}>Logout</button>
                            <p>Logged in as: {user?.address}</p>
                        </div>
                    :   <button className="border border-black" onClick={openAuthModal}>Login</button>
            }
        </div>
    )
}