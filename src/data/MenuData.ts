interface MenuItem {
   id: number;
   title: string;
   link: string;
   has_dropdown: boolean;
   sub_menus?: {
      link: string;
      title: string;
   }[];
}[];

const menu_data: MenuItem[] = [
   {
      id: 5,
      has_dropdown: false,
      title: "Dapatkan Website Gratis",
      link: "/contact",
   },
];
export default menu_data;
