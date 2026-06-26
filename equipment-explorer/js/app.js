const card=document.getElementById('card'),sheet=document.getElementById('sheet');
function render(id){
const d=equipment[id];
document.querySelectorAll('.spot').forEach(s=>s.classList.toggle('active',s.dataset.id===id));
const html=`<h2>${d.name}</h2><p>${d.desc}</p>
<h3>Research</h3><ul>${d.research.map(x=>`<li>${x}</li>`).join('')}</ul>
<h3>Students</h3><ul>${d.students.map(x=>`<li>${x}</li>`).join('')}</ul>
<h3>Publications</h3><ul>${d.papers.map(x=>`<li>📄 ${x}</li>`).join('')}</ul>`;
if(window.innerWidth<900){sheet.innerHTML=html;sheet.classList.add('open');}
else card.innerHTML=html;
}
document.querySelectorAll('.spot').forEach(b=>{
b.onmouseenter=()=>render(b.dataset.id);
b.onclick=()=>render(b.dataset.id);
});
const chips=document.getElementById('chips');
['All','Event','Light Field','RGB','VR'].forEach(c=>{
let el=document.createElement('span');el.className='chip';el.textContent=c;
el.onclick=()=>{document.querySelectorAll('.spot').forEach(s=>{
const t=equipment[s.dataset.id].type;
s.style.display=(c==='All'||t===c)?'':'none';
});};
chips.appendChild(el);
});
document.getElementById('search').oninput=e=>{
const q=e.target.value.toLowerCase();
document.querySelectorAll('.spot').forEach(s=>{
const d=equipment[s.dataset.id];
s.style.display=(d.name.toLowerCase().includes(q)||d.type.toLowerCase().includes(q))?'':'none';
});
};