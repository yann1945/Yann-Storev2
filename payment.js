<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Halaman Pembayaran</title>
  <link rel="stylesheet" href="styles/payment.css">
</head>
<body>

<h1>Halaman Pembayaran</h1>

<!-- Menampilkan Metode Pembayaran yang Dipilih -->
<div id="payment-method">
  <h2>Metode Pembayaran: <span id="selected-payment-method">OVO</span></h2>
  <img src="images/ovo-logo.png" alt="OVO Logo" id="payment-image">
</div>

<!-- Menampilkan Nomor Pembayaran dan QR Code -->
<div id="payment-details">
  <h3>Nomor Pembayaran: 081234567890</h3>
  <img src="images/qris-example.png" alt="QRIS Example" id="qris-code">
</div>

<!-- Upload Gambar Bukti Pembayaran -->
<form id="payment-form">
  <input type="file" id="payment-image-upload" required>
  <button type="submit">Kirim Bukti Pembayaran</button>
</form>

<script>
  // Handle pembayaran untuk menampilkan metode pembayaran yang sesuai
  const paymentMethod = "OVO"; // Dapat diganti berdasarkan pilihan checkout sebelumnya

  document.getElementById('selected-payment-method').textContent = paymentMethod;

  // Ganti logo berdasarkan metode pembayaran
  if (paymentMethod === "OVO") {
    document.getElementById('payment-image').src = 'images/ovo-logo.png';
  } else if (paymentMethod === "GoPay") {
    document.getElementById('payment-image').src = 'images/gopay-logo.png';
  } else if (paymentMethod === "DANA") {
    document.getElementById('payment-image').src = 'images/dana-logo.png';
  }

  // Kirim gambar bukti pembayaran
  document.getElementById("payment-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const imageFile = document.getElementById("payment-image-upload").files[0];
    
    // Upload gambar ke server atau API (misalnya, upload gambar)
    const formData = new FormData();
    formData.append("file", imageFile);

    fetch("/api/sendPaymentDetails", {
      method: "POST",
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert("Bukti pembayaran berhasil dikirim!");
      } else {
        alert("Terjadi kesalahan saat mengirim bukti pembayaran.");
      }
    });
  });
</script>

</body>
</html>
