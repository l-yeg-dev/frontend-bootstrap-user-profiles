const users = [
    { name: "Иван Иванов", age: 28, city: "Москва", bio: "Программист в компании TechCorp." },
    { name: "Мария Смирнова", age: 32, city: "Санкт-Петербург", bio: "Дизайнер UX с 10-летним опытом." },
    { name: "Александра Фёдорова", age: 24, city: "Казань", bio: "Младший фронтенд-разработчик и энтузиаст React." },
    { name: "Михаил Петров", age: 40, city: "Новосибирск", bio: "Full-stack разработчик и наставник." }
];

const userCardsContainer = document.getElementById("user-cards");

users.forEach((user, index) => {
    const card = document.createElement("div");
    card.className = "col-12 col-md-6 col-lg-3";
    card.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${user.name}</h5>
        <p class="card-text">Age: ${user.age}</p>
        <p class="card-text">City: ${user.city}</p>
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#userModal" data-index="${index}">
          Подробнее
        </button>
      </div>
    </div>
  `;
    userCardsContainer.appendChild(card);
});

const userModal = document.getElementById("userModal");
userModal.addEventListener("show.bs.modal", (event) => {
    const button = event.relatedTarget;
    const index = button.getAttribute("data-index");
    const user = users[index];

    userModal.querySelector(".modal-body").innerHTML = `
    <h5>${user.name}</h5>
    <p><strong>Возраст:</strong> ${user.age}</p>
    <p><strong>Город:</strong> ${user.city}</p>
    <p>${user.bio}</p>
  `;
});
