const heading = (title, info) => {
    const div = document.createElement('div');
    const h = document.createElement('h2');
    h.innerHTML = title;
    div.appendChild(h);
    for (let i = 0; i < info.length; i++) {
        if (i > 0) div.innerHTML += ' | ';
        div.appendChild(info[i]);
    }
    return div;
}

const section = (title, subsections) => {
    const div = document.createElement('div');
    div.appendChild(document.createElement('hr'));
    const h = document.createElement('h3');
    h.innerHTML = title;
    div.appendChild(h);
    for (const s of subsections)
        div.appendChild(s);
    return div;
};

const subsection = (title, info, description) => {
    const div = document.createElement('div');
    const t = document.createElement('b');
    t.innerHTML = title;
    div.appendChild(t);
    if (info.length > 0)
        div.appendChild(document.createElement('br'));
    for (let i = 0; i < info.length; i++) {
        if (i > 0) div.innerHTML += ' | ';
        div.innerHTML += info[i];
    }
    div.appendChild(document.createElement('br'));
    div.innerHTML += description;
    div.appendChild(document.createElement('br'));
    div.appendChild(document.createElement('br'));
    return div;
};

const link = (url, name) => {
    const a = document.createElement('a');
    a.target = '_blank';
    a.href = url;
    a.innerHTML = name; 
    return a;
};