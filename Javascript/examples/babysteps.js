// part of npm's learnyounode challenges.
let len = process.argv.length;
let ans = 0;
for(var i = 2; i < len; i++){
  ans += (process.argv[i] * 1);
}
console.log(ans);
