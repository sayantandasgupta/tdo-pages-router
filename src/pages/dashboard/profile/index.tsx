import type { ReactElement } from "react"
import Layout from "@/pages/dashboard/layout"
import { NextPageWithLayout } from "@/pages/_app"

const ProfilePage: NextPageWithLayout = () => {
    return <h1>Profile Page</h1>
}

ProfilePage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    );
}

export default ProfilePage;