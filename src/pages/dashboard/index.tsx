import type { ReactElement } from 'react'
import Layout from '@/pages/dashboard/layout'
import type { NextPageWithLayout } from '@/pages/_app'
import { GetSessionParams, getSession } from 'next-auth/react'

const DashboardPage: NextPageWithLayout = () => {
    return <h1>Dashboard Page</h1>
}

DashboardPage.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default DashboardPage;

export async function getServerSideProps(context: GetSessionParams) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        };
    }

    return {
        props: session
    };
}