// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
	initializeMobileMenu();
	initializeSmoothScroll();
	updatePrayerTimes();
	loadAgendaItems();
	initializeCalendar();
	loadJournalEntries();
});

function initializeMobileMenu() {
	const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
	const navLinks = document.querySelector(".nav-links");

	if (mobileMenuBtn && navLinks) {
		mobileMenuBtn.addEventListener("click", () => {
			navLinks.classList.toggle("hidden");
			mobileMenuBtn.querySelectorAll("span").forEach((span) => {
				span.classList.toggle("active");
			});
		});
	}
}

function initializeSmoothScroll() {
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();
			const target = document.querySelector(this.getAttribute("href"));
			if (target) {
				target.scrollIntoView({
					behavior: "smooth",
				});
			}
		});
	});
}

function updatePrayerTimes() {
	const prayerTimes = {
		subuh: "04:30",
		dzuhur: "12:00",
		ashar: "15:15",
		maghrib: "18:00",
		isya: "19:15",
	};

	Object.entries(prayerTimes).forEach(([prayer, time]) => {
		const element = document.getElementById(`${prayer}-time`);
		if (element) {
			element.textContent = time;
		}
	});
}

function loadAgendaItems() {
	const agendaItems = [
		{
			title: "Pengajian Mingguan",
			schedule: "Setiap Ahad pukul 08:00 - 10:00",
			description: "Pembahasan Kitab Riyadhus Shalihin",
		},
		{
			title: "Tahsin Al-Quran",
			schedule: "Setiap Selasa & Kamis pukul 18:30 - 20:00",
			description: "Untuk semua jenjang usia",
		},
	];

	const agendaGrid = document.querySelector(".agenda-grid");
	if (agendaGrid) {
		agendaGrid.innerHTML = agendaItems
			.map(
				(item) => `
            <div class="agenda-item">
                <h3 class="text-xl font-bold mb-2">${item.title}</h3>
                <p class="text-gray-600">${item.schedule}</p>
                <p class="mt-2">${item.description}</p>
            </div>
        `
			)
			.join("");
	}
}

function initializeCalendar() {
	const currentDate = new Date();
	const currentMonth = document.getElementById("current-month");
	const calendarGrid = document.getElementById("calendar-grid");

	if (currentMonth && calendarGrid) {
		// Set current Hijri month
		currentMonth.textContent = "Jumadil Akhir 1445 H";

		// Generate calendar days
		const days = [
			"Ahad",
			"Senin",
			"Selasa",
			"Rabu",
			"Kamis",
			"Jumat",
			"Sabtu",
		];
		const daysInMonth = 30; // This should be calculated properly for Hijri calendar

		// Create header
		let calendarHTML = days
			.map((day) => `<div class="font-bold">${day}</div>`)
			.join("");

		// Create date cells
		for (let i = 1; i <= daysInMonth; i++) {
			calendarHTML += `
                <div class="p-2 border hover:bg-green-100 cursor-pointer">
                    ${i}
                </div>
            `;
		}

		calendarGrid.innerHTML = calendarHTML;
	}
}

function loadJournalEntries() {
	const journalEntries = [
		{
			title: "Ceramah Ba'da Maghrib",
			date: "10 Februari 2025",
			content:
				"Ustadz Ahmad memberikan ceramah tentang pentingnya menjaga silaturahmi. Dihadiri oleh 50 jamaah.",
		},
		{
			title: "Santunan Anak Yatim",
			date: "9 Februari 2025",
			content:
				"Pemberian santunan kepada 20 anak yatim dari lingkungan sekitar masjid.",
		},
	];

	const journalContainer = document.getElementById("journal-entries");
	if (journalContainer) {
		journalContainer.innerHTML = journalEntries
			.map(
				(entry) => `
            <div class="journal-entry">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-xl font-bold">${entry.title}</h3>
                    <span class="text-gray-600">${entry.date}</span>
                </div>
                <p>${entry.content}</p>
            </div>
        `
			)
			.join("");
	}
}
