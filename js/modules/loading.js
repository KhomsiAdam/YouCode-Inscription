export function loading() {
    setTimeout(() => {        
        document.querySelectorAll('.loading').forEach(tag => {
            tag.classList.remove('loading');
        });
    }, 200);
}