export type product = {
  id: string;
  photo: string;
  title: string;
  description: string;
};

export type team = {
  id: string;
  photo: string;
  name: string;
  role: string;
  description: string;
};

export type facts = {
  id: string;
  figure: string;
  title: string;
};

export type job = {
  id: string;
  role: string;
  description: string;
  company: string;
  years: string;
};

export type testimonial = {
  id: string;
  name: string;
  photo: string;
  roleAndCompany: string;
  testimonial: string;
};
