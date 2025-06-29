document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi variabel global
    let selectedCar = null;
    let rentalHistory = [];
    let currentStep = 1;
    
    // Cek preferensi tema
    if (localStorage.getItem('darkMode') === 'enabled' || 
        (window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem('darkMode'))) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }

    // Toggle tema gelap/tang
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', function() {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('darkMode', 'disabled');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', 'enabled');
        }
    });

    // Fungsi untuk menampilkan notifikasi
    function showNotification(message, isSuccess = true) {
        const notification = document.getElementById('notification');
        const notificationMessage = document.getElementById('notification-message');
        
        notification.classList.remove('hidden');
        notification.classList.remove('translate-y-20', 'opacity-0');
        notification.classList.add('translate-y-0', 'opacity-100');
        
        if (isSuccess) {
            notification.classList.remove('bg-red-500');
            notification.classList.add('bg-green-500');
        } else {
            notification.classList.remove('bg-green-500');
            notification.classList.add('bg-red-500');
        }
        
        notificationMessage.textContent = message;
        
        setTimeout(() => {
            notification.classList.remove('translate-y-0', 'opacity-100');
            notification.classList.add('translate-y-20', 'opacity-0');
            setTimeout(() => {
                notification.classList.add('hidden');
            }, 300);
        }, 3000);
    }

    // Fungsi untuk beralih antar tahap
    function goToStep(step) {
        // Sembunyikan semua tahap
        document.querySelectorAll('.step-content').forEach(el => {
            el.classList.add('hidden');
        });
        
        // Tampilkan tahap yang dipilih
        document.getElementById(`step-${step}`).classList.remove('hidden');
        document.getElementById(`step-${step}`).classList.add('animate-fade-in');
        
        // Update status tombol navigasi
        document.querySelectorAll('.step-btn').forEach((btn, index) => {
            if (index + 1 === step) {
                btn.classList.add('active', 'text-primary', 'dark:text-blue-400');
                btn.classList.remove('text-gray-500', 'dark:text-gray-400');
            } else {
                btn.classList.remove('active', 'text-primary', 'dark:text-blue-400');
                btn.classList.add('text-gray-500', 'dark:text-gray-400');
            }
        });
        
        currentStep = step;
    }

    // Inisialisasi navigasi tahap
    document.querySelectorAll('.step-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const step = parseInt(this.getAttribute('data-step'));
            goToStep(step);
        });
    });

    // Tombol Sewa Sekarang
    document.querySelectorAll('.rent-now-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const carName = this.getAttribute('data-car');
            const carType = this.getAttribute('data-type');
            const carPrice = this.getAttribute('data-price');
            
            selectedCar = {
                name: carName,
                type: carType,
                price: parseInt(carPrice),
                image: `https://picsum.photos/seed/${carName.replace(/\s+/g, '').toLowerCase()}/200/150.jpg`
            };
            
            // Update detail mobil yang dipilih
            document.getElementById('selected-car-name').textContent = selectedCar.name;
            document.getElementById('selected-car-type').textContent = selectedCar.type;
            document.getElementById('selected-car-price').textContent = `Rp ${selectedCar.price.toLocaleString()}`;
            document.getElementById('selected-car-image').src = selectedCar.image;
            
            // Pindah ke tahap 2
            goToStep(2);
        });
    });

    // Tombol Kembali ke Penawaran Mobil
    document.getElementById('back-to-cars').addEventListener('click', function() {
        goToStep(1);
    });

    // Form penyewaan
    document.getElementById('rental-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Ambil data dari form
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        const payment = document.getElementById('payment');
        const paymentMethod = payment.options[payment.selectedIndex].text;
        
        // Validasi tanggal
        const start = new Date(startDate);
        const end = new Date(endDate);
        
        if (end <= start) {
            showNotification('Tanggal kembali harus lebih besar dari tanggal mulai sewa', false);
            return;
        }
        
        // Hitung durasi dalam hari
        const duration = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
        const total = selectedCar.price * duration;
        
        // Update detail konfirmasi
        document.getElementById('confirm-car-name').textContent = selectedCar.name;
        document.getElementById('confirm-car-type').textContent = selectedCar.type;
        document.getElementById('confirm-car-price').textContent = `Rp ${selectedCar.price.toLocaleString()}`;
        document.getElementById('confirm-car-image').src = selectedCar.image;
        
        document.getElementById('confirm-name').textContent = name;
        document.getElementById('confirm-phone').textContent = phone;
        document.getElementById('confirm-start-date').textContent = formatDate(startDate);
        document.getElementById('confirm-end-date').textContent = formatDate(endDate);
        document.getElementById('confirm-payment').textContent = paymentMethod;
        
        document.getElementById('confirm-daily-price').textContent = `Rp ${selectedCar.price.toLocaleString()}`;
        document.getElementById('confirm-duration').textContent = `${duration} hari`;
        document.getElementById('confirm-total').textContent = `Rp ${total.toLocaleString()}`;
        
        // Pindah ke tahap 3
        goToStep(3);
    });

    // Tombol Kembali ke Form
    document.getElementById('back-to-form').addEventListener('click', function() {
        goToStep(2);
    });

    // Tombol Konfirmasi Sewa
    document.getElementById('confirm-rental').addEventListener('click', function() {
        // Simpan data penyewaan ke riwayat
        const startDate = document.getElementById('confirm-start-date').textContent;
        const endDate = document.getElementById('confirm-end-date').textContent;
        
        const rental = {
            id: Date.now(),
            car: selectedCar.name,
            startDate: startDate,
            endDate: endDate,
            status: 'Sedang Diproses'
        };
        
        rentalHistory.push(rental);
        
        // Update riwayat penyewaan
        updateRentalHistory();
        
        // Tampilkan notifikasi
        showNotification('Penyewaan berhasil dikonfirmasi');
        
        // Pindah ke tahap 4
        goToStep(4);
    });

    // Fungsi untuk memformat tanggal
    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    }

    // Fungsi untuk memperbarui riwayat penyewaan
    function updateRentalHistory() {
        const historyContainer = document.getElementById('rental-history');
        historyContainer.innerHTML = '';
        
        if (rentalHistory.length === 0) {
            const emptyRow = document.createElement('tr');
            emptyRow.innerHTML = `
                <td colspan="4" class="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                    Belum ada riwayat penyewaan
                </td>
            `;
            historyContainer.appendChild(emptyRow);
            return;
        }
        
        rentalHistory.forEach(rental => {
            const row = document.createElement('tr');
            
            let statusClass = '';
            if (rental.status === 'Disetujui') {
                statusClass = 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
            } else if (rental.status === 'Ditolak') {
                statusClass = 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
            } else {
                statusClass = 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
            }
            
            row.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm font-medium text-gray-900 dark:text-white">${rental.car}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-700 dark:text-gray-300">${rental.startDate} - ${rental.endDate}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-700 dark:text-gray-300">${calculateDuration(rental.startDate, rental.endDate)}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusClass}">
                        ${rental.status}
                    </span>
                </td>
            `;
            
            historyContainer.appendChild(row);
        });
    }

    // Fungsi untuk menghitung durasi penyewaan
    function calculateDuration(startDate, endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);
        const duration = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
        return `${duration} hari`;
    }

    // Inisialisasi riwayat penyewaan
    updateRentalHistory();
});
