export function pulseNode(id){const n=document.querySelector(`[data-id="${id}"]`);if(!n)return;n.classList.add('active');setTimeout(()=>n.classList.remove('active'),650)}

