document.addEventListener("DOMContentLoaded", function () {
    const uvE = document.getElementById('busuanzi_value_site_uv');
    const pvE = document.getElementById('busuanzi_value_site_pv');
    const uvObs = new MutationObserver((mutationsList) => {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                uvObs.disconnect();
                mutation.target.innerHTML = parseInt(mutation.target.innerHTML) + 7561;
                break;
            }
        }
    });
    const pvObs = new MutationObserver((mutationsList) => {
        for (let mutation of mutationsList) {
            if (mutation.type === 'childList') {
                pvObs.disconnect();
                mutation.target.innerHTML = parseInt(mutation.target.innerHTML) + 9643;
                break;
            }
        }
    });
    const config = {
        childList: true
    };
    uvObs.observe(uvE, config);
    pvObs.observe(pvE, config);
});