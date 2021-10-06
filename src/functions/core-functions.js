export const addBackDrop = () => {
    const backdrop = document.createElement('div')
    backdrop.setAttribute('id', 'backdrop')
    backdrop.classList.add('modal-backdrop', 'fade', 'show')
    document.body.appendChild(backdrop)
}

export const removeBackDrop = () => {
    const backdrop = document.querySelector('#backdrop')
    backdrop.remove()
}

export const showTaskModal = () => {
    const modalElement = document.querySelector('#add-task-modal')
    modalElement.style.display = "block"
}

export const hideTaskModal = () => {
    const modalElement = document.querySelector('#add-task-modal')
    modalElement.style.display = "none"
}

export const toggleTaskModal = (displayTaskModal) => {
    if (displayTaskModal === false) {
        document.body.classList.add('modal-open')
        addBackDrop()
        showTaskModal()
    } else {
        document.body.classList.remove('modal-open')
        removeBackDrop()
        hideTaskModal()
    }
}