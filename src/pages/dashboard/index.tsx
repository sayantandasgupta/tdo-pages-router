import type { ReactElement } from 'react'
import Layout from '@/pages/dashboard/layout'
import type { NextPageWithLayout } from '@/pages/_app'

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