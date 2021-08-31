function getNewCard(title, description) {
  return `
  <div class="Hero__task-item">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${description}</p>
        <a href="#" class="btn btn-secondary">Posponer</a>
      </div>
    </div>
  </div>
  `
}