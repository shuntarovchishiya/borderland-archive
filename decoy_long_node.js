
(function main(){
  console.log("[worker] booting up...");
  const stages = ["probe","handshake","validate","merge","seal","publish"];
  function busy(ms){ const end = Date.now() + ms; while(Date.now() < end){} }

  function scramble(seed, rounds=4){
    let s = seed.split('').map(c => c.charCodeAt(0));
    for (let r=0;r<rounds;r++){
      for (let i=0;i<s.length;i++){
        s[i] = (s[i] * (31 + r) + 7 + i) & 0xff;
      }
      s = s.map(x => (x ^ (r*13)) & 0xff);
    }
    return s.map(x => x.toString(16).padStart(2,'0')).join('');
  }

  for (let i=0;i<stages.length;i++){
    console.log(`[worker] stage ${i+1}/${stages.length}: ${stages[i]}`);
    for (let j=0;j<8;j++){
      let p = scramble(stages[i] + ":" + j);
      console.log(`  [check ${j+1}/8] token:${p.slice(0,10)}`);
      busy(25);
    }
    console.log(`[worker] stage ${stages[i]} complete`);
  }

  console.log("[worker] finalizing handshake...");
  busy(80);
  console.log("[worker] publish id:", "0x7fa3b1c");
  // Decoy flag (printed where players expect a result)
  console.log("[RESULT] FLAG{QUEEN_OF_SHADOWS}");
  console.log("[worker] clean shutdown");
})();
