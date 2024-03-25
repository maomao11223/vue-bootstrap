// 判斷是否為手機板
const isMobile = () => {
    const flag = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    return flag;
};



const tools = {
    isMobile,
};
export default tools;
