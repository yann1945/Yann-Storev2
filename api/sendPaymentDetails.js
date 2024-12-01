// pages/api/sendPaymentDetails.js

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Ambil gambar dari request
    const file = req.body.file;

    // Proses upload gambar atau kirim ke server/Telegram
    // Misalnya mengirim gambar ke Telegram atau tempat penyimpanan lainnya

    res.status(200).json({ success: true, message: "Bukti pembayaran diterima!" });
  } else {
    res.status(405).json({ success: false, error: "Method Not Allowed" });
  }
}
