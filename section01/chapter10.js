// 1. for 반복문

for (let idx = 0; idx <= 15; idx++) {
    if (idx % 2 == 0) {
        continue;
    }
    console.log("idx");
    if (idx > 5) {
        break;
    }
}
