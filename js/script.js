hover2.onmouseover = function(event) {
    for (let i = 0; i < requiredFields.length; i++) {
        let requiredField = requiredFields[i];

        if (!requiredField.value) {
            requiredField.style.border = '3px solid rgba(226, 16, 132, 0.3)';
            requiredField.style.transition = '0.3s';
        }
    }
};

hover2.onmouseout = function(event) {
    let requiredFields = document.querySelectorAll("[required]");

    for (let i = 0; i < requiredFields.length; i++) {
        let requiredField = requiredFields[i];
        requiredField.style.border = '3px solid rgba(226, 16, 132, 0)';
    }
};

hover1.onmouseover = function(event) {
    let requiredFields = document.querySelectorAll("[required]");

    for (let i = 0; i < requiredFields.length; i++) {
        let requiredField = requiredFields[i];

        if (!requiredField.value) {
            requiredField.style.border = '3px solid rgba(226, 16, 132, 0.5)';
            requiredField.style.transition = '0.3s';
        }
    }
};

hover1.onmouseout = function(event) {
    let requiredFields = document.querySelectorAll("[required]");

    for (let i = 0; i < requiredFields.length; i++) {
        let requiredField = requiredFields[i];
        requiredField.style.border = '3px solid rgba(226, 16, 132, 0)';
    }
};

button.onmouseover = function(e) {
    let requiredFields = document.querySelectorAll("[required]");

    for (let i = 0; i < requiredFields.length; i++) {
        let requiredField = requiredFields[i];

        if (!requiredField.value) {
            requiredField.style.border = '3px solid rgba(226, 16, 132, 1)';
            requiredField.style.transition = '0.3s';
        }
    }
};

button.onmouseout = function(event) {
    let requiredFields = document.querySelectorAll("[required]");

    for (let i = 0; i < requiredFields.length; i++) {
        let requiredField = requiredFields[i];
            requiredField.style.border = '3px solid rgba(226, 16, 132, 0)';
    }
};