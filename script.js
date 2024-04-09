document.addEventListener("DOMContentLoaded", function() {
    const mainElement = document.querySelector(".main");
  
    window.addEventListener("scroll", function() {
      // Jarak dari bagian atas elemen .main ke bagian atas dokumen
      const mainBottom = mainElement.getBoundingClientRect().Bottom;
      
      // Ukuran tinggi tampilan
      const windowHeight = window.innerHeight;
  
      // Tambah atau hapus class "shadow" berdasarkan kondisi scroll
      if (mainBottom < -windowHeight) {
        mainElement.classList.add("shadow");
      } else {
        mainElement.classList.remove("shadow");
      }
    });
  });
  