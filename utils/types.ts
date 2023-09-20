// types used in the application
export type User = {
  name: string,
  email: string,
  profile?: string,
  login: boolean,
  darkTheme: boolean,
};

export type Menu = {
  icon: React.ReactNode,
  title: string,
  amount: number,
  color: string
  path: string,
}
