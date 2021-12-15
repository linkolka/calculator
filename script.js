btn.onclick = function () {
    const a = 0.446;
    const b = 0.00025;
    const c = 22.5;
    const d = 3;
    const e = 0.042;
    const f = 15;
    const shelfReamer = 100;
    const shelfWidth = Number(document.getElementById('width').value);
    const shelfDepth = Number(document.getElementById('depth').value);
    const shelfEnchancerQuantity = document.getElementById('enchancer').value;
    const shelfEnchancer = Math.round((e * shelfWidth + d) * (shelfEnchancerQuantity / a));
    
    const shelfCostIntermediate = Math.round(((shelfWidth + shelfReamer) * (shelfDepth + shelfReamer) * b + c) / a);
    
    const shelfCost = shelfCostIntermediate + shelfEnchancer + f;
    
    
    
    document.getElementById('str').innerHTML="Результат: "+shelfCost;
    }
    