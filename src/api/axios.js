import axios from "axios";

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3", // URL 중복 되는 부분은 이렇게 미리 설정해둠
    params: {
        api_key : "b18e798ff377ef49f1c335283e7c43d6", // API 키이다.
        language : "ko-KR", // 한국어 설정
    },
});

export default instance;