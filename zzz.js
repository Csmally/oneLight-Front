let aa = 3;
let bb = 9;
let cc = { t1: '111', t2: '222' };
let dd = { t3: '333', t4: '444' };
let ee = {
    cb: 'cbcb',
    ...aa !== bb ? cc : dd
}
console.log('ee:',ee)