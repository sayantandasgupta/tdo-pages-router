import type { ReactElement } from 'react'
import Layout from '@/pages/dashboard/layout'
import type { NextPageWithLayout } from '@/pages/_app'
import { GetSessionParams, getSession } from 'next-auth/react'
import TaskList from '@/components/dashboard/tasklist'

const DashboardPage: NextPageWithLayout = () => {
    return (
        <TaskList />
    )
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