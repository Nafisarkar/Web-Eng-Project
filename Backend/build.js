window.addEventListener('load', function() {
    
    // Update build name and others
    var cpudata = localStorage.getItem("CPU");
    var cpudataParts = cpudata.split('|');
    
    document.getElementById('cpuname').textContent = cpudataParts[0];
    document.getElementById('cpuprice').textContent = cpudataParts[1] + "৳";


    // Update build name and others
    var cpucoolerdata = localStorage.getItem("CPUCOOLER");
    var cpucoolerdataParts = cpucoolerdata.split('|');
    
    document.getElementById('cpucoolername').textContent = cpucoolerdataParts[0];
    document.getElementById('cpucoolerprice').textContent = cpucoolerdataParts[1] + "৳";

    var motherboarddata = localStorage.getItem("MOTHEROARD");
    var motherboarddataParts = motherboarddata.split('|');

    document.getElementById('motherboardname').textContent = motherboarddataParts[0];
    document.getElementById('motherboardprice').textContent = motherboarddataParts[1] + "৳";

    var memorydata = localStorage.getItem("MEMORY");
    var memorydataParts = memorydata.split('|');

    document.getElementById('memoryname').textContent = memorydataParts[0];
    document.getElementById('memoryprice').textContent = memorydataParts[1] + "৳";

    var storagedata = localStorage.getItem("STORAGE");
    var storagedataParts = storagedata.split('|');

    document.getElementById('storagename').textContent = storagedataParts[0];
    document.getElementById('storageprice').textContent = storagedataParts[1] + "৳";

    var gpudata = localStorage.getItem("VIDEOCARD");
    var gpudataParts = gpudata.split('|');

    document.getElementById('gpuname').textContent = gpudataParts[0];
    document.getElementById('gpuprice').textContent = gpudataParts[1] + "৳";

    var casedata = localStorage.getItem("CASE");
    var casedataParts = casedata.split('|');

    document.getElementById('casename').textContent = casedataParts[0];
    document.getElementById('caseprice').textContent = casedataParts[1] + "৳";

    var powerSupplydata = localStorage.getItem("PSU");
    var powerSupplydataParts = powerSupplydata.split('|');

    document.getElementById('psuname').textContent = powerSupplydataParts[0];
    document.getElementById('psuprice').textContent = powerSupplydataParts[1] + "৳";

    var totalprice = parseInt(cpudataParts[1].replace(',','')) + parseInt(cpucoolerdataParts[1].replace(',','')) + parseInt(motherboarddataParts[1].replace(',','')) + parseInt(memorydataParts[1].replace(',','')) + parseInt(storagedataParts[1].replace(',','')) + parseInt(gpudataParts[1].replace(',','')) + parseInt(casedataParts[1].replace(',','')) + parseInt(powerSupplydataParts[1].replace(',',''));

    document.getElementById('total_price').textContent = " Total : " + totalprice + " ৳";
}); 