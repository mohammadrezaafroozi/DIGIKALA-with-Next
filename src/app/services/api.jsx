export const fetchHomeData = async () => {
  const response = await fetch('https://api.one-api.ir/digikala/v1/home/', {
    method: "GET",
    headers: {
      accept: "application/json",
      "one-api-token": "661789:688095ec12209", // توکن رو با توکن خودت جایگزین کن
    },
  });
  if (!response.ok) throw new Error("خطا در دریافت اطلاعات");
  return response.json();
};






