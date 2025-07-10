import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";

export function IsOwner() {
    const { user } = useUser();
    if (!user) {
        return (
            <div>Sign In to see more info</div>
        )
    }
    const isOwner = user.primaryEmailAddress?.emailAddress === 'maiminhquyn@gmail.com';
    return (
        <div>
            {isOwner ? (
                <p>You are owner</p>
            ) : (
                <p>You are not owner</p>
            )}
        </div>
    )
}


export function AutoAssignMemberRole() {
    const { user, isLoaded } = useUser();
    useEffect(() => {
        const assignRole = async () => {
            if (isLoaded && user) {
                const role = user.publicMetadata?.role; 
                // Kiểm tra nếu user chưa có role -> lần đầu đăng nhập -> setRole
                if (!role) {
                    // set role admin 
                    if (user.primaryEmailAddress?.emailAddress === 'maiminhquyn@gmail.com') {
                        await user.update({
                            publicMetadata: { role: "owner" },
                        })
                    }
                    else {
                        // Cập nhật role thành "member"
                        await user.update({
                            publicMetadata: { role: "member" },
                        });
                        console.log("Role assigned: member");
                    }
                }
            }
        }

        assignRole();
    }, [isLoaded, user]);
    return (
        <>
            <div>Hello {user ? user.fullName : "user"}</div>
        </>
    )
}
