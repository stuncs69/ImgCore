#!npx ts-node
const _ = require("lodash");
const wt = require("worker_threads");
const os = require("os");
const pf = require("perf_hooks")

console.log(pf.performance.now())

if (wt.isMainThread) {
    
    for (let x = 0; x < Math.ceil(os.cpus().length / 2); x++) {
        new wt.Worker(__filename)
    }
} else {
    for (let y = 0; y < (999999999 / Math.ceil(os.cpus().length / 2)); y++) {
        // Nothing :)
    }
}

if (wt.isMainThread) {
    console.log(pf.performance.now())
}