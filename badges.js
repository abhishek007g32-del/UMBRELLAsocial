// badges.js - Use in ALL PAGES
function getSingleTag(u){
  if(!u) return '';
  if(u.isStaff && !u.isFounder){
    const role=(u.staffRole||'SUPPORT STAFF').toUpperCase();
    return `<span class="badge-locked inline-flex px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-[7px] font-black tracking-widest">${role}</span>`;
  }
  let html = '<span class="badge-group-universal">';
  // ORDER: 1. Verified FIRST, 2. Featured SECOND, 3. Founder THIRD
  if(u.isVerified){
    html += '<span class="badge-item badge-verified-universal"><i class="fa-solid fa-check"></i></span>';
  }
  if(u.isFeatured){
    html += '<span class="badge-item badge-featured-universal"><i class="fa-solid fa-bolt"></i></span>';
  }
  if(u.isFounder){
    html += '<span class="badge-item badge-founder-universal"><i class="fa-solid fa-crown"></i></span>';
  }
  html += '</span>';
  return html;
}
function getTagsStacked(u){ return getSingleTag(u); }
