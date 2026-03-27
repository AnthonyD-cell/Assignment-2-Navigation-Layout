function updateStatusColor(selectElement) {
    const value = selectElement.value;
    const classes = ['status-approved', 'status-rejected', 'status-interview', 'status-pending'];
    
    classes.forEach(cls => selectElement.classList.remove(cls));
    
    if (value === 'approved') {
        selectElement.classList.add('status-approved');
    } else if (value === 'rejected') {
        selectElement.classList.add('status-rejected');
    } else if (value === 'interview') {
        selectElement.classList.add('status-interview');
    } else {
        selectElement.classList.add('status-pending');
    }
}

function initializeDropdowns() {
    const selects = document.querySelectorAll('.status-select');
    selects.forEach(select => {
        updateStatusColor(select);
    });
}
window.onload = initializeDropdowns;