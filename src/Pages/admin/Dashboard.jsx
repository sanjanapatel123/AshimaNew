import { Helmet } from "react-helmet-async";

export default function Dashboard() {
  return (
    <>
      <Helmet>
        <title>Admin | Dashboard</title>
        <meta name="description" content="Manage orders, products and users from the admin panel." />
      </Helmet>

      <h1 className="text-2xl font-bold">📊 Admin Dashboard</h1>
    </>
  );
}
