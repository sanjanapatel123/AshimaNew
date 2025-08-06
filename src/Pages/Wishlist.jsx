import { Helmet } from "react-helmet-async";

export default function Wishlist() {
  return (
    <>
      <Helmet>
        <title>My Wishlist | Nallakkar</title>
        <meta name="description" content="Your saved items and favorite picks." />
      </Helmet>

      <h1 className="text-2xl p-4">💖 Wishlist Page</h1>
    </>
  );
}
