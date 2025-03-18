const findBalancedIndex = (s) => {
    let balance = 0;
    for (let i = 0; i < s.length; i++) {
        balance += s[i] === '(' ? 1 : -1;
        if (balance === 0) return i + 1;
    }
};

const isCorrect = (s) => {
    let stack = [];
    for (let ch of s) {
        if (ch === "(") {
            stack.push(ch);
        } else {
            if (!stack.length) return false;
            stack.pop();
        }
    }
    return stack.length === 0;
};

const reverse = (s) => {
    return s.split("").map(ch => (ch === "(" ? ")" : "(")).join("");
};

function solution(p) {
    if (p === "") return p; // 1. 빈 문자열이면 반환

    const splitIdx = findBalancedIndex(p);
    const u = p.slice(0, splitIdx);
    const v = p.slice(splitIdx);

    if (isCorrect(u)) {
        return u + solution(v);
    } else {
        return "(" + solution(v) + ")" + reverse(u.slice(1, -1));
    }
}
