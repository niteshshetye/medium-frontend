enum Env {
  local = "local",
  staging = "staging",
}

export const env = Env.staging;

const BASE_URL = {
  [Env.local]: "http://localhost:54506",
  [Env.staging]: "https://mediumapi.niteshshetye204.workers.dev",
};

export const BaseURl = BASE_URL[env];

export const AuthUrl = {
  signin: "/api/v1/auth/signin",
  signup: "/api/v1/auth/signup",
};

export const BlogUrl = {
  list: "/api/v1/blog",
  create: "/api/v1/blog",
  info: "/api/v1/blog",
  update: "/api/v1/blog",
  search: "/api/v1/blog/search",
};

export const UsersUrl = {
  list: "/api/v1/users",
};
