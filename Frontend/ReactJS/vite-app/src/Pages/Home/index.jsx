import { Layout } from '../../Components/Layout';
import { Card } from '../../Components/Card';

function Home() {
    return (
        <Layout>
            <h1 className="text-4xl font-semibold text-gray-800">Home</h1>
            <Card />
        </Layout>
    )
}

export { Home };