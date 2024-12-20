function solution(phone_book) {
    phone_book.sort(); // O(N log N)
    return !phone_book.some((phone, i, arr) => 
        i < arr.length - 1 && arr[i + 1].startsWith(phone)
    );
}