const setCookie = (tokens) => {
    document.cookie = `accessToken=${tokens.accessToken}; path=/; max-age=${1 * 24 * 60 * 60}`;
    document.cookie = `refreshToken=${tokens.refreshToken}; path=/; max-age=${30 * 24 * 60 * 60}`;
};

export default setCookie;
