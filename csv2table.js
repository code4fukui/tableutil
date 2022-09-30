export const csv2table = (csv, names) => {
  const cr = (tag, p) => {
    const c = document.createElement(tag);
    if (p) {
      p.appendChild(c);
    }
    return c;
  };
  const tbl = cr("table");
  for (const d of data) {
    const tr = cr("tr", tbl);
    for (const name of names) {
      const td = cr("td", tr);
      if (name == "image") {
        const img = cr("img", td);
        img.src = d[name];
      } else {
        td.textContent = d[name];
      }
      td.className = name;
    }
  }
  return tbl;
};
