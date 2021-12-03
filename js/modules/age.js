// Calculate Age depending on Date of birth (YYYY-MM-DD)
const yearInMs = 3.15576e+10;
export const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / yearInMs);