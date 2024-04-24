export function nameInitials(name: string) {
  const nameArray = name.split(" ");
  const firstIndex = 0;
  const lastIndex = nameArray.length - 1;

  const firstName = nameArray[firstIndex] || "";
  const lastName = nameArray[lastIndex] || "";

  return `${firstName.charAt(0)}${lastName.charAt(0)}`;
}
