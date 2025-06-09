import LayoutMerahPutih from "../components/LayoutMerahPutih";

export default function KontakKami() {
  return (
    <LayoutMerahPutih title="Kontak Kami">
      <p>📞 WhatsApp: <a href="https://wa.me/6281234567890" className="text-green-600 underline">+62 812-3456-7890</a></p>
      <p>🏠 Alamat: Jl. Raya Desa No. 10, Kec. Contoh, Kab. Nusantara</p>
      <p>✉️ Email: <a href="mailto:kontak@sahabatkopdes.id" className="text-blue-600 underline">kontak@sahabatkopdes.id</a></p>
    </LayoutMerahPutih>
  );
}
