function sizeSpacer(spacer) {
    spacer.style.height = 0;
    var container = spacer.parentNode;
    var img = spacer.nextElementSibling || spacer.nextSibling;
    var lastContentNode = container.children[container.children.length - 1];
    var h = Math.max(0, container.clientHeight - img.clientHeight);
    spacer.style.height = h + "px";
    while (h > 0 && img.getBoundingClientRect().bottom > lastContentNode.getBoundingClientRect().bottom) {
        spacer.style.height = --h + "px";
    }
}

onload = onresize = function() {
    sizeSpacer(document.getElementById("aboutMeSpacer"));
};

const dayNghtSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    let label = document.getElementById('DayNightLabel');
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        label.innerHTML = 'Disable Dark Mode!';
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        label.innerHTML = 'Enable Dark Mode!';
    }    
}

dayNghtSwitch.addEventListener('change', switchTheme, false);