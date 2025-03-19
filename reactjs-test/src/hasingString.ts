export const hashingString = (
  name: string,
  gender: "pria" | "wanita" = "pria"
) => {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();

  return `${day}${month}${year}${name}${gender}ifabula`;
};

console.log(hashingString("radid"));
