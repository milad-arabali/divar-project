const defaultOptions = {
    queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: 1,
        staleTime: 1000 * 60 * 60 * 24
    }
};
export default defaultOptions;
